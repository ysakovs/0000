<template>
  <div>
    <div v-if="!$store.state.loggedIn">
      <v-app-bar app color="primary">
        <v-btn text to="/">
          <span class="mr-2">TabTracker</span>
        </v-btn>
        <BrowseBtn />
        <v-spacer></v-spacer>

        <v-btn to="/register">
          <span class="mr-2">Register</span>
        </v-btn>
      </v-app-bar>
    </div>

    <div v-else>
      <v-app-bar app color="primary">
        <v-btn text to="/">
          <span class="mr-2">TabTracker</span>
        </v-btn>

        <BrowseBtn />
        <v-spacer></v-spacer>

        <v-btn @click="logout" to="/">
          <span class="mr-2">LogOut</span>
        </v-btn>
      </v-app-bar>
    </div>
  </div>
</template>

<script>
import BrowseBtn from "@/components/BrowseBtn";

export default {
  name: "App",

  components: { BrowseBtn },

  data: () => ({
    //
  }),
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
    }
  }
};
</script>
