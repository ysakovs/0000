<template>
  <v-layout>
    <v-flex xs4>
      <Panel title="Song Meta Data">
        <v-card-text>
          <v-form>
            <v-text-field
              v-for="(field,index) in songMetaData"
              :key="index"
              v-model="field.data"
              :label="field.head"
              type="text"
            />
          </v-form>
        </v-card-text>
      </Panel>
    </v-flex>

    <v-flex xs8>
      <Panel title="Song Data">
        <v-textarea
          v-for="(field,index) in songData"
          :key="index"
          v-model="field.data"
          :label="field.head"
        />
      </Panel>
      <v-btn dark class="cyan" @click="create">Create Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from "@/components/Panel";
import Songs from "@/services/Songs";

export default {
  components: { Panel },
  data() {
    return {
      songMetaData: [
        { head: "Title", data: "" },
        { head: "Artist", data: "" },
        { head: "Genre", data: "" },
        { head: "Album", data: "" },
        { head: "Album Image URL", data: "" },
        { head: "Youtube Id", data: "" }
      ],
      songData: [
        { head: "Lyrics", data: "" },
        { head: "Tab", data: "" }
      ]
    };
  },
  methods: {
    create() {
      let song = {};
      let songArray = this.songMetaData
        .concat(this.songData)
        .map(x => Object.assign({}, x));

      songArray.forEach(element => {
        element.head = element.head.toLowerCase();
        var head = element.head.split("");
        var start = 0;
        for (var i = 0; i < head.length; i++) {
          if (head[i] !== " ") {
            var val = head[i];

            head[start] = val;
            ++start;
          } else head[i + 1] = head[i + 1].toUpperCase();
        }

        element.head = head.join("").substr(0, start);
      });

      for (const pair of songArray) song[pair.head] = pair.data;

      Songs.create(song);
      console.log(song);
    }
  }
};
</script>
