import axios from "axios"

const instance = axios.create({
    baseURL : 'https://lf-market-default-rtdb.firebaseio.com/'
})

export default instance