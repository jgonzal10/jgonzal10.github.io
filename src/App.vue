<script setup lang="ts">
//import Navbar from "./components/Navbar"
import Contact from "./components/Contact.vue"
import {onMounted} from "vue"
import AOS from "aos";
import "aos/dist/aos.css"

onMounted(()=>{
  AOS.init({
    duration:1800,
    offset:100,
    disable:"mobile"
  })
})
</script>

<template>
      <div class="bg-gray-950">
      <Navbar />
      <Contact />
    </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
