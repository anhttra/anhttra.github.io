<script setup>
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const router = useRouter();

const previousPage = computed(() => {
    const lastPath = router.options.history.state.back;
    return lastPath ? lastPath : '/';
})
</script>
<template>
    <div class="code-area">
        <span style="color: #777;font-style:italic;">
            // 404 page not found.
        </span>
        <span>
            <span style="color:#d65562;">
                if
            </span>
            (<span style="color:#4ca8ef;">!</span><span style="font-style: italic;color:#bdbdbd;">found</span>)
            {
        </span>
        <span>
            <span style="padding-left: 15px;color:#2796ec">
                <i style="width: 10px;display:inline-block"></i>throw
            </span>
            <span>
                (<span style="color: #a6a61f">"Go back or go home!"</span>);
            </span>
            <span style="display:block">}</span>
            <span style="color: #777;font-style:italic;">
                // <router-link :to="previousPage">Go back!</router-link>
            </span>
            <span style="display:block"></span>
            <span style="color: #777;font-style:italic;">
                // <router-link :to="{ path: '/' }">Go home! </router-link>
            </span>
        </span>
    </div>
</template>

<style scoped>
/* Styles of the 404 page of my website. */

a {
    color: #fff;
}

.code-area {
    position: absolute;
    width: 320px;
    min-width: 320px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    line-height: 1.5em;
    color: #d3d7de;
    font-family: "Courier new";
}

.code-area>span {
    display: block;
}

@media screen and (max-width: 320px) {
    .code-area {
        font-size: 5vw;
        min-width: auto;
        width: 95%;
        margin: auto;
        padding: 5px;
        padding-left: 10px;
        line-height: 6.5vw;
    }
}
</style>