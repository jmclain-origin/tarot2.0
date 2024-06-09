<script setup lang="ts">
import { getTarotData } from '../utils/dataParser';
// const yaml = require('js-yaml');
// import fs from 'fs';

// const tarotData = fs.readFileSync('', 'utf-8');

// console.log('>>>>>>>>>>>>>>>', tarotData);
// function getImagePath() {
//     const yaml = JSON.parse(JSON.stringify(tarotData))
//     return yaml;
// }

// const imgs = ref<string[]>([]);
// console.log('getImag', getImagePath());
console.log(getTarotData());
</script>

<template>
    <main>
        <Navbar/>
    </main>
</template>