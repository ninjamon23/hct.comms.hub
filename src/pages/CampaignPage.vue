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
    <q-table
      :grid="$q.screen.xs"
      flat
      bordered
      title="Campaign"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="add"
        color="primary"
        @click="navigate('/campaign/new')"
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

const columns: QTableProps['columns'] = [
  {
    name: 'type',
    align: 'center',
    label: 'Type',
    field: 'type',
    sortable: true
  },
  {
    name: 'title',
    align: 'center',
    label: 'Campaign Title',
    field: 'title',
    sortable: true
  },
  { name: 'steps', label: 'Steps', field: 'steps', sortable: true },
  { name: 'campaignType', label: 'Campaign Type', field: 'campaignType' }
]

const rows: QTableProps['rows'] = [
  {
    type: 'SMS',
    title: 'Just Checking In',
    steps: '2',
    campaignType: 'Drip'
  },
  {
    type: 'SMS and Email',
    title: 'Online Lead Followup',
    steps: '5',
    campaignType: 'Drip'
  },
  {
    type: 'Email',
    title: 'Low Back Pain',
    steps: '3',
    campaignType: 'Drip'
  },
  {
    type: 'Email',
    title: 'Sleep',
    steps: '1',
    campaignType: 'Blast'
  },
  {
    type: 'Email',
    title: 'CBD',
    steps: '1',
    campaignType: 'Blast'
  }
]

const options = ['SMS', 'Email', 'SMS and Email']
const sourceOptions = ['HealthSource', 'HealthCoreTech', 'Custom']

const navigate = (path: string) => {
  router.push(path)
}
</script>
