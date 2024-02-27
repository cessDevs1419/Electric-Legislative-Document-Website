<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';

    const formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };

    const handleSubmit = () => {
        if (!isValid) {
            console.error('Please fill in all fields');
            return;
        }else {
            console.log('Form submitted:', formData);
        }
        };
</script>


<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer class="d-flex align-item-center jutify-content-center mb-5">
        <div class="contact-container w-100 box-shadow my-5 m-auto">
            <div class="row w-100 h-100 m-auto ">
                <div class="col-lg-7 p-5 dirty-white-bg">
                    <div class="title m-auto text-center mb-5 mt-5">
                        <h1 class="fw-bolder m-0">Send us a Message !</h1>
                        <p>We would like to hear from you !</p>
                    </div>
                    <form class="px-5  mt-5 mb-5" @submit.prevent="handleSubmit">
                        <div class="mb-4">
                            <label class="form-label">Full name</label> <span class="text-danger">*</span>
                            <input type="text" class="form-control border-0 bg-transparent"  v-model="formData.name" placeholder="">
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Email address</label> <span class="text-danger">*</span>
                            <input type="email" class="form-control border-0 bg-transparent" v-model="formData.email" placeholder="">
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Subject</label> <span class="text-danger">*</span>
                            <input type="text" class="form-control border-0 bg-transparent" v-model="formData.subject" placeholder="">
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Message</label> <span class="text-danger">*</span>
                            <textarea class="form-control border-0 bg-transparent" v-model="formData.message" rows="3"></textarea>
                        </div>


                        <div class="footer w-100 d-flex justify-content-end">
                            <button class="btn text-white px-4 primary-bg rounded-0" type="submit">Submit</button>
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
</style>