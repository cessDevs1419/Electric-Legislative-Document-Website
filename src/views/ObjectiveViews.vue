<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
import TemplateContainer from '@/components/TemplateContainer.vue';
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer class="mt-md-0 mt-5 mb-5">

        <div class="row w-100 m-auto mb-5 mt-5">
            <div class="col-lg-5 d-flex justify-content-center">
                <div class="icon mission"></div>
            </div>
            <div class="col-lg-6 d-flex align-items-center mt-5 mt-lg-0">
                <div class="detail-container text-center text-lg-start m-auto m-lg-0">
                    <h1 class="fw-bold">Our <span class="tertiary-font fw-bold" >Mission</span></h1>
                    <p>We Commit to provide equitable and strategic relevant legistations, that are <strong>inclusive</strong>, <strong>proactive</strong>, and <strong>responsive</strong>.</p>
                </div>
            </div>
        </div>

        <div class="row w-100 m-auto mb-5 mt-5 flex-column-reverse flex-lg-row">
            <div class="col-lg-8 d-flex align-items-center justify-content-center justify-content-lg-center mt-5 mt-lg-0">
                <div class="detail-container text-center text-lg-start m-auto m-lg-0">
                    <h1 class="fw-bold">Our <span class="tertiary-font fw-bold" >Vision</span></h1>
                    <p><Strong>The Sangguniang Panlungsod </Strong> shall be the premier legislative body of the city of general Santos, in the timely delivery of effective legistations responsive to the needs of its people.</p>
                </div>
            </div>
            <div class="col-lg-4 d-flex justify-content-center justify-content-lg-start">
                <div class="icon vision"></div>
            </div>
        </div>

        <div class="row w-100 m-auto mb-5 mt-5">
            <div class="col-lg-5 d-flex justify-content-center">
                <div class="icon quality"></div>
            </div>
            <div class="col-lg-6 d-flex align-items-center mt-5 mt-lg-0">
                <div class="detail-container text-center text-lg-start m-auto m-lg-0">
                    <h1 class="fw-bold">City <span class="tertiary-font fw-bold" >Quality Policy</span></h1>
                    <p>We, the <strong>Local Government of Quezon</strong> aspire to be globally competitive while enhancing the quality of life of our citizens towards a sustainable future. We are committed to providing quality services to all members of our society. We shall continually strive to improve our city, our people and our services while we foster the rule of law and equal opportunity for all.</p>
                </div>
            </div>
        </div>

        <div class="row w-100 m-auto mb-5 mt-5 flex-column-reverse flex-lg-row">
            <div class="col-lg-8 d-flex align-items-center justify-content-center justify-content-lg-center mt-5 mt-lg-0">
                <div class="detail-container text-center text-lg-start m-auto m-lg-0">
                    <h1 class="fw-bold">Our <span class="tertiary-font fw-bold" >Mandate</span></h1>
                    <p>
                        The Sanggunuiang Panlungsod of Quezon, being the legislative body of the City, Shall enact ordinance, 
                        approve resolutions and appropriate funds for the general welfare of the city and its inhabitants pursuant to the general welfare clause under <strong>Republic Act No. 7160</strong>, 
                        otherwise known as the <strong>Local Government Code of 1991</strong>, and in the proper exercise of its corporate powers. 
                        It shall establish local government structure that is accountable, efficient and dynamic, operating under a quality policy mechanism supporting the vision and mission of the Sanggunian.
                    </p>
                </div>
            </div>
            <div class="col-lg-4 d-flex justify-content-center justify-content-lg-start">
                <div class="icon mandate"></div>
            </div>
        </div>


    </TemplateContainer>
</template>

<style scoped>
    .spacer{
        padding-top: 15rem;
    }

    .icon{
        width: 100%;
        max-width: 300px;
        height: 300px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }

    .detail-container{
        max-width: 600px;
    }

    .mission{
        background-image: url('../assets/images/mission.png');
    }
    .vision{
        background-image: url('../assets/images/vision.png');
    }
    .quality{
        background-image: url('../assets/images/quality.png');
    }
    .mandate{
        background-image: url('../assets/images/mandate.png');
    }
    
</style>