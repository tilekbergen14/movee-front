<script setup>
import Toolbar from "./components/Toolbar.vue";
import { RouterView } from "vue-router";
</script>
<template>
  <Toolbar />
  <div class="m-3">
    <RouterView />
  </div>
</template>


