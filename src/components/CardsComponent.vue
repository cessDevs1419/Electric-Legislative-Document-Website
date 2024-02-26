<script >
    export default {
        props: {
            images: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            status: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            year: {
                type: String,
                required: true
            },
        }
    }

</script>

<template>
    <div class="card-container position-relative d-flex flex-column justify-content-center ">
        <!-- <img class="img-container z-1 border m-auto position-absolute " src="" alt=""> -->
        <div class="cards overflow-visible bg-white  box-shadow px-4 pb-3">
            <div class="img-container box-shadow">
                <img class="w-100 h-100 " :src="images" alt="" >
            </div>
            <div class="description text-center mt-4">
                <h4 class="tertiary-font fw-medium mb-3">{{name}}</h4>
                <div class="description-container text-start">
                    <p class="m-0">{{status}}</p>
                    <p class="m-0">{{description}}</p>
                    <p class="m-0">{{year}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .img-container{
        width: 100%;
        max-width: 16.5rem;
        height: 15rem;
        margin-top: -1.5rem ;
        left: 1.5rem;
    }

    .cards{
        height: 24rem;
        margin-top: 5rem;
    }

</style>