<template>
    <v-container>
        <v-card
         flat
         color="rgba(255, 255, 255, 0.8)"
         class="rounded-card"
         style="border-radius:15px">
         <v-card
         
         >
            <v-card-text>
                <v-container>
                    <v-layout>
                        <v-layout wrap>
                            <v-layout row>
                                <v-flex
                                class="titulo">
                                    <h4>
                                        Colégio Erasto Gaertner
                                    </h4>
                                </v-flex>
                                 <v-flex text-xs-right>
                                <v-menu
                                  bottom
                                  center
                                 />
                               </v-flex>
                            </v-layout>
                            <v-flex xs12 class="texto">
                                <br>
                               1º Ano ensino fundamental ao 9º ano ensino fundamental.
                            </v-flex>
                            <v-flex xs12 class="texto">
                                <br>
                                Período: 2009-2016
                            </v-flex>
                            <v-flex xs12 class="texto">
                                <br>
                                Descrição: Educação menonita, com forte embasamento em raciocínio
                                lógico e também com estudos aprofundados em História e Geografia.
                            </v-flex>
                        </v-layout>
                    </v-layout>
                </v-container>
            </v-card-text>
            </v-card>
        </v-card>

            

           <v-card
         flat
         color="rgba(255, 255, 255, 0.8)"
         class="rounded-card"
         style="border-radius:15px">
         <v-card
         >
            <v-card-text>
                <v-container>
                    <v-layout>
                        <v-layout wrap>
                            <v-layout row>
                                <v-flex
                                class="titulo">
                                    <h4>
                                     Instituto Federal do Paraná - Campus Curitiba
                                    </h4>
                                </v-flex>
                                 <v-flex text-xs-right>
                                <v-menu
                                  bottom
                                  center
                                 />
                               </v-flex>
                            </v-layout>
                            <v-flex xs12 class="texto">
                                <br>
                              Curso técnico em Informática integrado ao Ensino Médio.
                            </v-flex>
                            <v-flex xs12 class="texto">
                                <br>
                                Período: 2017-2019
                            </v-flex>
                            <v-flex xs12 class="texto">
                                <br>
                                Descrição: Ao longo do ensino médio pude ter contato com diferentes realidades,
                                com muitas pessoas que se encontram em condição de vulnerabilidade social e moram 
                                em lugares muito afastados conheci várias situação ampliando meu espectro em relação 
                                a sociecidade.
                            
                            </v-flex>
                        </v-layout>
                    </v-layout>
                </v-container>
            </v-card-text>
            </v-card>
        </v-card>

        
           <v-card
         flat
         color="rgba(255, 255, 255, 0.8)"
         class="rounded-card"
         style="border-radius:15px">
         <v-card
         >
            <v-card-text>
                <v-container>
                    <v-layout>
                        <v-layout wrap>
                            <v-layout row>
                                <v-flex
                                class="titulo">
                                    <h4>
                                     CCAA Novo Mundo
                                    </h4>
                                </v-flex>
                                 <v-flex text-xs-right>
                                <v-menu
                                  bottom
                                  center
                                 />
                               </v-flex>
                            </v-layout>
                            <v-flex xs12 class="texto">
                                <br>
                             Curso de Inglês
                            </v-flex>
                            <v-flex xs12 class="texto">
                                <br>
                                Período: 2014-2019
                            </v-flex>
                            <v-flex xs12 class="texto">
                                <br>
                                Descrição: Fiz um curso de inglês que partia desde o básico até o nível de fluente,
                                ao final do curso realizei o TOEFL.
                            
                            </v-flex>
                        </v-layout>
                    </v-layout>
                </v-container>
            </v-card-text>
            
            </v-card>
              
      
        </v-card>
        
        <v-flex
        class="botao">
        <v-btn
              outline
              round
              color="#FFC00C"
              
              class="botao"
              @click="redirecionar('idiomas')"
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
    .titulo{
        font-size: 160%;
        color: black;
    }
    .texto{
        font-size: 120%;
        color: black;
    }
    .rounded-card{
        padding-top: 30px;
    
    }
    .botao{
        padding-top: 50px;
        padding-left: 1100px;
    }

</style>