<script setup>
import TemplateContainer from "./TemplateContainer.vue";
import OnlineTrackingTableComponent from "./OnlineTrackingTableComponent.vue";
import DocumentTypeApiService from "@/services/DocumentTypeApiService";
import CategoryApiService from "@/services/CategoryApiService";
import PublicUserApiService from "@/services/PublicUserApiService";
import OfficeApiService from "@/services/OfficeApiService";
import DocumentRequirementApiService from "@/services/DocumentRequirementApiService";
import ESubmissionTableComponentVue from "./ESubmissionTableComponent.vue";
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
      currentYear: new Date().getFullYear().toString(),
    };
  },
  watch: {
    selectedType: {
      handler(newValue) {
        this.displayRequirements(newValue);
      },
      immediate: true, // Call the handler immediately on component load
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
        })
        .catch((error) => {
          console.error("Error fetching bayan:", error);
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
};
</script>

<template>
  <TemplateContainer>
    <div class="tertiary-bg p-4">
      <div class="title">
        <h3 class="fw-bold m-0">E-Submission Form</h3>
        <p class="text-danger m-0">
          ( All fields are required to be filled in )
        </p>
      </div>
      <div class="row w-100 m-auto mt-4">
        <div class="col-lg-4">
          <div class="mb-3">
            <label class="form-label">Type</label>
            <select
              class="form-select p-2 bg-transparent rounded-0"
              v-model="selectedType"
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
        <div class="col-lg-4">
          <div class="mb-3">
            <label class="form-label">Number</label>
            <input
              type="text"
              class="form-control bg-transparent p-2 rounded-0"
              v-model="userInput"
              @keypress="validateNumericInput"
            />
          </div>
        </div>
        <div class="col-lg-4">
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
      </div>
      <div class="row w-100 m-auto">
        <div class="col">
          <div class="mb-3 w-100">
            <label class="form-label">Title</label>
            <textarea
              class="form-control bg-transparent p-2 rounded-0"
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
        <!-- <div>
            <p v-if="selectedRequirements.length > 0">
                Selected Requirements:
                <ul>
                <li v-for="(req, index) in selectedRequirements" :key="index">{{ req }}</li>
                </ul>
            </p>
            <p v-else>
                No requirements selected.
            </p>
        </div> -->
        <ESubmissionTableComponentVue
          :requirements="this.selectedRequirements"
        ></ESubmissionTableComponentVue>
      </div>
    </div>
  </TemplateContainer>
</template>

<style scoped>
.form {
  background: #f2f3f9;
}

.form-control {
  color: var(--gray-divider);
}
</style>
