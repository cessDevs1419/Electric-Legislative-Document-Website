<template>
  <div class="table-container w-100 overflow-auto pt-4">
    <div class="table-body w-100 pt-0">
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

        <!-- Attachment column -->
        <div class="py-3 m-auto w-25 text-center d-flex justify-content-center">
          <div>
            <i
              v-for="(attachment, index) in req.attachments"
              :key="index"
              :class="iconClass(attachment.attachmentType)"
              style="font-size: 24px"
            ></i>
          </div>
        </div>

        <!-- Action column with upload button -->
        <li class="py-3 m-auto w-25 text-center d-flex justify-content-center">
          <!-- Upload Icon (Always Visible) -->
          <div
            class="action-btns primary-bg w-100 d-flex justify-content-center align-items-center mx-1"
            @click="triggerFileInput(index)"
          >
            <input
              type="file"
              style="display: none"
              multiple
              @change="handleFileUpload($event, req.id, req.name)"
              ref="fileInput"
            />
            <i class="bi bi-cloud-arrow-up text-white"></i>
          </div>

          <!-- Other Icons (Conditionally Displayed) -->
          <template v-if="req.attachments && req.attachments.length > 0">
            <div
              class="action-btns secondary-bg w-100 d-flex justify-content-center align-items-center mx-1"
              @click="viewAttachments(req.attachments)"
            >
              <i class="bi bi-eye text-white"></i>
            </div>
            <div
              class="action-btns primary-bg w-100 d-flex justify-content-center align-items-center mx-1"
              @click="downloadAttachments(req.attachments)"
            >
              <i class="bi bi-download text-white"></i>
            </div>
            <div
              class="action-btns red-bg w-100 d-flex justify-content-center align-items-center mx-1"
              @click="removeAttachments(req.id)"
            >
              <i class="bi bi-x-lg text-white"></i>
            </div>
          </template>
        </li>
      </ul>

      <!-- Show message if no requirements -->
      <p v-if="requirements.length === 0" class="text-center mt-3">
        No requirements to display.
      </p>
      <!-- <p>{{ this.requirements }}</p> -->
    </div>
  </div>
</template>

<script setup></script>

<script>
export default {
  data() {
    return {
      tableHeader: ["No", "Name", "Attachment", "Action"],
    };
  },
  props: {
    requirements: {
      type: Array,
      required: true,
    },
  },
  methods: {
    triggerFileInput(index) {
      const input = this.$refs.fileInput[index];
      input.click();
    },
    handleFileUpload(event, requirementId) {
      const files = event.target.files;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const extension = file.name.split(".").pop().toLowerCase();
        let attachmentType = "";

        // Determine attachment type based on file extension
        if (["jpg", "jpeg", "png"].includes(extension)) {
          attachmentType = "image";
        } else if (["pdf"].includes(extension)) {
          attachmentType = "PDF";
        } else if (["xlsx", "xlsm", "xlsb"].includes(extension)) {
          attachmentType = "excel";
        } else if (["doc", "docx"].includes(extension)) {
          attachmentType = "docx";
        } else {
          attachmentType = "other";
        }

        const newAttachment = {
          attachmentType: attachmentType,
          attachmentName: file.name,
        };

        // Find the specific requirement by its ID
        const requirement = this.requirements.find(
          (req) => req.id === requirementId
        );
        if (requirement) {
          if (!requirement.attachments) {
            requirement.attachments = []; // Create attachments array if it doesn't exist
          }
          requirement.attachments.push(newAttachment);
        }
      }

      console.log("Uploaded files:", files);
      console.log("Requirements with attachments:", this.requirements);
      // Do something with the requirement object, such as sending it to a server, etc.
    },
    removeAttachments(requirementId) {
      // Find the specific requirement by its ID
      const requirement = this.requirements.find(
        (req) => req.id === requirementId
      );

      if (requirement && requirement.attachments) {
        // Remove all attachments for this requirement
        requirement.attachments = [];
        console.log("Attachments removed from requirement:", requirementId);
        console.log("Updated requirements:", this.requirements);
      } else {
        console.error("Unable to remove attachments.");
      }
    },
    iconClass(attachmentType) {
      // Return the appropriate icon class based on attachmentType
      switch (attachmentType) {
        case "image":
          return "bi bi-image me-2";
        case "PDF":
          return "bi bi-filetype-pdf me-2";
        case "excel":
          return "bi bi-filetype-xls me-2";
        case "docx":
          return "bi bi-filetype-docx me-2";
        default:
          return ""; // Handle other types or return a default icon
      }
    },
  },
};
</script>

<style scoped>
.action-btns {
  height: 36px;
  max-width: 36px;
  max-height: 36px;
}
</style>
