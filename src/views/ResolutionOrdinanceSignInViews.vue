<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
import { RouterLink } from 'vue-router';

</script>
<script>
    export default {
        data() {
            return{
                showInput: false,
                signinData: {
                    email: '',
                    password: '',
                }
            }
        },
        methods: {
            toggleInput() {
                this.showInput =! this.showInput;
            },
            signinSubmit() {
                console.log('Form submitted:', this.signinData);
            },
        }
    }
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer class="d-flex align-item-center jutify-content-center mt-5 mb-5 mt-xl-0">
        <div class="signin-container w-100 box-shadow my-5 m-auto">
            <div class="row w-100 h-100 m-auto ">
                <div class="col-lg-7 p-2 dirty-white-bg">
                    <div class="title m-auto text-center mb-5 mt-5">
                        <h1 class="fw-bolder m-0">Sign In</h1>
                    </div>
                    <form class="px-5  " @submit.prevent="signinSubmit">

                        <div class="mb-4">
                            <label class="form-label">Email address</label> <span class="text-danger">*</span>
                            <input type="email" class="form-control p-3 bg-transparent" v-model="signinData.email" placeholder="">
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Password</label> <span class="text-danger">*</span>
                            <div class="input-group mb-3">
                                <input :type="showInput ? 'text' : 'password'" class="form-control p-3 bg-transparent border border-end-0" v-model="signinData.password" placeholder="">
                                <button type="button" class="input-group-text bg-transparent border border-start-0" @click="toggleInput" >
                                    <i class="bi bi-eye px-3 tertiary-font fs-4"></i>
                                </button>
                            </div>
                        </div>

                        <div class="footer w-100 text-center mt-5 mb-5">
                            <button class="btn text-white w-100 py-3 px-4 primary-bg rounded-0" type="submit">SIGN IN</button>
                            <p class="mt-3 mb-0">Forgot your password?</p>
                            <p class="m-0">Don't have an account? <router-link to="/legislative/resolution/ordinance-esubmission/sign-up" class="secondary-font text-decoration-none" href="">Sign Up</router-link> here.</p>
                        </div>
                    </form>
                </div>
                <div class="col-lg-5 linear-primary-bg py-5 text-white">

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
</style>