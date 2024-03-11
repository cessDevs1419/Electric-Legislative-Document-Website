<script setup>
    import TitleContainerComponent from './TitleContainerComponent.vue';
    import MembersListTemplateComponent from './MembersListTemplateComponent.vue'
    import HotlinesTemplateComponent from './HotlinesTemplateComponent.vue';
    import OrderofBusinessApiService from '@/services/OrderofBusinessApiService';
</script>
<script >
    export default {
        data () {
            return {
                members: [

                ],
                hotlines: [

                ]
            }
        },
    }
</script>
<template>
    <div class="card">
        <TitleContainerComponent>
            <template #heading>
                <slot name="heading"></slot>
            </template>
        </TitleContainerComponent>
        <MembersListTemplateComponent
            :items="members"
        >
        </MembersListTemplateComponent>
        <div></div>
        <TitleContainerComponent>
            <template #heading>
                <slot name="heading"></slot>
            </template>
        </TitleContainerComponent>
        <HotlinesTemplateComponent
            :items="hotlineData"
        >
        </HotlinesTemplateComponent>
    </div>
</template>

<style scoped>

</style>
