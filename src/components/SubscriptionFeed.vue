<template>
  <v-container fill-height>
    <v-layout justify-center align-center>
      <v-flex xs12>
        <v-container grid-list-12 fluid>
          <v-layout row wrap>
            <v-flex xl3 lg4 md6 xs12 v-for="(v, i) in videos" :key="i">
              <v-card class="video-container">
                <v-img class="white--text" height="200px" :src="v.thumbnail">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline">{{ v.headline }}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div>
                    <span class="grey--text">{{ v.uploadDate }}</span>
                    <br>
                    <span>{{ v.channel }}</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red">Watch</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-btn fixed dark fab bottom right color="red">
        <v-icon @click="showDialog">add</v-icon>
      </v-btn>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field v-model="headline" label="Headline*" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field v-model="thumbnailUrl" label="Thumbnail Url*" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field v-model="channel" label="Channel Name*" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="date"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date"
                        label="Picker in menu"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="uploadVideo">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from '../Firebase';

export default {
  data() {
    return {
      videos: [],
      dialog: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      thumbnailUrl: "",
      channel: "",
      headline: "",
      ref: firebase.firestore().collection('video')
    };
  },
  created() {
    this.ref.onSnapshot((querySnapshot) => {
      this.videos = [];
      querySnapshot.forEach((doc) => {
        const videoData = doc.data();
        this.videos.push({
          id: doc.id,
          thumbnail: videoData.thumbnail,
          headline: videoData.headline,
          channel: videoData.channel,
          uploadDate: videoData.uploadDate
        });
      });
    });
  },
  methods: {
    showDialog() {
      this.dialog = true;
    },
    uploadVideo() {
      this.ref.add({
        headline: this.headline,
        thumbnail: this.thumbnailUrl,
        channel: this.channel,
        uploadDate: this.date
      }).then((docRef) => {
      this.headline = "";
      this.thumbnailUrl = "";
      this.channel = "";
      this.date = new Date().toISOString().substr(0, 10);
      this.dialog = false;
      }).catch((error) => {
        alert("Error adding video: ", error);
      });;
    }
  }
};
</script>

<style scoped>
.video-container {
  margin: 10px;
}
</style>
