<script setup>
import { onMounted, ref, watch } from "vue";
import { getMovies } from "../api/api.js";
import ProgressSpinner from "primevue/progressspinner";
import Card from "primevue/card";
import { useRouter } from "vue-router";

const loading = ref(false);
const movies = ref(null);
const router = useRouter();

onMounted(() => {
  fetchData();
});

const toMovie = (movie) => {
  router.push({ name: "movie", params: { id: movie.id } });
};

async function fetchData() {
  loading.value = true;
  try {
    movies.value = await getMovies();
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div v-if="loading" class="flex justify-content-center mt-4">
    <ProgressSpinner />
  </div>
  <div class="grid">
    <div class="col-3" v-for="(movie, index) in movies" :key="index">
      <Card @click="toMovie(movie)" class="m-0 p-0" style="overflow: hidden">
        <template #header>
          <img
            alt="Image"
            :src="'http://localhost:4000' + movie.image"
            class="w-full"
          />
        </template>
        <template #title>{{ movie.name }}</template>
        <template #subtitle> {{ movie.description }}</template>
      </Card>
    </div>
  </div>
</template>

