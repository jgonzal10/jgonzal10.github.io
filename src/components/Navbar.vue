<script setup lang="ts">
import { ref } from 'vue'
import {AdjustmentsHorizontalIcon} from "@heroicons/vue/24/outline"
import {navItems} from "../data/index.ts"

const showMenu = ref(false);
const active= ref(0);
const toggleShowMenu = ()=>{
  showMenu.value = !showMenu.value;
}
const updateActive = (index: number)=>{
active.value =index;
}
<template>
  <div class="w-full flex justify-center">
      <div class="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-yellow-700/70 p-2"
      @click="toggleShowMenu"><AdjustmentsHorizontalIcon class="size-8 text-yellow-700" /></div>
      <nav class="fixed z-[999] flex items-center gap-5 bg-yellow-800/60 px-6 py-3 backdrop-blur-md rounded-full text-gray-200 duration-300" :class="{showMenu ? 'bottom-10':bottom-[-100]}">
    <a v-for="(item, index) in navItems" :key="index" :href="item.href" @click="updateActive(index)" class="text-xl p-2.5 rounded-full sm:cursor-pointer" :class="{active === index? 'bg-yellow-500': ''}">
      <component :is="item.icon" class="size-6" />
  </a>
      </nav>
    </div>
</template>