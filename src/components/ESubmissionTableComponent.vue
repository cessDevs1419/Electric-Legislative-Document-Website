<template>
  <div class="table-container w-100 box-shadow overflow-auto px-4">
    <div class="table-header p-4">
      <div class="row">
        <div class="col-lg-6">
          <h4 class="d-flex align-items-center fw-bold">
            <span class="vertical-line"></span>Your E Submission
          </h4>
        </div>
      </div>
    </div>

    <div class="table-body w-100 p-4 pt-0">
      <ul class="w-100 border list-unstyled d-flex">
        <!-- Table header -->
        <li
          class="primary-bg text-white fw-semibold py-3 m-auto w-25 text-center"
          v-for="(header, index) in tableHeader"
          :key="index"
        >
          {{ header }}
        </li>
      </ul>

      <!-- Table rows -->
      <ul
        class="w-100 list-unstyled d-flex"
        v-for="(req, index) in requirements"
        :key="index"
      >
        <!-- No (requirementID) column -->
        <li class="py-3 m-auto w-25 text-center">
          {{ req.id }}
        </li>

        <!-- Name (requirements) column -->
        <li class="py-3 m-auto w-25 text-center">
          {{ req.name }}
        </li>
        <li class="py-3 m-auto w-25 text-center"></li>
        <li class="py-3 m-auto w-25 text-center"></li>
      </ul>

      <!-- Show message if no requirements -->
      <p v-if="requirements.length === 0" class="text-center mt-3">
        No requirements to display.
      </p>
    </div>
  </div>
</template>

<script setup>
import DocumentRequirementApiService from "@/services/DocumentRequirementApiService";
</script>

<script>
export default {
  data() {
    return {
      tableHeader: ["No", "Name", "Attachment", "Action"],
    };
  },
  props: {
    requirementID: {
      type: Number,
      required: true,
    },
    requirements: {
      type: Array,
      required: true,
    },
  },
};
</script>
