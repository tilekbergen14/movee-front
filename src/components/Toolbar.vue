<script setup>
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Avatar from "primevue/avatar";
import { RouterLink } from "vue-router";
</script>

<template>
  <Toolbar class="p-3">
    <template #start>
      <div class="flex align-items-center gap-2">
        <h2>MoV</h2>
        <RouterLink to="/"
          ><Button label="Home" text plain></Button
        ></RouterLink>
        <RouterLink to="/profile"
          ><Button label="Profile" text plain></Button
        ></RouterLink>
      </div>
    </template>

    <template #end>
      <div class="flex align-items-center gap-2">
        <Button label="Log in" severity="contrast" size="small"></Button>
        <Avatar
          image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        />
      </div>
    </template>
  </Toolbar>
</template>