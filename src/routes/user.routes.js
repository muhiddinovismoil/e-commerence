import { Router } from 'express'
import {
    getAllUsers,
    getOneUserById,
    createUser,
    updateUser,
    deleteUser,
} from '../controllers/index.js'
import { validateUser } from '../middlewares/index.js'

export const userRouter = Router()
userRouter.get('/', getAllUsers)
userRouter.get('/:id', getOneUserById)
userRouter.post('/', validateUser, createUser)
userRouter.put('/:id', validateUser, updateUser)
userRouter.delete('/:id', deleteUser)
