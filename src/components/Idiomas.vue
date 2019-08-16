<template>
  <v-container>
    <v-card class="card">
      <v-card-text>
        <v-flex
          xs12
          text-xs-center
          class="sobre"
        >
          Idiomas
        </v-flex>
      </v-card-text>
      
      <v-card-text>
        <v-layout row>
            <center>
          <v-flex
              xs4
              class="nome"
            >
              Inglês
              
            </v-flex>
            </center>
            
          <v-flex
           text-xs-center
          > 
          <center>
            
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2000px-Flag_of_the_United_States.svg.png"
                alt="avatar"
                width="300"
              >
            
            </center>
          </v-flex>                
          <v-layout column>
              
            
        
            <v-flex xs12 class="texto">
                
              Fiz 5 anos de curso, mas onde se realmente aprende é na prática, usando no dia-a-dia na compreeensão de 
              textos, aúdios, série e filmes. O inglês tem extrema importância para mim por a maioria do 
              conteúdo relacionado a informática e física estar em inglês. Assim pude alcançar a fluência.

            </v-flex>
          </v-layout>
        </v-layout>
      </v-card-text>
      <v-divider />
      <v-card-text>
            <v-layout row>
            <center>
          <v-flex
              xs4
              class="nome"
            >
              Francês
              
            </v-flex>
            </center>
            
          <v-flex
           text-xs-center
          > 
          <center>
            
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAFVBMVEX///8AI5XtKTkAFJJ6gbrzg4ntHTC7o1gDAAAA/klEQVR4nO3QSQ0AIAADsHH6l4yKPUhaCc2oWTs9586aOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHy4ckD5KrN4eD2boIAAAAASUVORK5CYII="
                alt="avatar"
                width="300"
              >
            
            </center>
          </v-flex>                
          <v-layout column>
              
            
        
            <v-flex xs12 class="texto">
                No começo de 2018 fui conteplado com uma bolsa de 50% na Aliança Francesa, assim 
                tive a oportunidade de aprender o básico da língua, mesmo com o término da bolsa no meio do mesmo 
                ano, continuei praticando desde então.    
            
            </v-flex>
          </v-layout>
        </v-layout>
         
        </v-card-text>
      <v-divider />
       <v-card-text>
            <v-layout row>
            <center>
          <v-flex
              xs4
              class="nome"
            >
              Alemão
              
            </v-flex>
            </center>
            
          <v-flex
           text-xs-center
          > 
          <center>
            
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/290px-Flag_of_Germany.svg.png"
                alt="avatar"
                width="300"
              >
            
            </center>
          </v-flex>                
          <v-layout column>
              
            
        
            <v-flex xs12 class="texto">
                Por minha antiga escola ser de origem alemã, tive aulas 
                de alemão básico desde quando entrei, em 2009, porém ao sair do Erasto Gaertner nunca voltei
                a praticar, por isso continuo sabendo apenas o básico.   
            
            </v-flex>
          </v-layout>
        </v-layout>
         
        </v-card-text>
      
    </v-card>
    <v-flex
        class="botao">
        <v-btn
              outline
              round
              color="#FFC00C"
              
              class="botao"
              @click="redirecionar('habilidades')"
            >
              Continuar
            </v-btn>
            </v-flex>


  </v-container>
</template>
<script>
export default {
  methods:{
    redirecionar(url){
      this.$router.push(url)
    }
  }
}
</script>

<style lang="scss" scoped>
    .nome{
        font-size: 25px;
        color: black;
        
    }
    .sobre{
        font-size: 30px;
        padding-bottom: 30px;
        color: black;
                
    }
    .card{
        border-radius: 25px;
        background-color: rgba(255, 255, 255, 0.6);
    }
    .avatar{
        text-align: center
        
    }
    .texto{
        color: black;
        font-size: 119%;
        padding-top: 20px;
        padding-bottom: 20px; 
        padding-right: 100px;
        padding-left: 100px;
    }
    .botao{
        padding-top: 50px;
        padding-left: 1100px;
    }
    
</style>
