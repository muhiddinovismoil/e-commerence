import { z } from 'zod'
export const categoriesSchema = z.object({
    name: z.string(),
    description: z.string(),
    tag: z.string(),
})
