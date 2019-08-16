<template>
   <v-app id="app">
    
    <header-app />
    <router-view />
  </v-app>
  
</template>

<script>
import HeaderApp from './components/Header'

export default {
  name: 'App',
  components: {
    HeaderApp
  },
  data: () => ({
    //
  }),
};
</script>
