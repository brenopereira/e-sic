<template>
    <div>
        <headerComponent></headerComponent>
        <router-view></router-view>
    </div>
</template>
<script>
    import headerComponent from './header.vue';
    export default {
        data(){
            return {
                
            }
        },
        components: {
            headerComponent
        }
    }
</script>
