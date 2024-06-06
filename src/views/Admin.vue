<script setup>
import { onMounted, ref } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { getMovies } from "../api/api";
import Avatar from "primevue/avatar";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import ProgressSpinner from "primevue/progressspinner";

const loading = ref(false);
const movies = ref(null);
const visible = ref(false);

onMounted(() => {
  fetchData();
});

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

const deleteMovie = (id) => {
  console.log(id);
};
const editMovie = (id) => {
  console.log(id);
};
const openModal = () => {
  visible.value = true;
};
</script>

<template>
  <div v-if="loading" class="flex justify-content-center mt-4">
    <ProgressSpinner />
  </div>
  <div v-if="!loading">
    <div class="mb-3">
      <Button @click="openModal" severity="success">Add new</Button>
    </div>
    <DataTable :value="movies" tableStyle="min-width: 50rem" showGridlines>
      <Column header="Movie">
        <template #body="slotProps">
          <div class="flex align-items-center">
            <Avatar
              :image="`http://localhost:4000${slotProps.data.image}`"
              class="mr-2"
              size="xlarge"
              shape="circle"
            />
            <p>{{ slotProps.data.name }}</p>
          </div>
        </template>
      </Column>
      <Column field="actions" header="Actions">
        <template #body="slotProps">
          <div class="flex gap-2">
            <Button
              @click="deleteMovie(slotProps.data.id)"
              label="Danger"
              severity="danger"
              >Delete</Button
            >
            <Button
              @click="editMovie(slotProps.data.id)"
              label="Danger"
              severity="warning"
              >Edit</Button
            >
          </div>
        </template>
      </Column>
    </DataTable>
    <Dialog v-model:visible="visible" modal header="Add new movie" class="w-8">
      <div class="flex flex-column gap-2">
        <label for="username">Name</label>
        <InputText
          id="username"
          v-model="value"
          aria-describedby="username-help"
        />
        <!-- <small id="username-help"
        >Enter your username to reset your password.</small
      > -->
      </div>

      <div class="flex flex-column gap-2 pt-3">
        <label for="username">Description</label>
        <Textarea v-model="value" rows="5" cols="30"></Textarea>
        <!-- <small id="username-help">Enter your username to reset your password.</small> -->
      </div>
      <div class="flex flex-column gap-2 pt-3">
        <label for="username">Name</label>
        <InputText
          type="file"
          id="username"
          v-model="value"
          aria-describedby="username-help"
        />
        <!-- <small id="username-help"
        >Enter your username to reset your password.</small
      > -->
      </div>
      <div class="flex justify-content-end gap-2 pt-3">
        <Button
          type="button"
          label="Cancel"
          severity="secondary"
          @click="visible = false"
        ></Button>
        <Button type="button" label="Save" @click="visible = false"></Button>
      </div>
    </Dialog>
  </div>
</template>
