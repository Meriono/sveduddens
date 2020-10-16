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
                  <p>
                    <v-icon large>mdi-home</v-icon>
                    <br>
                    Sveduddens Kennel<br>
                    Annika Norrthon<br>
                    Sveden, Havsjövägen 31<br>
                    761 12 BERGSHAMRA<br>
                  </p>
                </v-card>
              </v-col>
              <v-col cols="4" align="center">
                <v-card flat>
                  <p>
                    <v-icon large>mdi-phone</v-icon>
                    <br>
                    0730-650921<br>
                    +46 730-650921<br>
                  </p>
                </v-card>
              </v-col>
              <v-col cols="4" align="center">
                <v-card flat>
                  <p>
                    <v-icon large>mdi-email</v-icon>
                    <br>
                    sveduddens@telia.com
                  </p>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" align="center">
                <v-img max-height="168px"
                       max-width="181px"
                       src="http://www.sveduddens.se/Kontakt/maila.jpg"
                >
                </v-img>
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
  name: "Kontakt"
}
</script>

<style scoped>

</style>