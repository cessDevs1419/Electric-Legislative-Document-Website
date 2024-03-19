<template>
  <div class="table-container w-100 overflow-auto pt-4">
    <div class="table-body border w-100 pt-0">
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
              v-for="(attachment, index) in req.files"
              :key="index"
              :class="iconClass(attachment.fileType)"
              style="font-size: 24px"
            ></i>
          </div>
        </div>

        <!-- Action column with upload button -->
        <li class="py-3 m-auto w-25 text-center d-flex justify-content-center">
          <!-- Upload Icon (Always Visible) -->
          <div
            class="action-btns cursor-pointer primary-bg w-100 d-flex justify-content-center align-items-center mx-1"
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
          <template v-if="req.files && req.files.length > 0">
            <div
              type="button"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
              class="action-btns cursor-pointer secondary-bg w-100 d-flex justify-content-center align-items-center mx-1"
              @click="viewAttachments(req.attachments)"
            >
              <i class="bi bi-eye text-white"></i>
            </div>
            <div
              class="action-btns cursor-pointer primary-bg w-100 d-flex justify-content-center align-items-center mx-1"
              @click="downloadAttachments(req.files)"
            >
              <i class="bi bi-download text-white"></i>
            </div>
            <div
              class="action-btns cursor-pointer red-bg w-100 d-flex justify-content-center align-items-center mx-1"
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
      <p>{{ this.requirements }}</p>
      <p id="fileList"></p>

      <!-- Modal for viewing the attachments -->
      <div
        class="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Attachments
              </h5>
              <button
                type="button"
                class="close btn-close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              class="modalItems d-flex display-row justify-content-center align-items-center pt-5"
            >
              <div id="imageContainer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<script>
import JSZip from "jszip";
import FileSaver from "file-saver";

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
      let uploadedFiles = []; // Array to hold uploaded files

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const extension = file.name.split(".").pop().toLowerCase();
        let fileType = "";

        // Determine file type based on file extension
        if (["jpg", "jpeg", "png"].includes(extension)) {
          fileType = "image";
        } else if (["pdf"].includes(extension)) {
          fileType = "PDF";
        } else if (["xlsx", "xlsm", "xlsb"].includes(extension)) {
          fileType = "excel";
        } else if (["doc", "docx"].includes(extension)) {
          fileType = "docx";
        } else {
          fileType = "other";
        }

        // Create file object
        const uploadedFile = {
          fileType: fileType,
          fileName: file.name, // Add fileName property
          file: file, // Add the file itself
        };

        uploadedFiles.push(uploadedFile); // Add file to the uploaded files array
      }

      // Update the requirements with the uploaded files
      const requirement = this.requirements.find(
        (req) => req.id === requirementId
      );
      if (requirement) {
        if (!requirement.files) {
          requirement.files = [];
        }
        requirement.files.push(...uploadedFiles);
      }

      console.log("Uploaded files:", uploadedFiles);
      console.log("Requirements with files:", this.requirements);

      this.displayImages(uploadedFiles);
    },
    displayImages(uploadedFiles) {
      console.log("Uploaded Files:", uploadedFiles); // Check if files are correct
      const imageContainer = document.getElementById("imageContainer");
      if (imageContainer) {
        // Clear previous images
        imageContainer.innerHTML = "";

        uploadedFiles.forEach((file) => {
          if (file.fileType === "image") {
            const div = document.createElement("div");
            div.classList.add("uploaded-image");
            div.style.width = "400px"; // Set a fixed width for the container
            div.style.height = "0";
            div.style.paddingBottom = "100%"; // 1:1 aspect ratio (adjust as needed)
            div.style.backgroundSize = "contain";
            div.style.backgroundRepeat = "no-repeat";
            div.style.backgroundPosition = "center";
            div.style.marginBottom = "1rem";
            div.style.backgroundImage = `url(${URL.createObjectURL(
              file.file
            )})`;
            imageContainer.appendChild(div);
          }
        });
      }
    },

    viewAttachments() {},

    downloadAttachments(files) {
      const zip = new JSZip();

      // Add each file to the zip
      files.forEach((file) => {
        const fileName = file.fileName;
        const fileBlob = file.file;
        zip.file(fileName, fileBlob);
      });

      // Generate the zip file
      zip.generateAsync({ type: "blob" }).then(function (content) {
        // Create a temporary link element
        const link = document.createElement("a");

        // Get current date and time
        const currentDate = new Date();
        const formattedDate = currentDate
          .toISOString()
          .replace(/[-T:.]/g, "")
          .slice(0, -5);

        link.href = URL.createObjectURL(content);
        link.download =
          "files" + formattedDate + currentDate.getMilliseconds() + ".zip";

        // Append the link to the body
        document.body.appendChild(link);

        // Trigger the download
        link.click();

        // Clean up
        setTimeout(() => {
          URL.revokeObjectURL(link.href);
          document.body.removeChild(link);
        }, 200);
      });
    },
    removeAttachments(requirementId) {
      // Find the specific requirement by its ID
      const requirement = this.requirements.find(
        (req) => req.id === requirementId
      );

      if (requirement && requirement.files) {
        // Remove all attachments for this requirement
        requirement.files = [];
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

.cursor-pointer {
  cursor: pointer;
}
</style>
