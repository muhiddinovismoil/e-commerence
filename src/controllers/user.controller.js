import {
    getAllUserService,
    getOneUserByIdService,
    updateUserService,
    deleteUserService,
} from '../services/index.js'
import { logger } from '../utils/index.js'
export async function getAllUsers(req, res, next) {
    try {
        logger.info(`Route: /api/v1/users Method: GET`)
        const allUsers = await getAllUserService()
        res.status(200).send({
            msg: 'OK',
            data: allUsers,
        })
    } catch (error) {
        logger.error(`Route: /api/v1/users Method: GET,Error: ${error.message}`)
        next(error)
    }
}
export async function getOneUserById(req, res, next) {
    try {
        const id = req.params.id
        logger.info(`Route: /api/v1/users${id} Method: GET`)
        const allUsers = await getOneUserByIdService(id)
        if (!allUsers) {
            return res.status(404).send('NOT FOUND')
        }
        res.status(200).send({
            msg: 'OK',
            data: allUsers,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/users${id} Method: GET,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function updateUser(req, res, next) {
    try {
        const id = req.params.id
        logger.info(`Route: /api/v1/users/${id} Method: PUT`)
        const allUsers = await getOneUserByIdService(id)
        const update = await updateUserService(req.body, allUsers, id)
        res.status(200).send({
            msg: 'OK',
            userId: update.id,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/users/${id} Method: PUT,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function deleteUser(req, res, next) {
    try {
        const id = req.params.id
        logger.info(`Route: /api/v1/users/${id} Method: DELETE`)
        const remove = await deleteUserService(id)
        res.status(200).send({
            msg: 'OK',
            removedUser: remove,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/users/${id} Method: DELETE,Error: ${error.message}`,
        )
        next(error)
    }
}
