import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'

export const authRequired = (req, res, next) => {

    // Get the token from the cookies
    const { token } = req.cookies // Is the same as const token = req.cookies.token

    // If there is no token, return an error
    if(!token) return res.status(401).json({ message: "Unauthorized, no token" })

    // Some people call the second parameter as "decoded"
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(401).json({ message: "Unauthorized, invalid token" })
        req.user = user
    })
    next()
}