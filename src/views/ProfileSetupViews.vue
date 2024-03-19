<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import MunicipalitiesApiService from '@/services/MunicipalitiesApiService';
    import OfficeApiService from '@/services/OfficeApiService';
    import PublicUserApiService from '@/services/PublicUserApiService';
    import ValidationService from '@/services/ValidationService';
    import {toast} from '@/toast'
</script>
<script>
    export default {
        data() {
            return{
                showInput: false,

                updateData: {
                    full_name: '',
                    email: '',
                    municipality_id: '',
                    contact_number: '',
                    office_id: '',
                    secretary_name: '',
                    images: [],
                },
                image: '',
                showValidation: {},
                border: {},
                office: [],
                municipality: [],
                officeQuery: '',
                municipalityQuery: ''
            }
        },
        methods: {
            toggleInput() {
                this.showInput =! this.showInput;
            },
            async updateSubmit() {
                try {
                    this.showValidation = {};
                    this.border = {};
                    
                    await PublicUserApiService.updateProfile(this.updateData).then(items => {
                        if(items.type === 'error'){
                            toast(items.text, items.type);
                        }else{
                            toast(items.text, items.type);
                        }

                    })
                    .catch(error => {
                        const errorMessages = error.response.data.errors;

                        const hasValidationErrors = ValidationService.validateFormWithApiErrors(this.updateData, error.response.data);

                        if (hasValidationErrors) {
                            toast(error.response.data.message, 'warning', 3500);
                            for (const field in errorMessages) {
                                if (errorMessages.hasOwnProperty(field)) {                             
                                    this.showValidation[field] = true;
                                    this.border[field] = true;
                                }
                            }
                        }
                    });
                    
                } catch (error) {
                    console.error('Sign-up failed:', error);
                }
            },
            fetchData(){
                MunicipalitiesApiService.fetch().then(item => {
                    this.municipality = []
                    this.municipality.push(...item);
                })
                .catch(error => {
                    console.error('', error);
                });

                OfficeApiService.fetch().then(item => {
                    this.office = []
                    this.office.push(...item);
                })
                .catch(error => {
                    console.error('', error);
                });
                PublicUserApiService.getAuthUser().then(user => {

                    this.updateData.full_name = user.full_name
                    this.updateData.email = user.email
                    this.updateData.municipality_id = user.municipality_id
                    this.municipalityQuery =  user.municipality_name
                    this.updateData.contact_number = user.contact_number
                    this.updateData.office_id = user.office_id
                    this.officeQuery = user.office_name
                    this.updateData.secretary_name = user.secretary_name
                    this.image = user.image

                }).catch(error => {
                    console.error('', error);
                });
            }, 
            getMunicipality(id, name){
                this.updateData.municipality_id = id
                this.municipalityQuery = name
            },
            getOffice(id, name){
                this.updateData.office_id = id
                this.officeQuery = name
            },
            toggleMunicipalityQuery() {
                this.municipalityQuery = this.municipalityQuery ? '' : this.municipalityQuery;
            },
            toggleOfficeQuery() {
                this.officeQuery = this.officeQuery ? '' : this.officeQuery;
            },
            back(){
                window.history.back()
            },
            openFileInput(){
                document.getElementById("inputField").click()
            },
            getFile(event) {
                this.updateData.images.push(event.target.files)
            },
        },
        computed: {
            backgroundStyle() {
                if (this.updateData.images.length > 0) {
                    const file = this.updateData.images[0];

                    return 'url(' + image + ')';
                } else {
                    return 'url(' + this.image + ')';
                }
            }
        },
        created() {
            this.fetchData(); 
        }
    }
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer class="d-flex align-item-center jutify-content-center mb-5 pb-5">
        <div class="signin-container w-100 box-shadow my-5 m-auto">
            <div class="row w-100 h-100 m-auto ">
                <div class="col-lg-5 p-2 linear-primary-bg text-white position-relative overflow-hidden">
                    <div class="blob w-100 h-100 position-absolute top-0 start-0">
                    </div>
                </div>
                <div class="col-lg-7 dirty-white-bg py-5 ">
                    <form class="px-2 px-md-5  " @submit.prevent="updateSubmit">
                        <div class="row mb-2">
                            <div class="col-lg-6 d-flex align-items-center">
                                <h3 class="m-0 fw-bold primary-font">Edit Profile</h3>
                            </div>
                            <div class="col-lg-6 d-flex justify-content-end position-relative">
                                <div class="img-container  border rounded-circle overflow-hidden" :style="{ backgroundImage: backgroundStyle }" >
                                    <button @click="openFileInput" type="button" class="avatar border-0 me-2 position-absolute rounded-circle bottom-0 end-0 primary-bg ">
                                        <input hidden type="file" @change="getFile" id="inputField">
                                        <i class="bi bi-pencil text-white fs-6"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Full name</label>
                            <span class="text-danger" v-if="showValidation.full_name"> *</span>
                            <input type="text" :class="{ 'border-danger': border.full_name }" class="form-control p-3 bg-transparent" v-model="updateData.full_name" placeholder="">
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-4">
                                    <label class="form-label">Email address</label> 
                                    <span class="text-danger" v-if="showValidation.email"> *</span>
                                    <input type="email" :class="{ 'border-danger': border.email }" class="form-control p-3 bg-transparent" v-model="updateData.email" placeholder="">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-4">
                                    <label class="form-label">City/Municipality</label>
                                    <span class="text-danger" v-if="showValidation.municipality_id"> *</span>
                                    <div class="dropdown rounded-0 w-100">
                                        <button @click="toggleMunicipalityQuery" data-bs-toggle="dropdown" aria-expanded="false" :class="{ 'border-danger': border.municipality_id }"  class="w-100 dropdown-btn btn text-dark border d-flex align-items-center justify-content-between p-3 rounded-2 " type="button" >
                                            <p class="text-nowrap text-truncate m-0">{{ municipalityQuery ? municipalityQuery : 'Select Municipality' }}</p> <i v-if="municipalityQuery" class="bi bi-x"></i> <i v-if="!municipalityQuery" class="bi bi-caret-down"></i>
                                        </button>
                                        <ul class="dropdown-menu w-100">
                                            <li class="px-3 cursor-pointer mb-2" v-for="(items, index) in municipality" :key="index"  @click="getMunicipality(items.id, items.name)">
                                                {{ items.name }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-4">
                                    <label class="form-label">Contact Number</label> 
                                    <span class="text-danger" v-if="showValidation.contact_number"> *</span>
                                    <input type="text" :class="{ 'border-danger': border.contact_number }" class="form-control p-3 bg-transparent" v-model="updateData.contact_number" placeholder="">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-4">
                                    <label class="form-label">Office</label>
                                    <span class="text-danger" v-if="showValidation.office_id"> *</span>
                                    <div class="dropdown rounded-0 w-100">
                                        <button @click="toggleOfficeQuery" data-bs-toggle="dropdown" aria-expanded="false" :class="{ 'border-danger': border.office_id }"  class="w-100 dropdown-btn btn text-dark border d-flex align-items-center justify-content-between p-3 rounded-2 " type="button" >
                                            <p class="text-nowrap text-truncate m-0">{{ officeQuery ? officeQuery : 'Select Municipality' }}</p> <i v-if="officeQuery" class="bi bi-x"></i> <i v-if="!officeQuery" class="bi bi-caret-down"></i>
                                        </button>
                                        <ul class="dropdown-menu w-100">
                                            <li class="px-3 cursor-pointer mb-2" v-for="(items, index) in office" :key="index"  @click="getOffice(items.id, items.name)">
                                                {{ items.name }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Name of Secretary</label>
                            <span class="text-danger" v-if="showValidation.secretary_name"> *</span>
                            <input type="text" :class="{ 'border-danger': border.secretary_name }" class="form-control p-3 bg-transparent" v-model="updateData.secretary_name" placeholder="">
                        </div>

                        <div class="footer w-100 text-center d-flex justify-content-end mt-5">
                            <button class="btn text-dark py-3 px-4 bg-transparent border primary-divider me-2 rounded-0" type="button" @click="back">CANCEL</button>
                            <button class="btn text-white py-3 px-4 primary-bg rounded-0" type="submit">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </TemplateContainer>

</template>

<style scoped>
    .spacer {
        padding-top: 15rem;
    }
    .avatar{
        min-width: 2.5rem;
        max-width: 2.5rem;
        height: 2.5rem;
    }
    .img-container{
        max-width: 120px;
        min-width: 120px;
        height: 120px;

        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .dirty-white-bg{
        background: #F2F3F9;
    }

    .primary-bg{
        background: var(--primary-color) !important;
    }
    .signin-container{
        min-height: 35rem;
        max-width: 100%;
    }
    .primary-divider{
        border-color: var(--primary-color) !important;
    }
    .blob{
        background-image: url(../assets/images/blob.png);
    }
    @media screen and (max-width: 992px ){
        .footer{
            position: relative !important;
        }
    }
</style>