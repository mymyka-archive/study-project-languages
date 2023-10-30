<template>
  <v-bottom-navigation>
    <v-btn value="recent">
      <router-link to="/">
        <v-icon>mdi-history</v-icon>
      </router-link>
    </v-btn>

    <v-btn value="favorites">
      <router-link to="/learn">
        <v-icon>mdi-heart</v-icon>
      </router-link>
    </v-btn>

    <v-btn value="favorites">
      <router-link to="/profile">
        <v-icon>mdi-map-marker</v-icon>
      </router-link>
    </v-btn>
  </v-bottom-navigation>
</template>
