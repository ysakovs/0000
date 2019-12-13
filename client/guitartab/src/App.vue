<template>
  <v-app>
    <NavBar />
    <Login />
    <!-- must be nested in v-app for vuetify to work -->
    <router-view></router-view>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Login from "@/components/Login.vue";

export default {
  name: "App",

  components: { NavBar, Login },

  data: () => ({
    //
  })
};
</script>