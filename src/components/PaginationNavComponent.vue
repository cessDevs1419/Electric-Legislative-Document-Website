<template>
    <div class="pagination">
      <!-- <button @click="gotoPage(1)" :disabled="currentPage === 1">First</button>
      <button @click="prevPage" :disabled="currentPage === 1">Prev</button> -->
      <span v-if="currentPage > 3">
        <button class="btn rounded-0 mx-1 px-2" @click="gotoPage(1)">1</button>
        <button class="btn btn rounded-0 mx-1 px-2" >...</button>
      </span>
      <template v-for="pageNumber in visiblePages" :key="pageNumber">
        <button class="btn btn rounded-0 mx-1 px-2" @click="gotoPage(pageNumber)" :class="{ active: currentPage === pageNumber }">{{ pageNumber }}</button>
      </template>
      <span v-if="lastPage - currentPage > 2">
        <button class="btn btn rounded-0 mx-1 px-2" >...</button>
        <button class="btn btn rounded-0 mx-1 px-2" @click="gotoPage(lastPage)">{{ lastPage }}</button>
      </span>
      <!-- <button @click="nextPage" :disabled="currentPage === lastPage">Next</button>
      <button @click="gotoPage(lastPage)" :disabled="currentPage === lastPage">Last</button> -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      totalItems: {
        type: Number,
        required: true
      },
      itemsPerPage: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      }
    },
    computed: {
      lastPage() {
        return Math.ceil(this.totalItems / this.itemsPerPage);
      },
      visiblePages() {
        const totalPages = this.lastPage;
        let start = Math.max(1, this.currentPage - 2);
        let end = Math.min(totalPages, start + 4);
  
        if (end - start < 4) {
          start = Math.max(1, end - 4);
        }
  
        const pages = [];
        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
  
        return pages;
      }
    },
    methods: {
      gotoPage(page) {
        if (page >= 1 && page <= this.lastPage) {
          this.$emit('page-changed', page);
        }
      },
      prevPage() {
        this.gotoPage(this.currentPage - 1);
      },
      nextPage() {
        this.gotoPage(this.currentPage + 1);
      }
    }
  };
  </script>
  
  <style scoped>
  .pagination {
    margin-top: 20px;
  }
  
  .pagination button {
    border-color: var(--primary-color);
    background: transparent;
    color: var(--primary-color);
  }
  
  .pagination button.active {
    background-color: var(--primary-color);
    color: #fff;
  }
  </style>
  