<script setup>
import TemplateContainer from "./TemplateContainer.vue";
import OnlineTrackingTableComponent from "./OnlineTrackingTableComponent.vue";
import DocumentTypeApiService from "@/services/DocumentTypeApiService";
import CategoryApiService from "@/services/CategoryApiService";
import PublicUserApiService from "@/services/PublicUserApiService";
import OfficeApiService from "@/services/OfficeApiService";
</script>

<script>
export default {
  data() {
    return {
      tableHeader: ["No", "Name", "Attachment", "Action"],
      category: [],
      fileType: [],
      bayan: [],
      office: [],
      currentYear: new Date().getFullYear().toString(),
    };
  },
  methods: {
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
  },
  created() {
    this.fetchData();
  },
};
</script>

<template>
  <TemplateContainer>
    <div class="form p-4">
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
              aria-label="Default select example"
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
              type="number"
              class="form-control bg-transparent p-2 rounded-0"
              placeholder=""
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
