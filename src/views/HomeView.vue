<script setup>
async function fetchData(id) {
  error.value = post.value = null;
  loading.value = true;

  try {
    post.value = await getPost(id);
  } catch (err) {
    error.value = err.toString();
  }
}
</script>

<template>
  <div class="m-3">This is homepage</div>
</template>

