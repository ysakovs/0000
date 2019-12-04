<template>
  <div>
    <h1>Register</h1>
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import Authentication from "@/services/Authentication";
export default {
  data() {
    return {
      email: "type email here",
      password: ""
    };
  },
  methods: {
    register() {
      Authentication.register({ email: this.email, password: this.password });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
