<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-list-item>
          <v-list-item-subtitle align="center">Annika Norrthon<br>
            <v-icon x-small>mdi-phone</v-icon>
            +46 730 650 921
          </v-list-item-subtitle>
        </v-list-item>
        <v-sheet rounded="lg">
          <v-list color="transparent">
            <v-list-item
                v-for="n in 5"
                :key="n"
                link
            >
              <v-list-item-content>
                <v-list-item-title>
                  <v-avatar
                      class="mr-10"
                      color="#dcc7ac"
                      size="32"
                  >
                    <v-icon>mdi-dog</v-icon>
                  </v-avatar>
                  {{ n }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item link href="https://github.com/Meriono" target="_blank">
              <v-list-item-subtitle align="center">
                <v-icon small>mdi-copyright</v-icon>
                Hanna Edlund<br>
                <v-icon small>mdi-github</v-icon>
                Min GitHub<br>
                2020
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet
            max-height="70vh"
            rounded="lg"
        >
          <v-container>
            <v-card
                max-height="65vh"
                class="overflow-y-auto"
                flat
            >
              <v-container
                  class="bigbox"
              >
                <v-fade-transition mode="out-in">
                  <v-row>
                    <v-col
                        v-for="n in 24"
                        :key="n"
                        cols="4">
                      <v-card>
                        <v-img
                            src="https://picsum.photos/350/165?random"
                            max-height="165"
                            contain
                            class="transparent"
                        ></v-img>
                        <v-card-title class="title">
                          TITLE
                        </v-card-title>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-fade-transition>
              </v-container>

            </v-card>

          </v-container>


        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Galleri"
}
</script>

<style scoped>
.bigbox {
  padding-top: 0px !important;
}

::-webkit-scrollbar {
  width: 3px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}
.title{
  padding-top: 2px !important;
  padding-bottom: 2px !important;
  font-size: medium !important;
}

</style>