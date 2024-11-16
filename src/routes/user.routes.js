import { Router } from 'express'
import {
    getAllUsers,
    getOneUserById,
    updateUser,
    deleteUser,
} from '../controllers/index.js'
export const userRouter = Router()
userRouter.get('/', getAllUsers)
userRouter.get('/:id', getOneUserById)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)
