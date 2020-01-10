<template>
  <div id="success">
    <v-card-text v-if="good" transition="fade-transition" class="green white--text">asdfasfaasf</v-card-text>
  </div>
</template>

<script>
export default {
  props: {
    good: Boolean
  }
};
</script>
