<template>
  <div id="error">
    <v-card-text
      v-if="errorMessage"
      transition="fade-transition"
      class="red white--text"
    >{{errorMessage.toUpperCase()}}</v-card-text>
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: String
  }
};
</script>
