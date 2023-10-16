import { ghostAPI, latestPost, showBanner } from './SimpleBanner.vue';

ghostAPI.posts.browse({ limit: 1 }).then(
([post]) => {
Object.assign(latestPost, post);
showBanner.value = true;
}
);
