import {
    getAllUserService,
    getOneUserByIdService,
    createUserService,
    updateUserService,
    deleteUserService,
} from '../services/index.js'
import { logger } from '../utils/logger.js'
export async function getAllUsers(req, res, next) {
    try {
        logger.info(`Route: /api/v1/users Method: GET`)
        const allUsers = await getAllUserService(`SELECT * FROM users;`)
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
        const allUsers = await getOneUserByIdService(
            `SELECT * FROM users WHERE id=$1`,
            id
        )
        if (!allUsers) {
            return res.status(404).send('NOT FOUND')
        }
        res.status(200).send({
            msg: 'OK',
            data: allUsers,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/users${id} Method: GET,Error: ${error.message}`
        )
        next(error)
    }
}
export async function createUser(req, res, next) {
    try {
        logger.info(`Route: /api/v1/users Method: POST`)
        const {
            name,
            email,
            password,
            role,
            avatar,
            username,
            birth_of_date,
            phone_number,
        } = req.body

        const newUser = await createUserService(
            'INSERT INTO users (name, email, password,role, avatar, username, birth_of_date, phone_number) VALUES ($1, $2, $3, $4, $5, $6, $7,$8) RETURNING *',
            [
                name,
                email,
                password,
                role,
                avatar,
                username,
                birth_of_date,
                phone_number,
            ]
        )

        if (newUser) {
            res.status(200).send({
                msg: 'User created successfully',
                user: newUser,
            })
        } else {
            res.status(400).send({ msg: 'User creation failed' })
        }
    } catch (error) {
        logger.error(
            `Route: /api/v1/users Method: POST,Error: ${error.message}`
        )
        next(error)
    }
}

export async function updateUser(req, res, next) {
    try {
        const id = req.params.id
        logger.info(`Route: /api/v1/users/${id} Method: PUT`)
        const { name, email, username } = req.body
        const allUsers = await getOneUserByIdService(
            `SELECT * FROM users WHERE id=$1`,
            id
        )
        const update = await updateUserService(
            `UPDATE users SET name=$1,email=$2,username=$3 WHERE id=$4 RETURNING id`,
            [
                name || allUsers.name,
                email || allUsers.email,
                username || allUsers.username,
                id,
            ]
        )
        res.status(200).send({
            msg: 'OK',
            userId: update.id,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/users/${id} Method: PUT,Error: ${error.message}`
        )
        next(error)
    }
}
export async function deleteUser(req, res, next) {
    try {
        const id = req.params.id
        logger.info(`Route: /api/v1/users/${id} Method: DELETE`)
        const remove = await deleteUserService(
            `
            DELETE FROM users WHERE id=$1 RETURNING *`,
            [id]
        )
        res.status(200).send({
            msg: 'OK',
            removedUser: remove,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/users/${id} Method: DELETE,Error: ${error.message}`
        )
        next(error)
    }
}
