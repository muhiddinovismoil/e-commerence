import { z } from 'zod'
export const addressSchema = z.object({
    user_id: z.number().int(),
    title: z.string().min(5),
    address_line_1: z.string(),
    address_line_2: z.string(),
    country: z.string(),
    city: z.string(),
    postal_code: z.string(),
    phone_number: z.string().regex(/^\+998\d{9}$/, {
        message: 'Phone number must be like +998XXXXXXX',
    }),
})
