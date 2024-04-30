import { z } from 'zod';

export const registerSchema = z.object({
    firstName: z.string({
        required_error: 'First name is required',
    }).min(3, { message: 'First Name must be at least 6 characters long'}),
    email: z.string({
        required_error: 'Email is required',
    }).email({
        email_error: 'Invalid email address'
    }),
    password: z.string({
        required_error: 'Password is required',
    }).min(6, { message: 'Password must be at least 6 characters long'})
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email is required',
    }).email({
        email_error: 'Invalid email address'
    }),
    password: z.string({
        required_error: 'Password is required',
    }).min(6, { message: 'Password must be at least 6 characters long'})
}) 