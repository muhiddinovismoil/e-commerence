import { socialProfilesScheme } from '../schema/index.js'
export const validateProfiles = (req, res, next) => {
    try {
        const { error } = socialProfilesScheme.validate(req.body)
        if (error) {
            return res.status(400).json({ error: error.details[0].message })
        }
        next()
    } catch (error) {
        next(error)
    }
}
