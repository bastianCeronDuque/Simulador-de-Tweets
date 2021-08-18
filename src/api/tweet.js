import { v4 as uuidv4 } from "uuid";
// importamos lodash
import { size } from 'lodash'
import { TWEETS } from "../utils/constants"

export function saveTweetApi(tweet, username) {
    const tweets = getTweetsApi()
    // si no hay ningun elemento es el perimer tweet
    // utilizamos la funcion que hemos llamado desde lodash que es size que reemplaza a IF (TWEETS === 0)
    if (size(tweets) === 0) {

        // creacion de un array donde dentro va a tener los valores de ese primer tweet
        const tweetTemp = [
            {
                id: uuidv4(),
                tweet,
                username,
                createdAt: new Date()
            },
        ]
        localStorage.setItem(TWEETS, JSON.stringify(tweetTemp))
        // si nuestro local storage tiene elementos entonces....

    } else {
        // tomamos los tweets pusheamos el nuevo
        tweets.push({
            id: uuidv4(),
            tweet,
            username,
            createdAt: new Date()
        })
        // luego actuaizamos la key del array de los objetos 
        localStorage.setItem(TWEETS, JSON.stringify(tweets))
    }
}
// funcion para obtener el array de tweets
export function getTweetsApi() {
    const tweets = localStorage.getItem(TWEETS)
    if (tweets) {
        return JSON.parse(tweets)
    }
    return []
}