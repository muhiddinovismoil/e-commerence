import { Router } from 'express'
import {
    loginUserController,
    refreshAccessTokenController,
    registerController,
} from '../controllers/index.js'

export const authRouter = Router()
authRouter.post('/register', registerController)
authRouter.post('/login', loginUserController)
authRouter.post('/refreshToken', refreshAccessTokenController)
// authRouter.post('/verify')
