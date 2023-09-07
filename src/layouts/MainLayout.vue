<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Comms Hub
          <q-badge transparent align="middle" color="teal">
            app v0.0.1
          </q-badge></q-toolbar-title
        >

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu</q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue'

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Leads',
    caption: 'Leads',
    icon: 'list',
    link: '/lead'
  },
  {
    title: 'Campaigns',
    caption: 'Campaign List',
    icon: 'feed',
    link: '/campaign'
  },
  {
    title: 'Scripts',
    caption: 'List of scripts',
    icon: 'code',
    link: '/scripts'
  },
  {
    title: 'Review Management',
    caption: 'For management',
    icon: 'chat',
    link: '/review'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
