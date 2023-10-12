<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="navbar-container">
    <nav class="navbar">
      <div class="navbar-left">
        <RouterLink :to="{ path: '/' }">
          <img src="@/assets/anhttra-logo.svg" class="img-logo" alt="Container AI" width="136" height="24"/>
        </RouterLink>
      </div>
      <div class="navbar-right">
        <RouterLink :to="{ path: '/blogs' }" class="navbar-right--item">BLOGS</RouterLink>
        <RouterLink :to="{ path: '/projects' }" class="navbar-right--item">PROJECTS</RouterLink>
      </div>
    </nav>

  </div>
</template>

<style scoped>
.navbar-container {
  /* overflow: hidden; */
  /* z-index: 10; */
  /* position: fixed; */
  /* top: 0px; */
  width: 100%;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  padding: 0 1rem;
  background-color: rgba(1,59,0,1); 
}


.img-logo {
  filter: invert(85%) sepia(89%) saturate(44%) hue-rotate(52deg) brightness(110%) contrast(113%);
}

.navbar-right {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 2rem;
}

.navbar-right--item {
  text-decoration: none;
  font-size: 1.3rem;
  font-family: 'Orbitron', sans-serif;
  font-family: 'Source Code Pro', monospace;
  color: #ffffff;
}
.navbar-right--item:hover {
  opacity: 0.9;
  color: rgb(11, 45, 10);
}

</style>