import { posts, isLoading } from './BlogListView.vue';

fetch(
input = `https://anhttra.digitalpress.blog/ghost/api/content/posts/
        ?key=ea798077f60def98dd123736ab&fields=title,feature_image`
)
.then(response => response.json())
.then((data) => {
Object.assign(posts, data.posts);
isLoading.value = false;
// console.log(posts);
});
