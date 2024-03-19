<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import { RouterLink } from 'vue-router';
    import PublicUserApiService from '@/services/PublicUserApiService';
    import {toast} from '@/toast'
    import router from '@/router';


</script>
<script>
    export default {
        data() {
            return{
                showInput: false,
                resetData: {
                    current_password: '',
                    new_password: '',
                    new_password_confirmation: '',
                },
                showValidation: {},
                border: {}
            }
        },
        methods: {
            toggleInput() {
                this.showInput =! this.showInput;
            },
            async resetSubmit() {
                try {
                    this.showValidation = {};
                    this.border = {};

                    Object.keys(this.resetData).forEach(key => {
                        if (this.resetData[key].trim() === '') {
                            this.showValidation[key] = true;
                            this.border[key] = true;
                            toast(key+' is required', 'warning');
                        }
                    });

                    if (Object.keys(this.showValidation).length > 0) {
                        return;
                    }

                    await PublicUserApiService.updatePassword(this.resetData).then(items => {
                        if(items.type === 'error'){
                            toast(items.text, items.type);
                        }else{   
                            for (let key in this.resetData) {
                                this.resetData[key] = '';
                            }

                            toast(items.text, items.type);
                            router.push('/login');
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    });

                } catch (error) {
                    console.error('Sign-in failed:', error);
                }
            },
        },
        created() {
            console.log(this.resetData);
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
                        <h1 class="fw-bolder m-0">Change Password</h1>
                    </div>
                    <form class="px-2 px-md-5  " @submit.prevent="resetSubmit">
                        <div class="mb-4">
                            <label class="form-label">Current Password</label>
                            <span class="text-danger"  v-if="showValidation.current_password"> *</span>
                            <div class="input-group mb-3">
                                <input :type="showInput ? 'text' : 'password'" :class="{ 'border-danger': border.current_password }" class="form-control p-3 bg-transparent border border-end-0" v-model="resetData.current_password" placeholder="">
                                <button type="button" :class="{ 'border-danger': border.new_password }" class="input-group-text bg-transparent border border-start-0" @click="toggleInput" >
                                    <i class="bi bi-eye px-3 tertiary-font fs-4"></i>
                                </button>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="form-label">New Password</label>
                            <span class="text-danger" v-if="showValidation.new_password"> *</span>
                            <div class="input-group mb-3">
                                <input :type="showInput ? 'text' : 'password'" :class="{ 'border-danger': border.new_password }" class="form-control p-3 bg-transparent border border-end-0" v-model="resetData.new_password" placeholder="">
                                <button type="button" :class="{ 'border-danger': border.new_password }" class="input-group-text bg-transparent border border-start-0" @click="toggleInput" >
                                    <i class="bi bi-eye px-3 tertiary-font fs-4"></i>
                                </button>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Confirm Password</label>
                            <span class="text-danger" v-if="showValidation.new_password_confirmation "> *</span>
                            <div class="input-group mb-3">
                                <input :type="showInput ? 'text' : 'password'" :class="{ 'border-danger': border.new_password_confirmation }" class="form-control p-3 bg-transparent border border-end-0" v-model="resetData.new_password_confirmation" placeholder="">
                                <button type="button" :class="{ 'border-danger': border.new_password_confirmation }" class="input-group-text bg-transparent border border-start-0" @click="toggleInput" >
                                    <i class="bi bi-eye px-3 tertiary-font fs-4"></i>
                                </button>
                            </div>
                        </div>
                        <div class="footer w-100 text-center mt-5 mb-5">
                            <button class="btn text-white w-100 py-3 px-4 primary-bg rounded-0 mb-3" type="submit">SUBMIT</button>
                            <p class="m-0">Don't have an account? <router-link to="/sign-up" class="secondary-font text-decoration-none" href="">Sign Up</router-link> here.</p>
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

    .bg-dark-subtle{
        background: #d9d9de !important;
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