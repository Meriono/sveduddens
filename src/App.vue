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
              :to="link.to"
              text>
            {{ link.name }}
          </v-tab>
        </v-tabs>

      </v-container>
    </v-app-bar>

    <v-main class="background">
      <RouterView/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  data: () => ({
    links: [
      {
        name: "Start",
        to: "/"
      },
      {
        name: "News",
        to: "/news"
      },
      {
        name: "Sveduddens Kennel",
        to: "/sveduddensKennel"
      },
      {
        name: "Hundarna",
        to: "/hundarna"
      },
      {
        name: "Valpar",
        to: "/valpar"
      },
      {
        name: "Champions",
        to: "/champions"
      },
      {
        name: "Galleri",
        to: "/galleri"
      },
      {
        name: "Kontakt",
        to: "/kontakt"
      },
      {
        name: "Länkar",
        to: "/lankar"
      },
    ],
  }),

}
</script>
<style>
.background {
  background-color: #ebdfd0;
}
</style>