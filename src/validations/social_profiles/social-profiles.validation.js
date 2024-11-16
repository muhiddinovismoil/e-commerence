import { z } from 'zod'
export const socialProfilesScheme = z.object({
    user_id: z.number().int(),
    platform: z.string().min(5),
    platform_user: z.string().min(5),
})
