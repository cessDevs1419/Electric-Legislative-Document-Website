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
              v-for="(attachment, index) in req.files"
              :key="index"
              :class="iconClass(attachment.fileType)"
              style="font-size: 26px; color: var(--primary-color)"
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
            <!-- <div
              type="button"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
              class="action-btns cursor-pointer secondary-bg w-100 d-flex justify-content-center align-items-center mx-1"
              @click="viewAttachments(req.attachments)"
            >
              <i class="bi bi-eye text-white"></i>
            </div> -->
            <div
              class="action-btns cursor-pointer secondary-bg w-100 d-flex justify-content-center align-items-center mx-1"
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
              <div
                v-for="(requirement, index) in requirements"
                :key="index"
                class="pdfContainer"
              >
                <div
                  v-for="(file, fileIndex) in requirement.files"
                  :key="fileIndex"
                  class="pt-5"
                >
                  <h1 class="fw-bold attachmentHeader">
                    Uploaded File -
                    <span class="secondary-bg px-2 ms-1 fw-bold text-white">
                      {{ file.fileName }}
                    </span>
                  </h1>
                  <attachmentReviewerComponentVue
                    class="pdf-reviewer my-4"
                    :src="file.fileUrl"
                  ></attachmentReviewerComponentVue>

                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PDFReviewerComponent from "./PDFReviewerComponent.vue";
import DocumentApiService from "@/services/DocumentApiService";
import AttachmentReviewerComponentVue from "./AttachmentReviewerComponent.vue";
</script>

<script>
import JSZip from "jszip";
import FileSaver from "file-saver";
import { toast } from "@/toast";

export default {
  data() {
    return {
      tableHeader: ["No", "Name", "Attachment", "Action"],
      documentData: [],
    };
  },
  props: {
    requirements: {
      type: Array,
      required: true,
    },
  },
  methods: {
    fetchData() {
      DocumentApiService.fetchMyDocument()
        .then((data) => {
          this.documentData = [];
          this.documentData.push(...data);
        })
        .catch((error) => {
          console.error("Error fetching data :", error);
        });
    },

    triggerFileInput(index) {
      const input = this.$refs.fileInput[index];
      input.click();
    },
    handleFileUpload(event, requirementId) {
      const files = event.target.files;
      const uploadedFiles = [];
      let uploadFailed = false;

      for (const file of files) {
        const extension = file.name.split(".").pop().toLowerCase();
        const fileSizeInBytes = file.size;
        const maxSizeInBytes = 10 * 1024 * 1024; // 10MB in bytes

        if (
          fileSizeInBytes > maxSizeInBytes ||
          ![
            "jpg",
            "jpeg",
            "png",
            "gif",
            "pdf",
            "xlsx",
            "xlsm",
            "xlsb",
            "xls",
            "xlm",
            "xla",
            "xlc",
            "xlt",
            "xlw",
            "doc",
            "docx",
            "docs",
          ].includes(extension)
        ) {
          uploadFailed = true;
          break;
        }

        let fileType;
        let fileUrl;

        if (["jpg", "jpeg", "png", "gif"].includes(extension)) {
          fileType = "image";
        } else if (["pdf"].includes(extension)) {
          fileType = "PDF";
          fileUrl = URL.createObjectURL(file);
        } else if (
          [
            "xlsx",
            "xlsm",
            "xlsb",
            "xls",
            "xlm",
            "xla",
            "xlc",
            "xlt",
            "xlw",
          ].includes(extension)
        ) {
          fileType = "excel";
          fileUrl = URL.createObjectURL(file);
        } else if (["doc", "docx", "docs"].includes(extension)) {
          fileType = "docx";
          fileUrl = URL.createObjectURL(file);
        } else {
          fileType = "other";
        }

        uploadedFiles.push({
          fileType: fileType,
          fileName: file.name,
          file: file,
          fileUrl: fileUrl,
        });
      }

      if (uploadFailed) {
        toast(
          "Some files were not uploaded due to size or type restrictions.",
          "warning"
        );
        return;
      }

      const requirement = this.requirements.find(
        (req) => req.id === requirementId
      );
      if (requirement) {
        requirement.files = (requirement.files || []).concat(uploadedFiles);
      }
      this.displayImages(uploadedFiles);
    },

    displayImages(uploadedFiles) {
      const imageContainer = document.getElementById("imageContainer");
      if (imageContainer) {
        // Clear previous images
        imageContainer.innerHTML = "";

        uploadedFiles.forEach((file) => {
          if (file.fileType === "image") {
            const div = document.createElement("div");
            div.classList.add("uploaded-image");
            div.style.width = "400px";
            div.style.height = "0";
            div.style.paddingBottom = "100%";
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

      files.forEach((file) => {
        const fileName = file.fileName;
        const fileBlob = file.file;
        zip.file(fileName, fileBlob);
      });

      zip.generateAsync({ type: "blob" }).then(function (content) {
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

        document.body.appendChild(link);

        link.click();

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
        requirement.files = [];
        console.log("Attachments removed from requirement:", requirementId);
        console.log("Updated requirements:", this.requirements);
      } else {
        console.error("Unable to remove attachments.");
      }
    },
    iconClass(attachmentType) {
      switch (attachmentType) {
        case "image":
          return "fa-solid fa-image me-2";
        case "PDF":
          return "fa-solid fa-file-pdf me-2";
        case "excel":
          return "fa-solid fa-file-excel me-2";
        case "docx":
          return "fa-solid fa-file-word  me-2";
        default:
          return "";
      }
    },
  },
};
</script>

<style scoped>
.attachmentHeader {
  font-size: 22px;
}

.action-btns {
  height: 36px;
  max-width: 36px;
  max-height: 36px;
}

.cursor-pointer {
  cursor: pointer;
}

.pdfContainer {
  width: 60rem;
}

.pdf-reviewer {
  height: 40rem;
}
</style>
