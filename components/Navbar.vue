<script setup lang="ts">
import type { NavLink } from "../types/Navbar";
const isAuth = ref(false);
const links: NavLink[] = [
  { title: "Home", path: "/", icon: "" },
  { title: "About", path: "/about", icon: "" },
];
</script>
<template>
  <div class="w-[100vw] h-[50px] bg-slate-200">
    <div class="flex row justify-center items-center w-[100%] space-x-4 w-100">
      <NuxtLink v-for="link in links" :to="link.path"
        >{{ link.title }}<i :class="link.icon"></i
      ></NuxtLink>
      <NuxtLink v-if="!isAuth" to="/login">Login</NuxtLink>
    </div>
  </div>
</template>
