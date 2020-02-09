<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-row align="start" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <div>
                  <v-toolbar-title>{{title}}</v-toolbar-title>
                  <div class="flex-grow-1">
                    <slot name="toolbar"></slot>
                  </div>
                </div>
              </v-toolbar>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="4">
            <slot></slot>
            <slot name="panelFooter"></slot>
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