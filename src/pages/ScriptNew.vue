<template>
  <div class="q-pa-md">
    <div class="q-pa-md row q-gutter-xs">
      <div class="col">
        <q-select
          v-model="selected"
          :options="options"
          label="Choose Script today"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const options = ['SMS', 'Email']
const selected = ref<string>('')
</script>
