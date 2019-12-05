<template>
  <div>
    <h1>Register</h1>
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <button @click="register">Register</button>
    <h1>{{error}}</h1>
  </div>
</template>

<script>
import Authentication from "@/services/Authentication";
export default {
  data() {
    return {
      email: "type email here",
      password: "",
      error: ""
    };
  },
  methods: {
    async register() {
      try {
        await Authentication.register({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
