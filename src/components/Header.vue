<template>
  <v-toolbar
    dark
    class="header"
    color="#162130"
    height="75"
    
    
  >
    <v-toolbar-title class="white--text">
      <router-link to="/">
        <div class="divLogo">
          <img
            class="logo"
            src="../assets/logo site.png"
            alt="Logo"
          >
        </div>
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        flat
         color="#162130"
        @click="redirect('competencias')"
      >
        Competências
      </v-btn>
          <v-btn
        flat
         color="#162130"
        @click="redirect('formacao')"
      >
        Formação
      </v-btn>
      <v-btn
        flat
         color="#162130"
        @click="redirect('idiomas')"
      >
        Idiomas
      </v-btn>
      <v-btn
       color="#162130"
        flat
        @click="redirect('habilidades')"
      >
        Outras habilidades
      </v-btn>
      
    </v-toolbar-items>

    <v-spacer />

    <v-layout
      row
      align-center
      style="max-width:400px"
    >
     
    </v-layout>
    <template style="margin-left:25px">
      <div class="text-xs-center">
        <v-menu
          v-model="menu"
          transition="slide-y-transition"
          :close-on-content-click="false"
          :nudge-width="200"
          offset-y
        >
        </v-menu>
      </div>
    </template>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    redirect (rota){
      this.$router.push(rota)
    }
  }
  
    
}
</script>

<style lang="scss" scoped>
a{
  color: #ffff;
  text-decoration: none;
}
.divLogo{
  padding-top: 5px;
  justify-content: center;
  height: 100%;
  width: 160px;
  color: #202d3f;
}
.logo:hover{
  transition: ease 0.2s;
  margin: -3px -3px;
  width: 161px;
  height: 61px;
}
.logo{
  transition: ease 0.2s;
  width: 160px;
  height: 65px;
}

</style>
