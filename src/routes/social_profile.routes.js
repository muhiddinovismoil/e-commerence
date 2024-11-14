import { Router } from 'express'
import {
    getAllProfiles,
    getProfileById,
    createProfile,
    updateProfile,
    deleteProfile,
} from '../controllers/index.js'
import { validateProfiles } from '../middlewares/index.js'

export const socialProfileRouter = Router()

socialProfileRouter.get('/', getAllProfiles)
socialProfileRouter.get('/:id', getProfileById)
socialProfileRouter.post('/', validateProfiles, createProfile)
socialProfileRouter.put('/:id', validateProfiles, updateProfile)
socialProfileRouter.delete('/:id', deleteProfile)
