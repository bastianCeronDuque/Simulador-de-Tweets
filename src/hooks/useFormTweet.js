import { ref } from 'vue'
// para tener una variable una constante que este pendiente de cualquier cambio 
// PARA QUE SE LO NOTIFIQUE A LOS COMPONENTES PARA QUE CAMBIEN SUS VALORES

export default function useFormTweet () {
    const showForm = ref(false)

    const openCloseForm = () => {
        showForm.value = !showForm.value
        // AQUI LO QUE SE ESTA HACIENDO ES SETEAR Y/O CAMBIAR EL VALOR DE LA CONSTANTE SHOWFORM PARA QUE CAMBIE SU VALOR DE FALSE A TRUE
    }
    
    return {
        showForm,
        openCloseForm,
        // NOS DEVUELVE UNA CONSTANTE QUE NOS INDICA SI TIENE QUE ESTAR CERRADA O ABIERTA Y UNA FUNCION PARA ABRIRLO O CERRARLO
    }
}