import axios from './axios';

export const registerRequest = async (user) => {
    try {
        const res = await axios.post(`/register`, user)
        return res
    } catch (error) {
        //console.log(error.response.data)
        return error.response.data
    }
}

export const loginRequest = async (user) => {
    try {
        const res = await axios.post(`/login`, user)
        console.log(res)
        return res
    } catch (error) {
        console.log("This is the response data", error.response.data)
        console.log(error)
        return error.response.data
    }
}

export const logoutRequest = async () => {
    try {
        const res = await axios.post('/logout')
        console.log(res)
    } catch (error) {
        console.log(error)
        return error.response.data
    }
}

export const verifyTokenRequest = () => axios.get('/verify')