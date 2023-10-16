<script setup>
import { ref, reactive, computed, getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'
import SimpleLoader from '../components/loaders/SimpleLoader.vue'
import dayjs from 'dayjs'

const route = useRoute()
const post = reactive({})
const isLoading = ref(true)
const currentApp = getCurrentInstance()
const ghostAPI = currentApp.appContext.config.globalProperties.ghostAPI

const slug = route.params.slug
ghostAPI.posts.browse({
    slug: slug,
    include: 'tags'
})
.then((response) => {
    Object.assign(post, response[0])
    isLoading.value = false
})
const publicDate = computed(() => dayjs(post.published_at).format('MMMM DD, YYYY'))
</script>

<template>
    <simple-loader v-if="isLoading"></simple-loader>
    <div class="blog-page-container" v-else>
        <article class="blog-page">
            <header class="blog-page-header">
                <section class="blog-page-meta">
                    <time class="blog-page-meta-date" :datetime="post.published_at">{{ publicDate }}</time>
                    <span class="date-divider">/</span>
                    <a dir="ltr" :href="`/blogs/tag/${post.primary_tag.name}`">#{{ post.primary_tag.name }}</a>
                </section>
                <h1 class="blog-page-title">{{ post.title }}</h1>
            </header>
            <figure class="blog-page-image">
                <picture>
                    <img :src="post.feature_image" :alt="post.feature_image_alt" width="2000" height="1000">
                </picture>
            </figure>
            <section class="blog-page-content">
                <div v-html="post.html" class="markdown-body"></div>
            </section>
        </article>
    </div>
</template>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Lato&family=Orbitron:wght@900&family=Source+Code+Pro&display=swap'); */
.blog-page-container {
    margin: 0 auto;
    max-width: 1060px;
    width: 100%;
    margin: 40px 100px;
    font-family: Lato, sans-serif; 
    font-size: 18px; 
}

.blog-page {
    position: relative;
    z-index: 50;
    text-align: justify;
}
.blog-page-header {
    padding: 0 0 3vw;
    max-width: 1040px;
    padding: 0;
}
.blog-page-meta {
    display: flex;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    flex-wrap: wrap;
}
.blog-page-meta-date {
    margin: 0;
}
.blog-page-meta a {
    color: #002ead;
    text-decoration: none;
    cursor: pointer;
}
.date-divider {
    display: inline-block;
    margin: 0 6px 1px;
}
.blog-page-title {
    font-size: 2rem;
    font-weight: 600;
    margin: 20px auto;
}
.blog-page-image {
    overflow: hidden;
}
.blog-page-image img {
    height: auto;
    width: 100%;
    max-height: 800px;
    max-width: 920px;
    object-fit: cover;
}
.blog-page-content {
    position: relative;
    /* margin: 0 auto; */
    margin-top: 60px;
    max-width: 800px;
    width: 90%;
    /* padding: 60px 150px 0 0; */
    /* margin-bottom: 40px; */
    min-height: 230px;
    font-family: Lato,sans-serif;
    font-display: swap;
    font-size: 1.3rem;
    line-height: 1.6em;
}

@media (max-width: 1200px) {
    .blog-page-container {
        margin: 40px 60px;
    }
    .blog-page-header {
        max-width: 90%;
    }
    .blog-page-container {
        margin: 40px 5%;
    }
    .blog-page-image img {
        height: auto;
        width: 90%;
        max-height: 800px;
        max-width: 100%;
        object-fit: cover;
    }
}


</style>