<script setup>
import { ref, reactive, computed, getCurrentInstance } from "vue";
import { useRoute } from "vue-router";
import SimpleLoader from "../components/loaders/SimpleLoader.vue";
import dayjs from "dayjs";

const route = useRoute();
const post = reactive({});
const isLoading = ref(true);
const currentApp = getCurrentInstance();
const ghostAPI = currentApp.appContext.config.globalProperties.ghostAPI;

const slug = route.params.slug;
ghostAPI.posts
  .read({
    slug: slug,
    include: "tags",
  })
  .then((response) => {
    Object.assign(post, response);
    console.log(response);
    isLoading.value = false;
  });
const publicDate = computed(() =>
  dayjs(post.published_at).format("MMMM DD, YYYY")
);
</script>

<template>
  <simple-loader v-if="isLoading"></simple-loader>
  <div class="blog-page-container" v-else>
    <article class="blog-page">
      <header class="blog-page-header">
        <section class="blog-page-meta">
          <time class="blog-page-meta-date" :datetime="post.published_at">{{
            publicDate
          }}</time>
          <span class="date-divider">/</span>
          <span>
            <a
              v-for="tag in post.tags"
              dir="ltr"
              class="blog-tag"
              :href="`/blogs/tag/${tag.name}`"
              >#{{ tag.name }}</a
            >
          </span>
        </section>
        <h1 class="blog-page-title">{{ post.title }}</h1>
      </header>
      <div class="blog-page-image">
        <img
          :src="post.feature_image"
          :alt="post.feature_image_alt"
          width="2000"
          height="1000"
        />
      </div>
      <section class="blog-page-content">
        <div v-html="post.html" class="markdown-body"></div>
      </section>
    </article>
  </div>
</template>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Lato&family=Orbitron:wght@900&family=Source+Code+Pro&display=swap'); */
.blog-page-container {
  max-width: 1060px;
  margin: 40px 100px;
  font-family: Lato, sans-serif;
  font-size: 18px;
}

.blog-page {
  position: relative;
  z-index: 50;
  text-align: justify;
  width: 100%;
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
.blog-tag {
  margin-right: 6px;
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
.blog-page-image img {
  max-height: 800px;
  width: 100%;
  object-fit: cover;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.blog-page-content {
  position: relative;
  margin-top: 60px;
  padding-right: 200px;
  font-family: Lato, sans-serif;
  font-display: swap;
  font-size: 1.3rem;
  line-height: 1.6em;
}

@media (max-width: 1200px) {
  .blog-page-container {
    margin: 40px 60px;
    max-width: calc(100% - 60px);
  }
  .blog-page-header {
    max-width: 90%;
  }
  .blog-page-container {
    margin: 40px 5%;
  }
  .blog-page-content {
    padding-right: 100px;
  }
}

@media (max-width: 600px) {
  .blog-page-container {
    margin: 40px 20px;
    max-width: calc(100% - 40px);
  }
  .blog-page-content {
    padding-right: 0px;
  }
}
</style>
