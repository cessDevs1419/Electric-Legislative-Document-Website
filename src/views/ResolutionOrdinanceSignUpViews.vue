<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
import BayanApiService from '@/services/BayanApiService';
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
                signupData: {
                    full_name: '',
                    email: '',
                    bayan_id: '',
                    municipality_id: '',
                    contact_number: '',
                    office_id: '',
                    secretary_name: '',
                },
                showValidation: {},
                border: {},
                office: [],
                bayan: [],
                municipality: [],
                bayanQuery: '',
                officeQuery: '',
                municipalityQuery: ''
            }
        },
        methods: {
            toggleInput() {
                this.showInput =! this.showInput;
            },
            async signupSubmit() {
                try {
                    this.showValidation = {};
                    this.border = {};
                    
                    await PublicUserApiService.register(this.signupData).then(items => {
                        if(items.type === 'error'){
                            toast(items.text, items.type);
                        }else{
                            for (let key in this.signupData) {
                                this.signupData[key] = '';
                            }
                            this.municipalityQuery = ''
                            this.officeQuery = ''
                            this.bayanQuery = ''
                            toast(items.text, items.type);
                        }

                    })
                    .catch(error => {
                        const errorMessages = error.response.data.errors;

                        const hasValidationErrors = ValidationService.validateFormWithApiErrors(this.signupData, error.response.data);

                        if (hasValidationErrors) {
                            toast(error.response.data.message, 'warning', 3500);
                            for (const field in errorMessages) {
                                if (errorMessages.hasOwnProperty(field)) {
                                    // const errorMessage = errorMessages[field][0];                                 
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

                BayanApiService.fetch().then(item => {
                    this.bayan = []
                    this.bayan.push(...item);
                })
                .catch(error => {
                    console.error('', error);
                });
            }, 
            getMunicipality(id, name){
                this.signupData.municipality_id = id
                this.municipalityQuery = name
            },
            getOffice(id, name){
                this.signupData.office_id = id
                this.officeQuery = name
            },
            getBayan(id, name){
                this.signupData.bayan_id = id
                this.bayanQuery = name
            },
            toggleMunicipalityQuery() {
                this.municipalityQuery = this.municipalityQuery ? '' : this.municipalityQuery;
            },
            toggleOfficeQuery() {
                this.officeQuery = this.officeQuery ? '' : this.officeQuery;
            },
            toggleBayanQuery() {
                this.bayanQuery = this.bayanQuery ? '' : this.bayanQuery;
            },
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
                    <div class="title m-auto text-center mb-4 mt-5 ">
                        <h1 class="fw-bolder m-0">Sign Up Now</h1>
                        <p >We are just one call away</p>
                    </div>
                    <div class="details px-2 px-md-5  ">
                        <p>Lorem ipsum dolor sit amet consectetur. Scelerisque fringilla adipiscing risus nascetur leo pulvinar nunc. Sed pellentesque non varius ut aliquam ut. Elementum facilisis sit tortor iaculis.</p>
                        
                        <p><i class="bi bi-envelope me-1"></i> dummyEmail@hotmail.com</p>
                        <p><i class="bi bi-facebook me-1"></i> facebook.com/LguGensan</p>

                    </div>
                    <div class="footer z-1 w-100 px-2 px-md-5  position-absolute bottom-0 pb-5">
                        <p class="m-0">Already have an account? <router-link to="/login" class="secondary-font text-decoration-none">Sign In</router-link> here.</p>
                    </div>

                    <div class="blob w-100 h-100 position-absolute top-0 start-0">

                    </div>

                    
                </div>
                <div class="col-lg-7 dirty-white-bg py-5 ">
                    <form class="px-2 px-md-5  " @submit.prevent="signupSubmit">
                        <div class="mb-4">
                            <label class="form-label">Full name</label>
                            <span class="text-danger" v-if="showValidation.full_name"> *</span>
                            <input type="text" :class="{ 'border-danger': border.full_name }" class="form-control p-3 bg-transparent" v-model="signupData.full_name" placeholder="">
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-4">
                                    <label class="form-label">Email address</label> 
                                    <span class="text-danger" v-if="showValidation.email"> *</span>
                                    <input type="email" :class="{ 'border-danger': border.email }" class="form-control p-3 bg-transparent" v-model="signupData.email" placeholder="">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-4">
                                    <label class="form-label">Contact Number</label> 
                                    <span class="text-danger" v-if="showValidation.contact_number"> *</span>
                                    <input type="text" :class="{ 'border-danger': border.contact_number }" class="form-control p-3 bg-transparent" v-model="signupData.contact_number" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Name of Secretary</label>
                            <span class="text-danger" v-if="showValidation.secretary_name"> *</span>
                            <input type="text" :class="{ 'border-danger': border.secretary_name }" class="form-control p-3 bg-transparent" v-model="signupData.secretary_name" placeholder="">
                        </div>
                        <div class="row">
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
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-4">
                                    <label class="form-label">Bayan</label>
                                    <span class="text-danger" v-if="showValidation.bayan_id"> *</span>
                                    <div class="dropdown rounded-0 w-100">
                                        <button @click="toggleBayanQuery" data-bs-toggle="dropdown" aria-expanded="false" :class="{ 'border-danger': border.bayan_id}"  class="w-100 dropdown-btn btn text-dark border d-flex align-items-center justify-content-between p-3 rounded-2 " type="button" >
                                            <p class="text-nowrap text-truncate m-0">{{ bayanQuery ? bayanQuery : 'Select Bayan' }}</p> <i v-if="bayanQuery" class="bi bi-x"></i> <i v-if="!bayanQuery" class="bi bi-caret-down"></i>
                                        </button>
                                        <ul class="dropdown-menu w-100">
                                            <li class="px-3 cursor-pointer mb-2" v-for="(items, index) in bayan" :key="index"  @click="getBayan(items.id, items.name)">
                                                {{ items.name }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="footer w-100 text-center d-flex justify-content-end mt-5">
                            <button class="btn text-white py-3 px-4 primary-bg rounded-0" type="submit">SIGN UP</button>
                            
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

    .blob{
        background-image: url(../assets/images/blob.png);
    }
    @media screen and (max-width: 992px ){
        .footer{
            position: relative !important;
        }
    }
</style>