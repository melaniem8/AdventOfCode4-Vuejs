<template>
  <nav>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list>
        <v-list-item v-for="site in sites" :key="site.title" :to="site.path"  link>
          <v-list-item-content>
            <v-list-item-title>{{ site.title }}</v-list-item-title>
          </v-list-item-content>
          <router-link :to="site.path"></router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <router-link to="/" class="v-toolbar__title" tag="div" style="cursor: pointer;">{{ title }}</router-link>
    </v-app-bar>
  </nav>
</template>

<script>
  export default {
    data: function() {
      return {
        drawer: true,
        title: 'Praktikum',
        path: '/',
        sites: [
          { title: 'Advent of Code', path: '/' }
        ]
      }
    },
    created () {
      this.$vuetify.theme.dark = true
    }
  }
</script>

<style>
  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    margin-top: 60px;
  }

  .footer {
    size: 10% !important;
  }

  .myStyle {
    font-family: bold;
  }
</style>
}