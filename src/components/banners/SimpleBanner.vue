<script setup>
import { ref, reactive, getCurrentInstance } from 'vue'

const latestPost = reactive({})
const showBanner = ref(false)
const currentApp = getCurrentInstance()
const ghostAPI = currentApp.appContext.config.globalProperties.ghostAPI

ghostAPI.posts.browse({
    limit: 1
}).then(([post]) => {
    Object.assign(latestPost, post)
    showBanner.value = true
})
</script>

<template>
    <div class="simple-banner-container" v-if="showBanner">
        <router-link class="simple-banner" :to="'/blogs/'+latestPost.slug">
            👋 Hi! Let check out my latest post - <span style="font-weight: bold;">"{{ latestPost.title }}"</span>
        </router-link>
    </div>
    
</template>

<style scoped>
.simple-banner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
    background-color: #002ead;
    
}
.simple-banner {
    width: 100%;
    margin: 10px 0;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
    font-family: 'Orbitron', sans-serif;
    font-family: 'Source Code Pro', monospace;
}



</style>