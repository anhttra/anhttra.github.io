<script setup>
import { RouterView } from 'vue-router'
import SimpleNavBar from './components/navbars/SimpleNavBar.vue'
import SimpleFooter from './components/footers/SimpleFooter.vue'
</script>

<template>
  <header>
    <simple-nav-bar></simple-nav-bar>
  </header>

  <div class="routerview-container">
    <RouterView />
  </div>
  

  <footer>
    <SimpleFooter></SimpleFooter>
  </footer>
</template>

<style scoped>
.routerview-container {
  /* margin-top: 8.75rem; */
  /* margin-left: 160px; */
  /* Same as the width of the sidebar */
  position: relative;
  min-height: calc(100vh - 5.5rem);
  display: flex;
  width: 100%;
  /* justify-content: center; */
  /* align-items: center; */
}

</style>
