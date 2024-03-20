
<script>
    import SectionHeaderComponent from './SectionHeaderComponent.vue';
    import StatusTemplateComponent from './StatusTemplateComponent.vue';
    import router from '@/router';
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
        },
        data: {
            type: Array,
        },
        rows: {
            type: Array,
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
        submitNew(){
            router.push('/legislative/resolution/new-submission')
        }
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
    <div class="table-container w-100 box-shadow overflow-auto px-2 py-4 px-md-4" >
        <div class="table-header px-0  px-md-4">
            <div class="row w-100 m-auto">
                <div class="col-lg-6 ">
                    <h4 class="d-flex align-items-center fw-bold"><span class="vertical-line"></span>Your E Submission</h4>
                </div>
                <div class="col-lg-6 d-flex justify-content-start justify-content-lg-end">
                    <button type="button" @click='submitNew' class="position-relative border-0 btn  primary-bg px-3 mx-0 text-white rounded-0">
                        Submit New
                    </button>
                </div>
            </div>
        </div>
        <div class="table-body w-100 px-0 px-md-4 pt-0">
            <slot></slot>
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