<template>
  <Panel title="Songs">
    <v-btn to="/songs/create" fab small right absolute slot="toolbar">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <div v-for="song in songs" :key="song.id">
      <div>{{song.title}}</div>
      <div>{{song.artist}}</div>
      <div>
        <img :src="song.albumImageUrl" />
      </div>
      <v-btn :to="song.editRoute" right outlined color="dark">Edit Song</v-btn>
    </div>
  </Panel>
</template>

<script>
import Panel from "@/components/Panel";
import Songs from "@/services/Songs";

export default {
  components: { Panel },
  data() {
    return {
      songs: null
    };
  },
  async mounted() {
    let songs = await Songs.index();

    for (const song of songs) {
      song.editRoute = "/songs/" + song.id;
    }
    this.songs = songs;
  }
};
</script>