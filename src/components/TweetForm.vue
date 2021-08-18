<template>
<!-- ESTA ES UNA CLASE DINAMICA  -->
<!-- {OPEN: SHOWFORM} QUIERE DECIR QUE CUANDO SHOWFORM SEA TRUE VAS A AÑADIRLE LA CLASE OPEN A ESTE DIV// NO IMPORTA SI TIENES UNA CLASE ESTATICA PORQUE ESTA VA A SER DINAMICA -->
  <div class="tweet-form container" :class="{open:showForm}">

      <form @submit.prevent="sendTweet">
          <input class="form-control" placeholder="Tu Nombre" v-model="username">
          <textarea class="form-control" rows="3" placeholder="Escribe tu tweet" v-model="tweet"></textarea>
          <button type="submit" class="btn btn-primary">
              Enviar Tweet
          </button>
      </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { saveTweetApi } from "../api/tweet";
export default {
    props: {
        showForm: Boolean,
        // TENEMOS QUE RECUPERAR ESE PROP QUE NOS LLEGA PARA ELLO LO PONEMOS EN LA SECCION DE EXPORT DEFAULT Y  OBTENEMOS ESE SHOWFORM
    },
    setup(){
        let username = ref('')
        let tweet = ref('')
        const sendTweet = () => {
           saveTweetApi(tweet.value, username.value)


        }
        return{
            sendTweet, username, tweet
        }
    }
}
</script>

<style lang='scss' scoped>
.tweet-form {
    margin-top: 20px;
    height: 0px;
    overflow: hidden;

    &.open{
        height: auto;
        // & lo que hace es continuar con la clase padre
    }


    form{
        margin-bottom: 50px;

        input{
            margin-bottom: 0px;
        }
        button{
            width: 100%;
            margin-top: 10px;
        }
    }
}
</style>