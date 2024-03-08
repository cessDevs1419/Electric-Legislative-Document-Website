<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';

</script>
<script>
    export default {
        data() {
            return{
                showInput: false,
                signupData: {
                    fullname: '',
                    email: '',
                    city: '',
                    contact: 0,
                    office: '',
                    secretary: '',
                }
            }
        },
        methods: {
            toggleInput() {
                this.showInput =! this.showInput;
            },
            signupSubmit() {
                console.log('Form submitted:', this.signupData);
            }
        }
    }
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer class="d-flex align-item-center jutify-content-center mb-5 py-5">
        <div class="signin-container w-100 box-shadow my-5 m-auto">
            <div class="row w-100 h-100 m-auto ">
                <div class="col-lg-5 p-2 linear-primary-bg text-white position-relative overflow-hidden">
                    <div class="title m-auto text-center mb-4 mt-5 ">
                        <h1 class="fw-bolder m-0">Sign Up Now</h1>
                        <p >We are just one call away</p>
                    </div>
                    <div class="details px-5">
                        <p>Lorem ipsum dolor sit amet consectetur. Scelerisque fringilla adipiscing risus nascetur leo pulvinar nunc. Sed pellentesque non varius ut aliquam ut. Elementum facilisis sit tortor iaculis.</p>
                        
                        <p><i class="bi bi-envelope me-1"></i> dummyEmail@hotmail.com</p>
                        <p><i class="bi bi-facebook me-1"></i> facebook.com/LguGensan</p>

                    </div>
                    <div class="footer z-1 w-100 px-5 position-absolute bottom-0 pb-5">
                        <p class="m-0">Already have an account? <router-link to="/legislative/resolution/ordinance-esubmission/sign-in" class="secondary-font text-decoration-none">Sign In</router-link> here.</p>
                    </div>

                    <div class="blob w-100 h-100 position-absolute top-0 start-0">

                    </div>

                    
                </div>
                <div class="col-lg-7 dirty-white-bg py-5 ">
                    <form class="px-5  " @submit.prevent="signinSubmit">
                        <div class="mb-4">
                            <label class="form-label">Full name</label> <span class="text-danger">*</span>
                            <input type="text" class="form-control p-3 bg-transparent" v-model="signupData.fullname" placeholder="">
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-4">
                                    <label class="form-label">Email address</label> <span class="text-danger">*</span>
                                    <input type="email" class="form-control p-3 bg-transparent" v-model="signupData.email" placeholder="">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-4">
                                    <label class="form-label">City/Municipality</label> <span class="text-danger">*</span>
                                    <input type="text" class="form-control p-3 bg-transparent" v-model="signupData.city" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-4">
                                    <label class="form-label">Contact Number</label> <span class="text-danger">*</span>
                                    <input type="number" class="form-control p-3 bg-transparent" v-model="signupData.contact" placeholder="">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-4">
                                    <label class="form-label">Office</label> <span class="text-danger">*</span>
                                    <input type="text" class="form-control p-3 bg-transparent" v-model="signupData.office" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Name of Secretary</label> <span class="text-danger">*</span>
                            <input type="text" class="form-control p-3 bg-transparent" v-model="signupData.secretary" placeholder="">
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