<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import ValidationService from '@/services/ValidationService.js';

    // SampleApiService.fetchProjects()
    // .then(data => {
    //     console.log("Projects:", data);
    // })
    // .catch(error => {
    //     console.error('Error fetching projects:', error);
    // });

</script>
<script>
    export default {
        data() {
            return{
                showInput: false,
                contactData: {
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                },
                showValidation: {},
                border: {}
            }
        },
        methods: {
            async contactSubmit() {
                try {
                    this.showValidation = {};
                    this.border = {};

                    Object.keys(this.contactData).forEach(key => {
                        if (this.contactData[key].trim() === '') {
                            this.showValidation[key] = true;
                            this.border[key] = true;
                        } else if (key === 'email' && !ValidationService.emailValidator(this.contactData[key])) {
                            this.showValidation[key] = true; 
                            this.border[key] = true; 
                        }
                    });

                    if (Object.keys(this.showValidation).length > 0) {
                        return;
                    }

                    console.log('Contact successful');
                } catch (error) {
                    console.error('Contact failed:', error);
                }
            },
            back(){
                window.history.back()
            },
        }
    }
</script>


<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer class="d-flex align-item-center jutify-content-center mb-5">
        <div class="contact-container w-100 box-shadow m-auto">
            <div class="row w-100 h-100 m-auto ">
                <div class="col-lg-7 py-5 px-3 px-md-5 dirty-white-bg">
                    <div class="title m-auto text-center mb-5 mt-5">
                        <h1 class="fw-bolder m-0">Send us a Message !</h1>
                        <p>We would like to hear from you !</p>
                    </div>
                    <form class="px-0 px-md-5 mt-5 mb-5" @submit.prevent="contactSubmit">
                        <div class="mb-4">
                            <label class="form-label">Full name</label>
                            <span class="text-danger" v-if="showValidation.name"> *</span>
                            <input type="text" :class="{ 'border border-danger border-1': border.name }" class="form-control bg-transparent"  v-model="contactData.name" placeholder="">
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Email address</label>
                            <span class="text-danger" v-if="showValidation.email"> *</span>
                            <input type="email" :class="{ 'border border-danger border-1': border.email }" class="form-control bg-transparent" v-model="contactData.email" placeholder="">
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Subject</label>
                            <span class="text-danger" v-if="showValidation.subject"> *</span>
                            <input type="text" :class="{ 'border border-danger border-1': border.subject }" class="form-control bg-transparent" v-model="contactData.subject" placeholder="">
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Message</label>
                            <span class="text-danger" v-if="showValidation.message"> *</span>
                            <textarea :class="{ 'border border-danger border-1': border.message }" class="form-control bg-transparent" v-model="contactData.message" rows="3"></textarea>
                        </div>


                        <div class="footer w-100 text-center d-flex justify-content-end mt-5 mb-5">
                            <button class="btn-cancel z-0 overflow-hidden position-relative text-dark py-3 px-4 bg-transparent border primary-divider me-2 rounded-0" type="button" @click="back">
                                <p class="z-3 m-0">CANCEL</p>
                                <div class="btn-bg z-n1 border top-0 start-0 position-absolute secondary-bg w-100 h-100">

                                </div>
                            </button>
                            <button class="btn text-white py-3 px-4 primary-bg rounded-0" type="submit">SUBMIT</button>
                        </div>
                    </form>
                </div>
                <div class="col-lg-5 secondary-bg py-5 text-white">
                    <div class="title m-auto text-center mb-4 mt-5 ">
                        <h1 class="fw-bolder m-0">Contact Us</h1>
                        <p >We are just one call away</p>
                    </div>
                    <div class="details px-5">
                        <p>Lorem ipsum dolor sit amet consectetur. Scelerisque fringilla adipiscing risus nascetur leo pulvinar nunc. Sed pellentesque non varius ut aliquam ut. Elementum facilisis sit tortor iaculis.</p>
                        
                        <p><i class="bi bi-envelope me-1"></i> dummyEmail@hotmail.com</p>
                        <p><i class="bi bi-facebook me-1"></i> facebook.com/LguGensan</p>

                        <div class="hotlines">
                            <h4 class="fw-semibold mb-4">Office Hotlines</h4>

                            <h5>Vice Mayor's Office</h5>
                            <p> <i class="bi bi-telephone-fill me-1"></i> (083) 552-9692</p>
                        
                            <h5>SP Secretary Office</h5>
                            <p> <i class="bi bi-telephone-fill me-1"></i> (083) 552-9692</p>

                            <h5>Legislative Division</h5>
                            <p> <i class="bi bi-telephone-fill me-1"></i> (083) 552-9692</p>

                            <h5>Library Division</h5>
                            <p> <i class="bi bi-telephone-fill me-1"></i> (083) 552-9692</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </TemplateContainer>

</template>

<style scoped>
    .form-control{
        border: 1px solid #F9F9F9;
    }   
    .spacer {
        padding-top: 15rem;
    }

    .dirty-white-bg{
        background: #F9F9F9;
    }

    .primary-bg{
        background: var(--primary-color) !important;
    }
    .contact-container{
        min-height: 45rem;
        max-width: 100%;
    }
    .primary-divider{
        border-color: var(--primary-color) !important;
    }
</style>