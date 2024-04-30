import { createContext, useState, useContext, useEffect } from 'react'
import { registerRequest, loginRequest, logoutRequest } from '../api/user'
import Cookies from 'js-cookie'
import { verifyTokenRequest } from '../api/user'

export const UserContext = createContext()

export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUser must be used within a UserProvider')
    }
    return context
}

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isLogedIn, setIsLogedIn] = useState(false)
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(true)

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res)
            console.log(res.status)
            if (res.status === 200) {
                setUser(res.data)
                setIsLogedIn(true)
            } else {
                setErrors([res, ...errors])
            }
        } catch (error) {
            //console.log(error.response.data);
            setErrors(error.response.data)
        }
        console.log(errors)
    };

    const singin = async (user) => {
        try {
            const res = await loginRequest(user)
            if (res.status === 200) {
                setUser(res.data)
                setIsLogedIn(true)
            } else {
                console.log("Testing", res)
                setErrors(res)
                console.log(errors)
            }
        } catch (error) {
            //console.log("These are the errors", error.response.data);
            setErrors([...errors, error.response.data])
        }
    };

    const logout = async () => {
        try {
            const res = await logoutRequest()
            setIsLogedIn(false)
            setUser(null)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        async function checkLogin() {

            const cookies = Cookies.get()

            if (cookies.token) {

                try {
                    const res = await verifyTokenRequest(cookies.token)
                    console.log(res)
                    if (!res.data) {
                        setIsLogedIn(false)
                        setUser(null)
                        setLoading(false)
                        return
                    }

                    setIsLogedIn(true)
                    setUser(res.data)
                    setLoading(false)

                } catch (error) {
                    setIsLogedIn(false)
                    setUser(null)
                }
            }
        }
        checkLogin()
    }, [])

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    return (
        <UserContext.Provider value={{ signup, singin, logout, user, isLogedIn, errors, loading }}>
            {children}
        </UserContext.Provider>
    )
}