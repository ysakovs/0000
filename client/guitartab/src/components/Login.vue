<template>
  <Panel title="Login">
    <v-card-text>
      <v-form>
        <v-text-field v-model="email" label="email" name="email" type="text" />
        <v-text-field
          id="password"
          label="Password"
          name="password"
          type="password"
          v-model="password"
        />
      </v-form>
    </v-card-text>
    <v-card-text
      v-if="error"
      transition="fade-transition"
      class="red white--text"
    >{{error.toUpperCase()}}</v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn @click="login" color="primary">Login</v-btn>
    </v-card-actions>
  </Panel>
</template>

<script>
import Authentication from "@/services/Authentication";
import Panel from "@/components/Panel";

export default {
  components: { Panel },

  data() {
    return {
      email: "sap@gmail.com",
      password: "12345678",
      error: ""
    };
  },
  methods: {
    async login() {
      try {
        const response = await Authentication.login({
          email: this.email,
          password: this.password
        });

        this.$store.dispatch("setToken", response.data.token);
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
