<template>
  <div class="q-pa-md">
    <q-table
      :grid="$q.screen.xs"
      flat
      bordered
      title="Leads"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" />
    </q-page-sticky>
  </div>
</template>

<script>
const columns = [
  {
    name: 'entered',
    align: 'center',
    label: 'Entered',
    field: 'entered',
    sortable: true
  },
  {
    name: 'firstName',
    align: 'center',
    label: 'First Name',
    field: 'firstName',
    sortable: true
  },
  { name: 'lastName', label: 'Last Name', field: 'lastName', sortable: true },
  { name: 'mobilePhone', label: 'Mobile Phone', field: 'mobilePhone' },
  { name: 'smsOptIn', label: 'SMS otp in', field: 'smsOptIn' },
  { name: 'email', label: 'Email', field: 'email' },
  {
    name: 'dob',
    label: 'DOB',
    field: 'dob',
    sortable: true
  },
  {
    name: 'referralSource',
    label: 'Referral Source',
    field: 'refSource',
    sortable: true
  },
  {
    name: 'notes',
    label: 'Notes',
    field: 'notes',
    sortable: true
  }
]

const rows = [
  {
    entered: '08/20/2023',
    firstName: 'Sally',
    lastName: 'Smith',
    mobilePhone: '6125551212',
    smsOptIn: 'yes',
    email: 'ssmith@gmail.com',
    dob: '01-01-1990',
    refSource: 'NPWEB',
    notes: ''
  }
]

export default {
  setup() {
    return {
      columns,
      rows
    }
  }
}
</script>
