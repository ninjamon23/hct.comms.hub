<template>
  <div class="q-pa-md">
    <div class="q-pa-md row q-gutter-xs">
      <div class="col">
        <q-select v-model="selected" :options="options" label="Filter" />
      </div>
      <div class="col">
        <q-select
          v-model="selectedSource"
          :options="sourceOptions"
          label="Source"
        />
      </div>
    </div>
    <q-table title="Scripts" :rows="rows" :columns="columns" row-key="name" />
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="add"
        color="primary"
        @click="router.push('/scripts/new')"
      />
    </q-page-sticky>
  </div>
</template>

<script setup lang="ts">
import { QTableProps } from 'quasar'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const selected = ref('')
const selectedSource = ref()
const options = ['SMS', 'Email', 'SMS and Email']
const sourceOptions = ['HealthSource', 'HealthCoreTech', 'Custom']

const columns: QTableProps['columns'] = [
  {
    name: 'type',
    required: true,
    label: 'Type',
    align: 'left',
    field: 'type',
    sortable: true
  },
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: 'name',
    sortable: true
  }
]

const rows: QTableProps['rows'] = [
  {
    name: 'Just checking in',
    type: 'SMS'
  },
  {
    name: 'Online Lead Follow-up #1',
    type: 'Email'
  },
  {
    name: 'Online Lead Follow-up #2',
    type: 'Email'
  },
  {
    name: 'Online Lead Follow-up #3',
    type: 'Email'
  },
  {
    name: 'Online Lead Follow-up #4',
    type: 'Email'
  },
  {
    name: 'Online Lead Follow-up #5',
    type: 'Email'
  }
]
</script>
