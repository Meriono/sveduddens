<template>
  <v-app id="inspire">
    <v-app-bar
        app
        color="white"
        flat
    >
      <h1 class="brown--text text--lighten-2">Sveduddens kennel</h1>
      <v-container>


        <v-tabs grow color="#b58950" height="64px">
          <v-avatar
            color="#dcc7ac"
            size="32"
            class="mr-2 mt-4"
        >
          <v-icon>mdi-dog</v-icon>
        </v-avatar>
          <v-tab
              v-for="link in links"
              :key="link"
              text>
            {{ link }}
          </v-tab>
        </v-tabs>

      </v-container>
    </v-app-bar>

    <v-main class="background">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-list-item>
              <v-list-item-subtitle align="center">Annika Norrthon<br>
                <v-icon x-small>mdi-phone</v-icon> +46 730 650921
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

                <v-list-item
                    link
                    color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item link href="https://github.com/Meriono" target="_blank">
                    <v-list-item-subtitle align="center"><v-icon small>mdi-copyright</v-icon> Hanna Edlund<br>
                      <v-icon small>mdi-github</v-icon> Min GitHub
                    </v-list-item-subtitle>
                  </v-list-item>
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
                  <h1 class="my-2">Välkommen!</h1>
                  <p>FCI och SKK-registrerad uppfödare av Jack Russell Terrier sen 2001. Sveduddens Kennel finns 6 mil nordost om Stockholm.<br><br>

                    Över 50 HP belönade uppfödargrupper!</p>
                </v-card-text>

            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      'Start',
      'News',
      'Sveduddens Kennel',
      'Hundarna',
      'Valpar',
      'Champions',
      'Galleri',
      'Kontakt',
      'Länkar'
    ],
  }),
}
</script>
<style>
.background{
  background-color: #ebdfd0;
}
</style>