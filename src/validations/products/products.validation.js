import { z } from 'zod'
export const productsSchema = z.object({
    category_id: z.number().int(),
    title: z.string().min(6),
    picture: z.string().optional(),
    summary: z.string().min(5),
    description: z.string(),
    price: z.number(),
    discount_type: z.string().optional(),
    discount_value: z.number().optional(),
    tags: z.string(),
})
