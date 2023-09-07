<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="q-page q-layout-padding flex justify-center items-center">
        <div class="q-pa-md">
          <div class="column items-center q-gutter-md">
            <div class="col">
              <h5>HCT Comms Hub</h5>
            </div>
            <div class="col">
              <q-form @submit="onSubmit" @reset="onReset">
                <q-input
                  square
                  v-model="loginModel.userName"
                  type="text"
                  label="Username"
                >
                  <template v-slot:prepend>
                    <q-icon name="person" />
                  </template>
                </q-input>
                <q-input
                  square
                  v-model="loginModel.password"
                  label="Password"
                  :type="passwordVisibility ? 'password' : 'text'"
                >
                  <template v-slot:prepend>
                    <q-icon name="lock" />
                  </template>
                  <template v-slot:append>
                    <q-icon
                      :name="passwordVisibilityIcon"
                      @click="passwordVisibility = !passwordVisibility"
                      class="cursor-pointer"
                    />
                  </template>
                </q-input>

                <div class="mx-2">
                  <q-btn
                    unelevated
                    size="lg"
                    color="primary"
                    class="full-width text-white"
                    label="Login"
                    type="submit"
                  />
                </div>
              </q-form>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const onSubmit = async () => {
  router.push('/')
}
const onReset = () => {
  return true
}
const loginModel = ref<LoginModel>({ userName: '', password: '' })
const passwordVisibility = ref(true)
const passwordVisibilityIcon = computed(() =>
  passwordVisibility.value ? 'visibility' : 'visibility_off'
)
</script>
