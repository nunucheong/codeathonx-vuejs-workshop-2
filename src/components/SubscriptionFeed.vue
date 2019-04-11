<template>
  <v-container fill-height>
    <v-layout justify-center align-center>
      <v-flex xs12>
        <v-container grid-list-12 fluid>
          <v-layout row wrap>
            <v-flex xl3 lg4 md6 xs12 v-for="v in videos" :key="v">
              <v-card class="video-container">
                <v-img
                  class="white--text"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline">Top 10 Australian beaches</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div>
                    <span class="grey--text">Number 10</span>
                    <br>
                    <span>Whitehaven Beach</span>
                    <br>
                    <span>Whitsunday Island, Whitsunday Islands</span>
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
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      videos: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  }
};
</script>

<style scoped>
.video-container {
  margin: 10px;
}
</style>
