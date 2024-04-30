import axios from "axios";

const usersInstance = axios.create({
    baseURL: 'http://localhost:7000/api/users',
    withCredentials: true
})

export const offersInstance = axios.create({
    baseURL: 'http://localhost:7000/api',
    withCredentials: true
})

export default usersInstance