<script setup lang="ts">
import type { NavLink } from "../types/Navbar";
const isAuth = ref(false);
const links: NavLink[] = [
  { title: "Home", path: "/", icon: "i-mdi:home" },
  { title: "About", path: "/about", icon: "i-mdi:information" },
];
const linkStyleTailwind = "text-2xl text-slate-900 hover:text-slate-700 hover:text-slate-600";
</script>
<template>
  <div class="w-[100vw] h-[50px] bg-slate-200">
    <div class="flex row justify-center items-center w-[100%] space-x-4 w-100">
      <NuxtLink v-for="link in links" :to="link.path" :class="linkStyleTailwind"
        >{{ link.title }}<Icon :name="link.icon"/>
      </NuxtLink>
      <NuxtLink v-if="!isAuth" to="/login" :class="linkStyleTailwind">Login<Icon name="i-mdi:login"></Icon></NuxtLink>
    </div>
  </div>
</template>
