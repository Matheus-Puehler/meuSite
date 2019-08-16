<template>
    <v-container class="container">
        <h1>
            Outras habilidades
        </h1>
          <v-flex
          xs12
          text-xs-center
        >
          <v-spacer style="height:2vh;" />
          <center>
            <v-avatar
               color="light-grey"
               class="avatar"
                  size="20vw"
                   >
                  <img
                    src="https://scontent.fbfh4-1.fna.fbcdn.net/v/t1.0-9/53070209_245687689646058_2164515907747971072_n.jpg?_nc_cat=107&_nc_eui2=AeGshiCUhD4E95YhDy3NfoaQmHhfXxQtSS30HpClL4WjD8XzXpj0ID_dvpEbuelk9lXnVGKRwGyFLEs7AYVIszVSEc6XfxojFaz9MMKT1ZSVUw&_nc_oc=AQlSazBCEICCATgQtrYbeHIrKiqR3feQPiP9Pn_I9Edn3d6iTF5J48pVYWVFSMnLmoUZ55_IJyyrrglRwjU5L45F&_nc_ht=scontent.fbfh4-1.fna&oh=29864224722c0584fc20546b443e0e82&oe=5DC8C5C7"
                    alt=""
                  >
                </v-avatar>
                </center>
        </v-flex>

        <v-card class="container">
            <v-flex xs12 class="texto">
                <b>Edição de imagens e fotos: </b>
                Aprendi a mexer no Adobe Photoshop no início de 2017, desde então isso tem sido mais um hobbie,
                mas também isso foi útil para fazer imagens para softwares em geral, como as do meu TCC.
            </v-flex>
            <v-flex xs12 class="texto">
                <b>Edição de vídeo: </b>
                Ao longo do desenvolvimento do segundo desafio do processo seletivo da Bosch foi
                importante o saber da edição dentro do Vegas Pro.
            </v-flex>
            <v-flex xs12 class="texto">
                <b>Sistemas Operacionais e arquitetura de computadores: </b>
                Tenho diversos conhecimentos sobre a arquitetura de um sistema operacional, desde 
                a raiz até a parte de contato com o usuário. Assim como também entendo a arquitetura de 
                hardware de qualquer computador moderno.
            </v-flex>
            <v-flex xs12 class="texto">
                <b>Volêi: </b>
                Bom, eu adoro jogar volêi, geralmente jogo de levantador, assim consigo deixar a bola 
                na mão dos pontas. 

            </v-flex>
        </v-card>
    </v-container>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.avatar, .texto{
    padding-bottom: 30px;
}
.container{
    border-radius: 20px;
}


</style>