<script>
    import SectionHeaderComponent from './SectionHeaderComponent.vue';
    import StatusTemplateComponent from './StatusTemplateComponent.vue';

    export default{
    data() {
        return {
            searchQuery: '',
            typeQuery: '',
            categoryQuery: '',
            bayanQuery: '',
        };
    },
    props: {
        header: {
            type: Array,
            required: true
        },
        data: {
            type: Array,
            required: true
        },
        rows: {
            type: Array,
            required: true
        },
        searchbar: Boolean,
        standalone: Boolean
    },
    methods: {
        getData(data) {
            this.$emit('row-click-data', data);
        },
    },
    computed: {
        filteredData() {
            return this.data.filter(item => {
                return Object.values(item).some(value => String(value).toLowerCase().includes(this.searchQuery.toLowerCase() || this.typeQuery.toLowerCase() || this.categoryQuery.toLowerCase() || this.bayanQuery.toLowerCase()));
            });
        }
    },
    components: { StatusTemplateComponent, StatusTemplateComponent, SectionHeaderComponent }
}
</script>

<template>
    <div class="table-container box-shadow overflow-auto px-4" >
        <div class="table-header p-4">
            <div class="row">
                <div class="col-lg-6">
                    <h4 class="d-flex align-items-center fw-bold"><span class="vertical-line"></span>Your E Submission</h4>
                </div>
                <div class="col-lg-6 d-flex justify-content-start justify-content-lg-end">
                    <div class="btn-bg primary-bg px-3 d-flex align-items-center">
                        <router-link to="/legislative/new-submission" class="h-0 text-white text-decoration-none rounded-0 p-0 m-0 " @click="routeToNewForm()">Submit New</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-body p-4 pt-0">
            <table class="table w-100">
                <thead>
                    <tr >
                        <th v-for="(item, index) in header" :key="index" scope="col">{{ item }}</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(items, index) in data" :key="index" >
                        <tr class="cursor-pointer" :class="{'border-bottom-white' : items['breakdown']}"  data-bs-toggle="modal" data-bs-target="#tableModal"   @click="getData(items)"> 
                            <td v-for="(rows, index) in rows" :key="index">
                                <template v-if="rows === 'status'">
                                    <StatusTemplateComponent
                                        :theme="items[rows]"
                                    >
                                        <template #status >
                                            {{ items[rows] }}
                                        </template>
                                    </StatusTemplateComponent>
                                </template>
                                <template v-else-if="rows === 'documents'">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <div class="pdf me-2">
                                            <i v-if="items.attachments === 'pdf'" class="bi bi-filetype-pdf fs-3"></i>
                                            <i v-if="items.attachments === 'docs'" class="bi bi-file-earmark-word-fill fs-3"></i>
                                        </div>
                                        <div class="description ">
                                            <h6 class="m-0">{{ items.title }}</h6>
                                            <p class="m-0">{{ items.bayan_name }}</p>
                                        </div>
                                    </div>
                                </template>
                                <template v-else>
                                    {{ items[rows] }}
                                </template>
                            </td>
                        </tr>
                        <template v-if="items['breakdown']" >
                            <tr class="cursor-pointer" :class="{'border-white border' : items['breakdown']}" v-for="(item, index) in  items['breakdown']" :key="index" > 
                                <td class="p-1" >
                                    
                                </td>
                                <td class="p-1 px-2" >
                                    <div class="px-3">
                                        <StatusTemplateComponent
                                            :theme="item['status']"
                                        >
                                            <template #status >
                                                {{ item['status'] }}
                                            </template>
                                        </StatusTemplateComponent>
                                    </div>
                                </td>
                                <td class="p-1" >
                                    <!-- {{ item.description }} -->
                                </td>
                                <td class="p-1" >
                                    {{ item.division}}
                                </td>
                                <td class="p-1" >
                                    {{ item.date }}
                                </td>
                                <td class="p-1" >
                                    {{ item.time }}
                                </td>
                            </tr>
                        </template>
                    </template>

                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
    .tracking-no{
        max-width: 300px;
    }
    .primary-bg{
        background: var(--primary-color) !important;
    }
    .table{
        min-width: 1200px;
        width: 100%;
    }

    th{
        padding: 1.5rem;
        background-color: var(--primary-color);
        color: #ffffff;
        font-weight: 600;
        text-align: center;
    }
    td{
        text-align: center;
        padding: 1.5rem;
    }

    .form-contol-sm{
        height: 3rem;
    }

    .border-bottom-white{
        border-bottom: #ffffff;
    }
</style>