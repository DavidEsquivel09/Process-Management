import { z } from 'zod';

export const createOfferSchema = z.object({
    title: z.string({
        required_error: 'Title is required',
        min: 3
    }),
    location: z.string({
        required_error: 'Location is required',
        min: 3
    }),
    salary: z.number({
        required_error: 'Salary is required',
        invalid_type_error: 'Salary must be a number'
    }),
    details: z.string({
        required_error: 'Details is required',
    }).optional()
})