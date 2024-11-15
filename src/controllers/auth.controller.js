import { getOneUserByEmailService, registerService } from '../services/index.js'
import bcrypt, { genSalt, hash } from 'bcrypt'
import { logger } from '../utils/logger.js'
export async function registerController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/auth/register Method: POST`)
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
        const data = await getOneUserByEmailService(
            `SELECT * FROM users WHERE email=$1`,
            [email]
        )
        const salt = await genSalt(10)
        const hashPassword = await hash(password, salt)
        if (!data) {
            const newData = await registerService(
                `INSERT INTO users(name,email,password,role,avatar,username,birth_of_date,phone_number)
                VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id`,
                [
                    name,
                    email,
                    hashPassword,
                    role || 'user',
                    avatar,
                    username,
                    birth_of_date,
                    phone_number,
                ]
            )
            res.status(200).send({
                msg: 'User Registered successfully',
                newUserId: newData,
            })
        }
    } catch (error) {
        logger.error(
            `Route: /api/v1/auth/register Method: POST,Error: ${error.message}`
        )
        next(error)
    }
}
export async function loginController(req, res, next) {
    try {
    } catch (error) {
        next(error)
    }
}
