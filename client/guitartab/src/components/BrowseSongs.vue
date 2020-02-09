<template>
  <div>
    <Panel title="Songs">
      <v-tooltip top>
        <template v-slot:activator="{on}">
          <v-btn v-on="on" to="/songs/create" fab small slot="toolbar">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>Create a New Song</span>
      </v-tooltip>

      <div v-for="song in songs" :key="song.id">
        <v-container>
          <v-row no-gutters>
            <v-col>
              <div>{{song.title}}</div>
              <div>{{song.artist}}</div>
            </v-col>

            <v-col>
              <img :src="song.albumImageUrl" />
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-btn :to="song.editRoute" right outlined color="dark">Edit Song</v-btn>
          </v-row>
        </v-container>
      </div>
      <v-select
        @change="setSongs"
        slot="panelFooter"
        :items="songCounts"
        v-model="songCount"
        label="Number Of Song to Display"
      ></v-select>
    </Panel>
  </div>
</template>

<script>
import Panel from "@/components/Panel";
import Songs from "@/services/Songs";

export default {
  components: { Panel },
  data() {
    return {
      songs: null,
      songCount: 10,
      songCounts: [10, 50, 100]
    };
  },
  async mounted() {
    this.setSongs();
  },
  methods: {
    async setSongs() {
      let songs = await Songs.index(this.songCount);

      for (const song of songs) {
        song.editRoute = "/songs/" + song.id;
      }
      this.songs = songs;
    }
  }
};
</script>