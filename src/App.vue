<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify App</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(item, ndx ) in menuItems"
          :key="ndx"
          :to="item.path"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      sidebar: false,
      menuItems: [
        { title: 'Home', path: '/' },
        { title: 'Calories table', path: '/table' },
        { title: 'Modal', path: '/modal' },
     ],
     drawer: null
    }
  }
}
</script>

<style >

</style>
