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
        checkIfNotNull(attachments) {
            console.log(attachments);
                return attachments && attachments.length > 0; 
            },
        getDate(dateTime) {
                const date = new Date(dateTime);
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                return date.toLocaleDateString('en-US', options);
            },
        getTime(time) {
                const date = new Date(time);

                const options = { hour: 'numeric', minute: 'numeric', hour12: true };
                return date.toLocaleTimeString('en-US', options);
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
    <div class="table-container w-100 box-shadow overflow-auto px-4" >
        <div class="table-header p-4">
            <div class="row">
                <div class="col-lg-6">
                    <h4 class="d-flex align-items-center fw-bold"><span class="vertical-line"></span>Your E Submission</h4>
                </div>
                <div class="col-lg-6 d-flex justify-content-start justify-content-lg-end">
                    <div class="btn-bg primary-bg px-3 d-flex align-items-center">
                        <router-link to="/legislative/resolution/new-submission" class="h-0 text-white text-decoration-none rounded-0 p-0 m-0 ">Submit New</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-body w-100 p-4 pt-0">
            <ul class="w-100 border list-unstyled d-flex ">
                <li class="primary-bg text-white fw-semibold py-3 m-auto w-100 text-center" v-for="(item, index) in header" :key="index">
                    {{ item }}
                </li>
            </ul>
            <div class="accordion mt-0" id="accordionExample" v-if="data['logs'] && data['logs'].length !== 0">
                <div v-for="(items, index) in data['logs']" :key="index" class=" accordion-item rounded-0 border-top-0 border-end-0 border-start-0" >
                    <button class="btn border border-0 w-100" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+index" aria-expanded="false" aria-controls="collapseOne">
                        <ul class="w-100 list-unstyled d-flex ">
                            <li class="py-2 m-auto w-100 grey-font fw-semibold" >
                                {{ index }}
                            </li>
                            <li class="py-2 m-auto w-100" v-for="(row, index) in rows" :key="index">
                                <template v-if="header[3].toLowerCase() === row">
                                    {{ getDate(items[row]) }}
                                </template>
                                <template v-else-if="header[4].toLowerCase()  === row">
                                    {{ getTime(items['date'])  }}
                                </template>
                                <template v-else>
                                    {{ items[row] }}
                                </template>
                            </li>
                        </ul>
                    </button>
                    
                    <div :id="'collapse'+index" class="accordion-collapse mt-0 border-white collapse  " data-bs-parent="#accordionExample">
                        <div class="accordion-body border-white">
                            <!-- <ul class="w-100 border list-unstyled d-flex ">
                                <li class="primary-bg text-white fw-semibold py-3 m-auto w-100 text-center" v-for="(item, index) in detailsheader" :key="index">
                                    {{ item }}
                                </li>
                            </ul> -->
                            <template id="collapse" v-if="items" >
                                <template v-for="(item, ind) in  items['field_names']" :key="ind" >
                                    <ul  class="accordion-collapse d-flex list-unstyled collapse show border-white" data-bs-parent="#accordionExample" > 
                                        <li class="py-0 m-auto w-100 grey-font fw-semibold" >
                                            <div class="d-flex flex-column me-3 align-items-center justify-content-center">
                                                <div class="border-dashed"></div>
                                                <div class="eclipse p-2 rounded-circle"></div>
                                            </div>
                                        </li>
                                        <li class=" py-0 text-center m-auto w-100" v-for="(row, i) in  detailsrows" :key="i" >
                                            <template v-if="row === 'old_value'">
                                                <StatusTemplateComponent
                                                    :theme="item[row]"
                                                    :status_bg_color="item['old_value_color']"
                                                    :status_font_color="item['old_value_text_color']"
                                                >
                                                    <template #status >
                                                        {{ item[row] }}
                                                    </template>
                                                </StatusTemplateComponent>
                                            </template>
                                            <template v-else-if="row === 'new_value'">
                                                <StatusTemplateComponent
                                                    :theme="item[row]"
                                                    :status_bg_color="item['new_value_color']"
                                                    :status_font_color="item['new_value_text_color']"
                                                >
                                                    <template #status >
                                                        {{ item[row] }}
                                                    </template>
                                                </StatusTemplateComponent>
                                            </template>
                                            <template v-else-if="row === 'remarks'">
                                                {{ item[row] || 'N/A' }}
                                            </template>
                                            <p class="mt-2 mb-0" v-else>
                                                {{ item[row] }}
                                            </p>
                                        </li>                        
                                    </ul>
                                </template>
                            </template> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-100 h-100 text-center grey-font" v-else>
                <h1>No Current Logs</h1>
            </div>
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