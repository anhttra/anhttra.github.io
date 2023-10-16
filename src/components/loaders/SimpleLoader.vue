<template>
    <div class="loader-container">
        <div class="loader"></div>
    </div>
</template>
  
<style scoped>
.loader-container {
    position: absolute;
    z-index: 99999999;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    /* background-color: aqua; */
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader {
    border: 0.5rem solid #f3f3f3;
    /* Light grey */
    border-top: 0.5rem solid #7b7d7d;
    /* Blue */
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    position: relative;
    animation: spin 1.5s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}</style>