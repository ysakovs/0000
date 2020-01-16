<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-row align="start" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Register</v-toolbar-title>
              </v-toolbar>
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
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Authentication from "@/services/Authentication";
import Error from "@/components/Error";
import Success from "@/components/Success";

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

  components: { Error, Success },

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
