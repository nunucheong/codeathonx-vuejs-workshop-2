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
        <v-icon>add</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          thumbnail: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          headline: "Top 10 Australian beaches",
          channel: "Mother Earth",
          uploadDate: "12 Jan 2019"
        },
        {
          thumbnail: "https://picsum.photos/200/300/?image=1012",
          headline: "Unsplash Issue 12/4/2019",
          channel: "Unsplash",
          uploadDate: "12 April 2019"
        }
      ]
    };
  }
};
</script>

<style scoped>
.video-container {
  margin: 10px;
}
</style>
