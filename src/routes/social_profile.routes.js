import { Router } from 'express'
import {
    getAllProfiles,
    getProfileById,
    createProfile,
    updateProfile,
    deleteProfile,
} from '../controllers/index.js'
import { validateProfiles, authGuard, roleGuard } from '../middlewares/index.js'

export const socialProfileRouter = Router()

socialProfileRouter.get('/', authGuard, getAllProfiles)
socialProfileRouter.get('/:id', authGuard, getProfileById)
socialProfileRouter.post('/', authGuard, validateProfiles, createProfile)
socialProfileRouter.put(
    '/:id',
    authGuard,
    roleGuard('admin', 'manager'),
    updateProfile,
)
socialProfileRouter.delete(
    '/:id',
    authGuard,
    roleGuard('admin', 'manager'),
    deleteProfile,
)
