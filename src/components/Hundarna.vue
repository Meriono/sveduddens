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
            min-height="70vh"
            rounded="lg"
        >
          <v-card-text>
            <v-row>
              <v-col cols="4" align="center">
                <v-card flat>
                  <h1 class="my-2">Tikar</h1>
                  <v-row>
                    <v-col cols="6">
                      <p>
                        <v-img max-height="127px"
                               max-width="102px"
                               src="http://www.sveduddens.se/Hundarna/Gretaknapp.png"
                        >
                        </v-img>
                        Sveduddens Greta <br><br>
                        <v-img max-height="127px"
                               max-width="102px"
                               src="http://www.sveduddens.se/Hundarna/Kanelknapp.jpg"
                        >
                        </v-img>
                        Sveduddens Kanel<br><br>
                        <v-img max-height="127px"
                               max-width="102px"
                               src="http://www.sveduddens.se/Hundarna/Irmaknapp.png"
                        >
                        </v-img>
                        Sveduddens Irma
                      </p>
                    </v-col>
                    <v-col cols="6">
                      <p>
                        <v-img max-height="127px"
                               max-width="102px"
                               src="http://www.sveduddens.se/Hundarna/Tracyknapp.jpg"
                        >
                        </v-img>
                        Bonsai Tracy Chapman "Tracy"<br><br>
                        <v-img max-height="127px"
                               max-width="102px"
                               src="http://www.sveduddens.se/Hundarna/Qleoknapp.jpg"
                        >
                        </v-img>
                        Sveduddens Qleo
                      </p>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-col cols="4" align="center">
                <v-card flat>
                  <h1 class="my-2">Hanar</h1>
                  <p>
                    <v-img max-height="127px"
                           max-width="102px"
                           src="http://www.sveduddens.se/Hundarna/Dackeknapp.png"
                    >
                    </v-img>
                    Sveduddens Dacke<br><br>
                    <v-img max-height="127px"
                           max-width="102px"
                           src="http://www.sveduddens.se/Hundarna/Kungenknapp.jpg"
                    >
                    </v-img>
                    Ell-Ell´s Kingdom Come "Kungen"<br><br>
                    <v-img max-height="127px"
                           max-width="102px"
                           src="http://www.sveduddens.se/Hundarna/Uniq.png"
                    >
                    </v-img>
                    Sveduddens Uniq
                  </p>
                </v-card>
              </v-col>
              <v-col cols="4" align="center">
                <v-card flat color="#dcc7ac" class="py-2">
                  <h1 class="my-2">Pensionerade avelshundar</h1>
                  <v-row>
                    <v-col cols="6">
                      <p>
                      Bellagryn <br>
                      Hagnes <br>
                      "Tora"<br>
                      "Vilja"<br>
                      Jo-Jo<br>
                      Roxie<br>
                      Rutan<br>
                      Zafir<br>
                      Jason Norton<br>
                      Mozart<br>
                      "Jacke"<br>
                        Yrsa<br>
                      </p>
                    </v-col>
                    <v-col cols="6">
                      <p>
                        Mynta<br>
                        Ester<br>
                        "Otto"<br>
                        Demsey Thunder Truck<br>
                        Grymlinggryn<br>
                        "Presley"<br>
                        Harriet<br>
                        Zoe<br>
                        Tiger<br>
                        Åska
                      </p>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>

        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Hundarna"
}
</script>

<style scoped>

</style>