import { Router } from 'express'
import {
    getAllUsers,
    getOneUserById,
    updateUser,
    deleteUser,
} from '../controllers/index.js'
import { authGuard, roleGuard } from '../middlewares/index.js'
export const userRouter = Router()
userRouter.get('/', authGuard, getAllUsers)
userRouter.get('/:id', authGuard, getOneUserById)
userRouter.put('/:id', authGuard, roleGuard('admin', 'moderator'), updateUser)
userRouter.delete(
    '/:id',
    authGuard,
    roleGuard('admin', 'moderator'),
    deleteUser,
)
