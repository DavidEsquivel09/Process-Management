import User from "../models/user.model.js"
import { createAccessToken } from "../libs/jwt.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { TOKEN_SECRET } from "../config.js"

export const register = async (req, res) => {

    const { firstName, email, password } = req.body 

    try {

        const userFound = await User.findOne({ email })
        if(userFound) return res.status(400).json([ 'The email already exists' ])

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({ firstName, email, password: hashedPassword })
        const userSaved = await newUser.save()

        const token = await createAccessToken({ id: userSaved._id })

        res.cookie('token', token)
        res.status(200)
        res.json({
            id: userSaved._id,
            firstName: userSaved.firstName,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        })

    } catch (error) {

        res.status(500).json({ message: error.message })

    }
} 

export const login = async (req, res) => {

    const { email, password } = req.body 

    try {

        const userFound = await User.findOne({ email })

        if(!userFound) return res.status(400).json([ "User not found" ])

        const isMatch = await bcrypt.compare(password, userFound.password)

        if(!isMatch) return res.status(400).json([ "Invalid credentials" ])

        const token = await createAccessToken({ id: userFound._id })

        res.cookie("token", token, {
            sameSite: 'none',
            secure: true
        })
        res.status(200)
        res.json({
            id: userFound._id,
            firstName: userFound.firstName,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        })

    } catch (error) {

        res.status(500).json({ message: error.message })

    }
}

export const logout = (req, res) => {

    res.cookie("token", "", { expires: new Date(0) })
    return res.status(200).json({ message: "Logged out" })
}

export const profile = async (req, res) => {

    const userFound = await User.findById(req.user.id)

    if(!userFound) return res.status(400).json({ message: "User not found" })
    return res.json({
        id: userFound._id,
        firstName: userFound.firstName,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    })
}

export const verifyToken = async (req,res) => {

    const { token } = req.cookies

    if (!token) return res.status(401).json({ message: "Unauthorized" })

    jwt.verify(token, TOKEN_SECRET, async ( err, user) => {
        if (err) return res.status(401).json({ message: "Unauthorized" })

        const userFound = await User.findById(user.id)
        if (!userFound) return res.status(401).json({ message: "unauthorized" })

        return res.json({
            id: userFound._id,
            firstName: userFound.firstName,
            email: userFound.email
        })
    })
}