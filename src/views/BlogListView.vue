<script setup>
import SimpleLoader from '@/components/loaders/SimpleLoader.vue'
import BlogCard from '@/components/cards/BlogCard.vue'
import { ref, reactive, getCurrentInstance } from 'vue'

const isLoading = ref(true)
const posts = reactive([])
const currentApp = getCurrentInstance()
const ghostAPI = currentApp.appContext.config.globalProperties.ghostAPI

ghostAPI.posts.browse({
    include: 'tags'
})
.then((response) => {
    Object.assign(posts, response)
    isLoading.value = false
})
    
</script>

<template>
    <simple-loader v-if="isLoading"></simple-loader>
    <div class="bloglist-container" v-else>
        <blog-card v-for="post in posts" 
            :feature_image="post.feature_image"
            :title="post.title"
            :published_at="post.published_at"
            :primary_tag="post.primary_tag"
            :slug="post.slug"
        ></blog-card>
    </div>
</template>

<style scoped>
.bloglist-container {
    flex-direction: column;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin: 0 -20px;
    width: 100%;
    padding: 40px 0 0;
    /* background-color: #fff; */
}

@media (min-width: 768px) {
    .bloglist-container {
        /* margin: auto; */
        /* max-width: 875px; */
        /* align-self: center; */
    }
}

@media (max-width: 650px) {
    .post-feed {
        /* padding-top: 5vw; */
    }
}



</style>