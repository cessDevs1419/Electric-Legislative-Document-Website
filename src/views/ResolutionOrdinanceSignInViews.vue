<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import { RouterLink } from 'vue-router';
    import PublicUserApiService from '@/services/PublicUserApiService';
    import ValidationService from '@/services/ValidationService';
    import {toast} from '@/toast'
    import router from '@/router';


</script>
<script>
    export default {
        data() {
            return{
                showInput: false,
                showValidation: {},
                border: {},
                token: '',
                email: '',
                signinData: {
                    email: '',
                    password: '',
                },
                forgotData: {
                    email: '',
                },
            }
        },
        methods: {
            toggleInput() {
                this.showInput =! this.showInput;
            },
            async signinSubmit() {
                try {
                    this.showValidation = {};
                    this.border = {};

                    Object.keys(this.signinData).forEach(key => {
                        if (this.signinData[key].trim() === '') {
                            this.showValidation[key] = true;
                            this.border[key] = true;
                            toast(key+' is required', 'warning');
                        } else if (key === 'email' && !ValidationService.emailValidator(this.signinData[key])) {
                            this.showValidation[key] = true; 
                            this.border[key] = true; 
                        }
                    });

                    if (Object.keys(this.showValidation).length > 0) {
                        return;
                    }

                    await PublicUserApiService.login(this.signinData).then(items => {
                        if(items.type === 'error'){
                            toast(items.text, items.type);
                        }else{   
                            if(items.data.token){
                                for (let key in this.signinData) {
                                    this.signinData[key] = '';
                                }
                                router.push('/legislative/resolution/ordinance-esubmission');
                            }else{
                                return
                            }  
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    });

                } catch (error) {
                    console.error('Sign-in failed:', error);
                }
            },
            async getResetLink(){
                
                try {
                    await PublicUserApiService.forgotPassword(this.signinData).then(items => {
                        toast(items.text, items.type);
                    })
                    .catch(error => {
                        const errorMessages = error.response.data.errors;

                        const hasValidationErrors = ValidationService.validateFormWithApiErrors(this.signinData, error.response.data);

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
                    console.error('Sign-in failed:', error);
                }
            }
        }
    }
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer class="d-flex align-item-center jutify-content-center mb-5 mt-xl-0">
        <div class="signin-container w-100 box-shadow m-auto">
            <div class="row w-100 h-100 m-auto ">
                <div class="col-lg-7 p-2 dirty-white-bg">
                    <div class="title m-auto text-center mb-5 mt-5">
                        <h1 class="fw-bolder m-0">Sign In</h1>
                    </div>
                    <form class="px-2 px-md-5  " @submit.prevent="signinSubmit">
                        <div class="mb-4">
                            <label class="form-label">Email address</label> 
                            <span class="text-danger" v-if="showValidation.email"> *</span>
                            <input type="email" :class="{ 'border-danger': border.email }" class="form-control p-3 bg-transparent" v-model="signinData.email" placeholder="">
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Password</label>
                            <span class="text-danger" v-if="showValidation.password"> *</span>
                            <div class="input-group mb-3">
                                <input :type="showInput ? 'text' : 'password'" :class="{ 'border-danger': border.password }" class="form-control p-3 bg-transparent border border-end-0" v-model="signinData.password" placeholder="">
                                <button type="button" :class="{ 'border-danger': border.password }" class="input-group-text bg-transparent border border-start-0" @click="toggleInput" >
                                    <i class="bi bi-eye px-3 tertiary-font fs-4" v-if="!showInput"></i>
                                    <i class="bi bi-eye-slash px-3 tertiary-font fs-4" v-else></i>
                                </button>
                            </div>
                        </div>

                        <div class="footer w-100 text-center mt-5 mb-5">
                            <button class="btn text-white w-100 py-3 px-4 primary-bg rounded-0" type="submit">SIGN IN</button>
                            <p class="mt-3 mb-2 secondary-font cursor-pointer" @click="getResetLink">Forgot your password?</p>
                            <p class="m-0">Don't have an account? <router-link to="/sign-up" class="secondary-font text-decoration-none" href="">Sign Up</router-link> here.</p>
                        </div>
                    </form>
                </div>
                <div class="col-lg-5 position-relative linear-primary-bg py-5 text-white">
                    <div class="blob w-100 h-100 position-absolute top-0 start-0">
                    </div>
                </div>
            </div>
        </div>
    </TemplateContainer>

</template>

<style scoped>
    .spacer {
        padding-top: 15rem;
    }
    .blob{
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
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
</style>