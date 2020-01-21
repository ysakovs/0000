<template>
  <Panel title="Register">
    <v-card-text>
      <v-form>
        <v-text-field v-model="email" label="email" name="email" type="text" />
        <v-text-field id="password" label="Password" type="password" v-model="password" />
      </v-form>
    </v-card-text>
    <Success :success="success" />
    <Error :errorMessage="error" />
    <v-card-actions>
      <v-spacer />
      <v-btn :disabled="diableBtn" @click="register" color="primary">Register</v-btn>
    </v-card-actions>
  </Panel>
</template>

<script>
import Authentication from "@/services/Authentication";
import Error from "@/components/Error";
import Success from "@/components/Success";
import Panel from "@/components/Panel";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      success: false,
      diableBtn: false
    };
  },

  components: { Error, Success, Panel },

  methods: {
    //okay, 10 million ways to define function in javascript:
    //this way, play functino, plus property
    reset() {
      this.error = "";
      this.success = false;
    },

    async register() {
      this.reset();
      this.diableBtn = true;
      try {
        await Authentication.register({
          email: this.email,
          password: this.password
        });
        this.success = true;
      } catch (error) {
        this.error = error.response.data.error;
      }
      this.diableBtn = false;
    }
  }
};
</script>
