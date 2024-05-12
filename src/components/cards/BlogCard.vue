<script setup>
import { computed } from "vue";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const props = defineProps([
  "feature_image",
  "title",
  "published_at",
  "url",
  "tags",
  "slug",
]);
const timeAgo = computed(() => dayjs(props.published_at).fromNow());
</script>

<template>
  <div class="blog-card">
    <router-link class="blog-card-image" :to="'/blogs/' + slug">
      <img :src="feature_image" />
    </router-link>
    <div class="blog-card-content">
      <div class="blog-card-content-link">
        <div class="blog-card-tags">
          <span v-for="tag in tags" class="blog-card-tag">
            <router-link :to="'/tags/' + tag.name">#{{ tag.name }}</router-link>
          </span>
        </div>
        <h2 class="blog-card-title">
          <router-link :to="'/blogs/' + slug">{{ title }}</router-link>
        </h2>
      </div>

      <div class="blog-card-meta">
        <span class="blog-card-publish-time">{{ timeAgo }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* @media (min-width: 768px) {
.blog-card {
    flex: 1 1 100%;
    flex-direction: row;
    box-shadow: none;
}
} */

.blog-card {
  display: flex;
  flex-direction: row;
  width: 700px;
  /* background-color: gray; */
  padding: 3px;
  font-family: Arial, Helvetica, sans-serif;
}

.blog-card a,
.blog-card a:hover,
.blog-card a:focus,
.blog-card a:active {
  text-decoration: none;
  color: inherit;
}

.blog-card-image {
  flex: 1 1 300px;
  overflow: hidden;
}
.blog-card-image img {
  height: 150px;
}

.blog-card-content {
  flex: 1 1 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 30px;
  height: 150px;
  /* padding-bottom: 30px; */
}

.blog-card-tag {
  display: flex;
  gap: 10px;
  text-transform: uppercase;
  margin-bottom: 1.3rem;
  font-size: 0.9rem;
  line-height: 1.15em;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding-right: 15px;
  color: #909792;
}

.blog-card-primary-tag:hover {
  text-decoration: underline;
}

.blog-card-title {
  /* margin: 1.2em 0; */
  /* font-size: 100%; */
  font-size: 1.5rem;
  color: #729176;
  line-height: 2rem;
  margin: 0;
}

.blog-card-title:hover {
  text-decoration: underline;
}

.blog-card-meta {
  display: flex;
  justify-content: flex-end;
  text-transform: uppercase;
  font-size: 0.8rem;
  line-height: 20px;
  font-weight: 500;
  color: #909792;
}

.blog-card-tags {
  display: inline-flex;
}

@media (max-width: 768px) {
  .blog-card {
    max-width: 80%;
    flex-direction: column-reverse;
  }

  .blog-card-content {
    flex-basis: content;
    padding-left: 0;
  }
  .blog-card-image {
    flex-basis: content;
  }
  .blog-card-image img {
    width: 100%;
  }
  .blog-card-primary-tag {
    margin-bottom: 0;
  }
  .blog-card-title {
    margin: 0;
  }
  .blog-card-meta {
    order: 10;
    margin-bottom: 10px;
    /* display: inline-block; */
  }
}
</style>
