<template>
  <main class="main">
    <div class="imagem elevation-0">
      <v-layout column align-center justify-center style="height:500px; background-color:#16213070">
        <v-card-text>
          <v-flex
            class="titulo fadeIn"
            text-xs-center
          >
            
          </v-flex>
          <v-flex
            class="slogan fadeIn"
            text-xs-center
          >
            Descubra um pouco mais sobre mim
          </v-flex>
          <v-flex
            xs12
            text-xs-center
            style="margin-top:50px;"
          >
            <v-btn
              outline
              round
              color="#FFC00C"
              @click="redirecionar('competencias')"
            >
              Vamos começar!
            </v-btn>
          </v-flex>
        </v-card-text>
      </v-layout> 
    </div>
    <v-card color="#EFEFEF">
      <v-card-text>
       
          
         <v-flex
          xs12
          text-xs-center
          class="como-funciona fadeIn"
        >
          Valores
        </v-flex>

      </v-card-text>
      <v-card class="elevation-0" color="#EFEFEF">
        <v-card-text>
          <v-layout row justify-space-between style="padding: 20px;">
            <v-card class="etapa elevation-3">
              <v-flex
                xs12
                text-xs-center
              >
              <i class="far fa-comments"/>
                
              </v-flex>
              
              <v-flex
                class="titulo-etapa fadeIn"
                xs12
                text-xs-center
              >
                DIÁLOGO
              </v-flex>
                <v-divider />
              <v-card-text>
                <v-flex
                  xs12
                  text-xs-center
                  class=""
                >
                  Acredito que através do dialgo qualquer problema pode ser resolvido
                </v-flex>
              </v-card-text>
            </v-card>

            <v-card class="etapa elevation-3">
              <v-flex
                xs12
                text-xs-center
              >
              <i class="far fa-handshake"></i>
              </v-flex>
              <v-flex
                class="titulo-etapa fadeIn"
                xs12
                text-xs-center
              >
                Respeito
              </v-flex>
                <v-divider />
              <v-card-text>
                <v-flex
                  xs12
                  text-xs-center
                  class=""
                >
                  Aceitar qualquer ser humano, independente de qual seja sua origem, jeito, personalidade ou opinião.
                </v-flex>
              </v-card-text>
            </v-card>

            <v-card class="etapa elevation-3">
              <v-flex
                xs12
                text-xs-center
              >
                <i class="fas fa-university"></i>
              </v-flex>
              <v-flex
                class="titulo-etapa fadeIn"
                xs12
                text-xs-center
              >
                Estudo
              </v-flex>
                <v-divider />
              <v-card-text>
                <v-flex
                  xs12
                  text-xs-center
                  class=""
                >
                  Creio que a ignorância é a maior fraqueza do ser humano.
                </v-flex>
              </v-card-text>
            </v-card>

            <v-card class="etapa elevation-3">
              <v-flex
                xs12
                text-xs-center
              >
                <i class="fas fa-check"/>
              </v-flex>
              <v-flex
                class="titulo-etapa fadeIn"
                xs12
                text-xs-center
              >
              Compromisso
              </v-flex>
                <v-divider />
              <v-card-text>
                <v-flex
                  xs12
                  text-xs-center
                  class=""
                >
                Se for para fazer algo, tento sempre fazer da forma mais eficiente e mais bem feita

                  
                </v-flex>
              </v-card-text>
            </v-card>
          </v-layout>
        </v-card-text>
      </v-card>
      <v-layout row align-center style="padding-bottom: 50px;">
        <v-flex
          xs12
          text-xs-center
        >
        </v-flex>
      </v-layout>
    </v-card>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        
      }
   },
   methods:{
     redirecionar(url){
       this.$router.push(url)
     }
   }
}
</script>

<style lang="scss" scoped>
  .main{
    width: 100%;
  }
  .imagem{
    height: 500px;
    background-image: url(https://www.africarising.tv/wp-content/uploads/2017/03/African-stock-video-of-a-white-caucasian-photographer-or-graphic-designer-working-on-his-laptop.jpg);
    background-attachment: fixed; 
    background-position: center 0px;
    background-size: 100vw 700px;
  }
  .titulo{
    font-family: 'Open Sans', 'sans-serif';
    font-weight: 600;
    font-size: 50px;
    text-shadow: -3px 3px 3px #000000d0;
    color: #FFF;
  }
  .slogan{
    font-family:'Raleway', 'sans-serif';
    font-size: 25px;
    color: #FFF;
    font-weight: lighter;
    text-shadow: -3px 3px 3px #000000d0;

  }
  .como-funciona{
    color: #000;
    padding-top: 15px;
    font-family: 'Ranga', 'sans-serif';
    font-size: 40px;
  }
  .etapa{
    height: auto;
    width: 22%;
    border-radius: 10px;
    padding: 15px;
    background-color: #FFFFFF;
  }
  .titulo-etapa{
    padding: 5px 15px 0px 15px;
    font-weight: bold;
    color: #575757;
  }
  .fas, .far{
    font-size: 50px;
    color: #1976D2;
  }
</style>

<style lang="scss" scoped>
  .fadeIn{
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari and Chrome */
    -o-animation: fadein 2s; /* Opera */
  }

  @keyframes fadein {
    from {
      opacity:0;
    }
    to {
      opacity:1;
    }
  }
  @-moz-keyframes fadein { /* Firefox */
    from {
      opacity:0;
    }
    to {
      opacity:1;
    }
  }
  @-webkit-keyframes fadein { /* Safari and Chrome */
    from {
      opacity:0;
    }
    to {
      opacity:1;
    }
  }
  @-o-keyframes fadein { /* Opera */
    from {
      opacity:0;
    }
    to {
      opacity: 1;
    }
  }
</style>