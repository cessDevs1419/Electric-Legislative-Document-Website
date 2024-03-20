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
        type_id: 0,
        category_id: 0,
        bayan_id: 0,
        office_id: 0,
        no: 0,
        year: new Date().getFullYear(),
        pages: 0,
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
    "formValue.category_id": function (newCategoryId, oldCategoryId) {
      console.log("New Category ID:", newCategoryId);
      console.log("Old Category ID:", oldCategoryId);
    },
    selectedRequirements: {
      handler(newRequirements) {
        this.formValue.requirements = newRequirements;
      },
      deep: true,
    },
  },
  methods: {
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
    submissionEvent() {
      const body = new FormData();

      body.append("type_id", this.formValue.type_id);
      body.append("category_id", this.formValue.category_id);
      body.append("bayan_id", this.formValue.bayan_id);
      body.append("office_id", this.formValue.office_id);
      body.append("no", this.formValue.no);
      body.append("year", this.formValue.year);
      body.append("pages", this.formValue.pages);
      body.append("title", this.formValue.title);

      for (let rIndex = 0; rIndex < this.formValue.requirements.length; rIndex++) {
        let id = this.formValue.requirements[rIndex].id;
        for (let fIndex = 0; fIndex < this.formValue.requirements[rIndex].files.length; fIndex++) {
          let file = this.formValue.requirements[rIndex].files[fIndex];
          console.log('file', file);
          body.append(`requirements[${rIndex}][requirement_id]`, id);
          body.append(`requirements[${rIndex}][files][${fIndex}]`, this.formValue.requirements[rIndex].files[fIndex].file);
        }
      }


      console.log(body);


      DocumentApiService.submitDocument(body)
        .then((data) => {
          console.log(data);
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
  },
  created() {
    this.fetchData();
  },
  mounted() {},
};
</script>

<template>
  <TemplateContainer>
    <form class="border">
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
              <textarea
                class="form-control bg-transparent p-2 rounded-0"
                v-model="formValue.title"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="row w-100 m-auto">
          <div class="col-lg-4">
            <div class="mb-3">
              <label class="form-label">Category</label>
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
              <label class="form-label">Municipality</label>
              <input
                type="text"
                class="form-control disabled-bg grey-font p-2 rounded-0"
                :placeholder="bayan.municipality_name"
                disabled
              />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="mb-3">
              <label class="form-label">Office</label>
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
            :requirements="this.selectedRequirements"
          ></ESubmissionTableComponentVue>
          <div class="btn-group">
            <div
              class="btn-cancel cursor-pointer primary-bg text-white px-3 py-2 me-2"
            >
              <p class="mb-0">Cancel</p>
            </div>
            <div
              class="btn-submit cursor-pointer primary-bg text-white px-3 py-2"
              @click="submissionEvent"
            >
              <p class="mb-0">Submit</p>
            </div>
          </div>
          <p>{{ this.formValue }} {{ this.bayan }}</p>
          <p>{{ this.selectedRequirements }}</p>
        </div>
      </div>
    </form>
  </TemplateContainer>
</template>

<style scoped>
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
