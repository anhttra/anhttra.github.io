<script setup>
import { ref, reactive } from 'vue';
const latestPost = reactive({});
const showBanner = ref(false);
fetch('https://anhttra.digitalpress.blog/ghost/api/content/posts/?key=ea798077f60def98dd123736ab&limit=1')
    .then(response => response.json())
    .then((data) => {
        if (data.posts.length) {
            Object.assign(latestPost, data.posts[0]);
            showBanner.value = true;
            console.log(latestPost);
        }
    });
</script>

<template>
    <div class="simple-banner-container" v-if="showBanner">
        <a class="simple-banner" href="">
            👋 Hi! Let check out my latest post - <span style="font-weight: bold;">"{{ latestPost.title }}"</span>
        </a>
    </div>
    
</template>

<style scoped>
.simple-banner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 40px; */
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