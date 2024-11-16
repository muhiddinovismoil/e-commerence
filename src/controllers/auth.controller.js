import { logger } from '../utils/index.js'
import {
    loginUser,
    refreshAccessToken,
    registerUser,
} from '../services/index.js'
export async function registerController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/auth/register METHOD: POST`)
        const createUser = await registerUser(req.body)
        res.send({
            msg: 'Register was successful',
            registeredUser: createUser,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/auth/register METHOD: POST,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function loginUserController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/auth/login METHOD: POST`)
        const currentUser = await loginUser(req.body)
        res.status(200).send(currentUser)
    } catch (error) {
        logger.error(
            `Route: /api/v1/auth/login METHOD: POST,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function refreshAccessTokenController(req, res, next) {
    try {
        if (!req.body.refreshToken) {
            return res.status(400).send(`Refresh token is not valid`)
        }
        const data = await refreshAccessToken({ token: req.body.refreshToken })
        if (data.success) {
            res.status(200).send({
                msg: 'Now you can use new Access token to access data',
                accessToken: data.newAccessToken,
            })
        } else {
            res.status(400).send(data.message || 'Failed to refresh token')
        }
    } catch (error) {
        logger.error(
            `Route: /api/v1/auth/refreshToken METHOD: POST,Error: ${error.message}`,
        )
        next(error)
    }
}
