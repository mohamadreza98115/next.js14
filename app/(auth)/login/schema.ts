import {z} from 'zod'

const loginSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6).max(128),
    error: z.string().optional(),
});

export default loginSchema;