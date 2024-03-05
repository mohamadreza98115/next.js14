import {z} from 'zod'

const userSchema = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6).max(120)
})

export default userSchema;