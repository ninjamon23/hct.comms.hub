<template>
  <div class="q-pa-md">
    <div class="class q-gutter-md">
      <q-input v-model="title" label="Campaign Title" />
      <q-btn color="primary" label="Add Steps" />
      <q-btn color="primary" label="Add Scripts" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const title = ref<string>()
</script>
