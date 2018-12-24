<template>
  <v-app id="inspire" dark>
    <!--<v-navigation-drawer-->
    <!--v-model="drawer"-->
    <!--clipped-->
    <!--fixed-->
    <!--app-->
    <!--&gt;-->
    <!--<v-list dense>-->
    <!--<v-list-tile @click="">-->
    <!--<v-list-tile-action>-->
    <!--<v-icon>dashboard</v-icon>-->
    <!--</v-list-tile-action>-->
    <!--<v-list-tile-content>-->
    <!--<v-list-tile-title>Dashboard</v-list-tile-title>-->
    <!--</v-list-tile-content>-->
    <!--</v-list-tile>-->
    <!--<v-list-tile @click="">-->
    <!--<v-list-tile-action>-->
    <!--<v-icon>settings</v-icon>-->
    <!--</v-list-tile-action>-->
    <!--<v-list-tile-content>-->
    <!--<v-list-tile-title>Settings</v-list-tile-title>-->
    <!--</v-list-tile-content>-->
    <!--</v-list-tile>-->
    <!--</v-list>-->
    <!--</v-navigation-drawer>-->
    <v-toolbar app fixed clipped-left>
      <!--<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
      <v-toolbar-title>Card API App</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <o-grid></o-grid>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <p class="footer__copyright">&copy; Sean J Homer 2018</p>
    </v-footer>
  </v-app>
</template>

<script>
  import oGrid from './oGrid';

  export default {
    components: { oGrid },
    data: () => ({
      drawer: null,
    }),
    props: {
      source: String,
    },
  };
</script>

<style lang="scss">
  .footer__copyright {
    width: 100%;
    text-align: center;
    margin-top: 1.5rem;
  }
</style>
