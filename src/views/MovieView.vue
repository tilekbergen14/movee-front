<script setup>
import { onMounted } from "vue";
import { storeGetMovieById } from "../api/api";

onMounted(() => {
  storeGetMovieById();
});
</script>

<template>
  <div class="m-3">This is movie number {{ $route.params.id }}</div>
</template>
