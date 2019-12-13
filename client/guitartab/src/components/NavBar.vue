<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center"></div>

    <v-btn text to="/">
      <span class="mr-2">TabTracker</span>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn to="register">
      <span class="mr-2">Register</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
