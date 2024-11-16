import { Router } from 'express'
import {
    loginUserController,
    refreshAccessTokenController,
    registerController,
} from '../controllers/index.js'
import { validateUser } from '../middlewares/index.js'
export const authRouter = Router()
authRouter.post('/register', validateUser, registerController)
authRouter.post('/login', loginUserController)
authRouter.post('/refreshToken', refreshAccessTokenController)
