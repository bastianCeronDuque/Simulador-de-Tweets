<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm" />
  <TweetForm :showForm="showForm" />
  <!-- VAMOS A PASAR EL ESTADO SI ESTA ABIERTO O CERRADO -->
</template>

<script>
import Menu from './components/Menu'
import TweetForm from './components/TweetForm'
import useFormTweet from './hooks/useFormTweet.js'


export default {
  name: "App",
  components: {
    Menu,TweetForm
  },
  setup() {
    return{
      ...useFormTweet(),

      // AQUI RETORNAMOS NUESTRAS FUNCIONES QUE HEMOS IMPORTADO EN LA PARTE SUPERIOR Y ADEMAS UTILIZAMOS EL SPREAD OPERATOR RESTORNA UN OBJETO CON DOS FUNCIONES QUE ESTAN CONTENIDAS DENTRO DE USEFORMTWEET LOS ... EXPORTAN LO QUE ESTA DENTRO DE LA FUNCION ES COMO SI ESCRIBIERAMOS ESTO (showForm,openCloseForm,)
    }
  },
};
</script>

<style lang="scss"></style>
