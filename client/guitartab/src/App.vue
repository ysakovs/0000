<template>
  <v-app>
    <NavBar />
    <!-- must be nested in v-app for vuetify to work -->
    <router-view></router-view>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",

  components: { NavBar },

  data: () => ({
    //
  })
};
</script>