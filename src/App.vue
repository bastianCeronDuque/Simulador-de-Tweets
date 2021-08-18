<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm" />
  <TweetForm
    :showForm="showForm"
    :openCloseForm="openCloseForm"
    :reloadTweets="reloadTweets"
  />
  <!-- VAMOS A PASAR EL ESTADO SI ESTA ABIERTO O CERRADO -->
  <TweetList :tweets="tweets" />
</template>z

<script>
import { ref } from "vue";
import Menu from "./components/Menu";
import TweetForm from "./components/TweetForm";
import TweetList from "./components/TweetList.vue";
import useFormTweet from "./hooks/useFormTweet.js";
import { getTweetsApi } from "./api/tweet";
export default {
  name: "App",
  components: {
    Menu,
    TweetForm,
    TweetList,
  },
  setup() {
    let tweets = ref(getTweetsApi().reverse());

    const reloadTweets = () => {
      tweets.value = getTweetsApi().reverse();
    };
    return {
      ...useFormTweet(),
      tweets,
      reloadTweets,

      // AQUI RETORNAMOS NUESTRAS FUNCIONES QUE HEMOS IMPORTADO EN LA PARTE SUPERIOR Y ADEMAS UTILIZAMOS EL SPREAD OPERATOR RESTORNA UN OBJETO CON DOS FUNCIONES QUE ESTAN CONTENIDAS DENTRO DE USEFORMTWEET LOS ... EXPORTAN LO QUE ESTA DENTRO DE LA FUNCION ES COMO SI ESCRIBIERAMOS ESTO (showForm,openCloseForm,)
    };
  },
};
</script>

<style lang="scss"></style>
