<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-row align="start" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>{{title}}</v-toolbar-title>
                <slot name="toolbar"></slot>
              </v-toolbar>
              <slot></slot>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>