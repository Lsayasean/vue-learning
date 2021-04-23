<template>
  <div id="app">
    <v-toolbar width="80%" class="mx-auto">
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          Rando quotes
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          text
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      sidebar: false,
      menuItems: [
          { title: 'All Quotes', path: '/quote/all' },
     ]
    }
  }
}
</script>

<style >
body{
  width: 100%;
  height: 100vh;
}

</style>
