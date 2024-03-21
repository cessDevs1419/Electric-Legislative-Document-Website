<script setup>
import TemplateContainer from "./TemplateContainer.vue";
import OnlineTrackingTableComponent from "./OnlineTrackingTableComponent.vue";
import DocumentTypeApiService from "@/services/DocumentTypeApiService";
import CategoryApiService from "@/services/CategoryApiService";
import PublicUserApiService from "@/services/PublicUserApiService";
import OfficeApiService from "@/services/OfficeApiService";
import DocumentRequirementApiService from "@/services/DocumentRequirementApiService";
import ESubmissionTableComponentVue from "./ESubmissionTableComponent.vue";
import DocumentApiService from "@/services/DocumentApiService";
import { toast } from "@/toast";
</script>

<script>
export default {
  data() {
    return {
      tableHeader: ["No", "Name", "Attachment", "Action"],
      inputNumber: "",
      category: [],
      fileType: [],
      bayan: [],
      office: [],
      requirements: [],
      selectedType: null,
      selectedRequirements: [],
      formValue: {
        type_id: "",
        category_id: "",
        bayan_id: "",
        office_id: "",
        no: "",
        year: new Date().getFullYear(),
        pages: "",
        title: "",
        requirements: [
          {
            files: [],
          },
        ],
      },
      currentYear: new Date().getFullYear().toString(),
    };
  },
  watch: {
    "formValue.type_id": {
      handler(newValue) {
        this.displayRequirements(newValue);
      },
      immediate: true,
    },
    selectedRequirements: {
      handler(newRequirements) {
        this.formValue.requirements = newRequirements;
      },
      deep: true,
    },
  },
  methods: {
    back() {
      window.history.back();
    },
    displayRequirements(typeId) {
      const selectedItem = this.fileType.find((type) => type.id === typeId);
      if (selectedItem) {
        // Map each requirement to an object with id and name
        this.selectedRequirements = selectedItem.requirements.map((req) => ({
          id: req.id,
          name: req.requirement_name,
        }));
      } else {
        this.selectedRequirements = [];
      }
    },
    fetchData() {
      CategoryApiService.fetch()
        .then((data) => {
          this.category = [];
          this.category.push(...data);
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
      OfficeApiService.fetch()
        .then((data) => {
          this.office = [];
          this.office.push(...data);
        })
        .catch((error) => {
          console.error("Error fetching Office:", error);
        });
      DocumentRequirementApiService.fetch()
        .then((data) => {
          this.requirements = [];
          this.requirements.push(...data);
        })
        .catch((error) => {
          console.error("Error fetching Requirements :", error);
        });
      DocumentApiService.fetch()
        .then((data) => {
          this.requirements = [];
          this.requirements.push(...data);
        })
        .catch((error) => {
          console.error("Error submitting :", error);
        });
      DocumentTypeApiService.fetch()
        .then((data) => {
          this.fileType = [];
          this.fileType.push(...data);
        })
        .catch((error) => {
          console.error("Error fetching Document Type:", error);
        });
      PublicUserApiService.getAuthUser()
        .then((data) => {
          this.bayan = data;
          this.formValue.bayan_id = this.bayan.municipality_id;
        })
        .catch((error) => {
          console.error("Error fetching bayan:", error);
        });
    },
    async submissionEvent() {
      if (!this.validateForm()) {
        return;
      }

      const body = new FormData();

      body.append("type_id", this.formValue.type_id);
      body.append("category_id", this.formValue.category_id);
      body.append("bayan_id", this.formValue.bayan_id);
      body.append("office_id", this.formValue.office_id);
      body.append("no", this.formValue.no);
      body.append("year", this.formValue.year);
      body.append("pages", this.formValue.pages);
      body.append("title", this.formValue.title);

      for (
        let rIndex = 0;
        rIndex < this.formValue.requirements.length;
        rIndex++
      ) {
        let id = this.formValue.requirements[rIndex].id;
        for (
          let fIndex = 0;
          fIndex < this.formValue.requirements[rIndex].files.length;
          fIndex++
        ) {
          body.append(`requirements[${rIndex}][requirement_id]`, id);
          body.append(
            `requirements[${rIndex}][files][${fIndex}]`,
            this.formValue.requirements[rIndex].files[fIndex].file
          );
        }
      }

      DocumentApiService.submitDocument(body)
        .then((data) => {
          if (data.status) {
            toast(data.text, data.type);
            this.resetForm();
          }
        })
        .catch((error) => {
          console.error("Error submitting :", error);
        });
    },
    validateNumericInput(event) {
      const charCode = event.which ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
      }
    },
    resetForm() {
      this.formValue.type_id = "";
      this.formValue.category_id = "";
      this.formValue.no = "";
      this.formValue.pages = "";
      this.formValue.title = "";
      this.formValue.office_id = "";
    },
    validateForm() {
      const {
        type_id,
        category_id,
        bayan_id,
        office_id,
        no,
        year,
        pages,
        title,
        requirements,
      } = this.formValue;

      if (
        !type_id ||
        !category_id ||
        !bayan_id ||
        !office_id ||
        !no ||
        !year ||
        !pages ||
        !title ||
        !requirements ||
        no === 0 ||
        pages === 0
      ) {
        this.emptyField();
        return false;
      }

      return true;
    },

    emptyField() {
      toast("One of the required fields are empty", "error");
    },
  },
  created() {
    this.fetchData();
  },
  mounted() {},
};
</script>

<template>
  <TemplateContainer>
    <form @submit.prevent="submissionEvent">
      <div class="tertiary-bg p-4">
        <div class="title">
          <h3 class="fw-bold m-0">E-Submission Form</h3>
          <p class="text-danger m-0">
            ( All fields are required to be filled in )
          </p>
        </div>
        <div class="row w-100 m-auto mt-4">
          <div class="col-lg-3">
            <div class="mb-3">
              <label class="form-label">Type</label>
              <span class="text-danger"> *</span>
              <select
                class="form-select p-2 bg-transparent rounded-0"
                v-model="formValue.type_id"
                @change="displayRequirements"
              >
                <option disabled value="">Select Document Type</option>
                <option
                  v-for="(type, index) in fileType"
                  :key="index"
                  :value="type.id"
                >
                  {{ type.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="mb-3">
              <label class="form-label">Number</label>
              <span class="text-danger"> *</span>
              <input
                type="text"
                class="form-control bg-transparent p-2 rounded-0"
                v-model="formValue.no"
                @keypress="validateNumericInput"
              />
            </div>
          </div>
          <div class="col-lg-3">
            <div class="mb-3">
              <label class="form-label">Year</label>
              <input
                type="text"
                class="form-control disabled-bg grey-font p-2 rounded-0"
                :value="currentYear"
                disabled
              />
            </div>
          </div>
          <div class="col-lg-3">
            <div class="mb-3">
              <label class="form-label">Pages</label>
              <span class="text-danger"> *</span>
              <input
                type="text"
                class="form-control bg-transparent p-2 rounded-0"
                v-model="formValue.pages"
                @keypress="validateNumericInput"
              />
            </div>
          </div>
        </div>
        <div class="row w-100 m-auto">
          <div class="col">
            <div class="mb-3 w-100">
              <label class="form-label">Title</label>
              <span class="text-danger"> *</span>
              <input
                type="text"
                class="form-control bg-transparent p-2 rounded-0"
                placeholder="Enter title..."
                v-model="formValue.title"
              />
            </div>
          </div>
        </div>
        <div class="row w-100 m-auto">
          <div class="col-lg-4">
            <div class="mb-3">
              <label class="form-label">Category</label>
              <span class="text-danger"> *</span>
              <select
                class="form-select p-2 bg-transparent rounded-0"
                v-model="formValue.category_id"
                aria-label="Default select example"
              >
                <option disabled value="">Select a Category</option>
                <option
                  v-for="(cat, index) in category"
                  :key="index"
                  :value="cat.id"
                >
                  {{ cat.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="mb-3">
              <label class="form-label">Bayan</label>
              <input
                type="text"
                class="form-control disabled-bg grey-font p-2 rounded-0"
                :placeholder="bayan.bayan_name"
                disabled
              />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="mb-3">
              <label class="form-label">Office</label>
              <span class="text-danger"> *</span>
              <select
                class="form-select p-2 bg-transparent rounded-0"
                v-model="formValue.office_id"
                aria-label="Default select example"
              >
                <option disabled value="">Select a Office</option>
                <option
                  v-for="(items, index) in office"
                  :key="index"
                  :value="items.id"
                >
                  {{ items.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="title mt-4">
          <h3 class="fw-bold m-0">Requirements</h3>
          <p class="text-danger m-0">
            ( Only files with the following extensions are allowed : PDV, Excel,
            Docs, JPG, JPEG and PNG. Must be less than 10MB )
          </p>

          <ESubmissionTableComponentVue
            :requirements="selectedRequirements"
          ></ESubmissionTableComponentVue>

          <div
            class="footer w-100 text-center d-flex justify-content-end mt-5 mb-5"
          >
            <button
              class="btn-cancel z-0 overflow-hidden position-relative text-dark py-3 px-4 bg-transparent border primary-divider me-2 rounded-0"
              type="button"
              @click="back"
            >
              <p class="z-3 m-0">CANCEL</p>
              <div
                class="btn-bg z-n1 border top-0 start-0 position-absolute secondary-bg w-100 h-100"
              ></div>
            </button>
            <button
              class="btn text-white py-3 px-4 primary-bg rounded-0"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </form>
  </TemplateContainer>
</template>

<style scoped>
.form-control {
  color: var(--primary-font) !important;
}

.primary-bg {
  background: var(--primary-color);
}

.cursor-pointer {
  cursor: pointer;
}

.form {
  background: #f2f3f9;
}

.form-control {
  color: var(--gray-divider);
}
</style>
