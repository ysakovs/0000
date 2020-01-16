<template>
  <div id="success">
    <v-card-text
      v-if="success"
      transition="fade-transition"
      class="green white--text"
    >Account Successfully Created</v-card-text>
  </div>
</template>

<script>
export default {
  props: {
    success: Boolean
  }
};
</script>
