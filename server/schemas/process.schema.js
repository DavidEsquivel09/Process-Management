import { z } from 'zod';

export const createProcessSchema = z.object({
    title: z.string({
        required_error: 'Title is required',
    }).min(3, { message: 'Title must be at least 3 characters long' }),

    startDate: z.string({
        required_error: 'Start date is required',
    }).refine(
        (date) => !isNaN(Date.parse(date)), 
        { message: 'Start date must be a valid date' }
    ),

    endDate: z.string({
        required_error: 'End date is required',
    }).refine(
        (date) => !isNaN(Date.parse(date)), 
        { message: 'End date must be a valid date' }
    ),

    details: z.string({
        required_error: 'Details is required',
    }).optional(),

    status: z.enum(['pendiente', 'en progreso', 'finalizado'], {
        required_error: 'Status is required',
    }),
});
