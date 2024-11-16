import pool from '../databases/index.js'
import {
    comparePassword,
    generateOtp,
    generateToken,
    hashPassword,
    logger,
    sendMail,
    refreshAccess,
} from '../utils/index.js'
export const getUserByEmailService = async (email) => {
    try {
        const getUser = await pool.query(`SELECT * FROM users WHERE email=$1`, [
            email,
        ])
        return getUser.rows[0]
    } catch (error) {
        logger.error(error)
        return error
    }
}
export const registerUser = async (user) => {
    try {
        const currentUser = await getUserByEmailService(user.email)
        if (currentUser) {
            throw new Error('User email already in use')
        }
        const otp = generateOtp()
        try {
            await sendMail(
                user.email,
                'OTP',
                `<h1>This is your OTP code: ${otp}. Don't give it to others.</h1>`,
            )
        } catch (mailError) {
            throw new Error(`Failed to send OTP email: ${mailError.message}`)
        }
        const hashedPassword = await hashPassword(user.password)
        const newUser = await pool.query(
            `INSERT INTO users(
                name, email, password, role, avatar, username, birth_of_date, phone_number
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8
            ) RETURNING *`,
            [
                user.name,
                user.email,
                hashedPassword,
                user.role || 'user',
                user.avatar,
                user.username,
                user.birth_of_date,
                user.phone_number,
            ],
        )
        await pool.query(
            `INSERT INTO otp_codes (
                user_id, otp_code
            ) VALUES($1, $2)`,
            [newUser.rows[0].id, otp],
        )
        return newUser.rows[0]
    } catch (error) {
        logger.error(`Error registering user: ${error.message}`)
        throw new Error('Failed to register user')
    }
}

export const loginUser = async (user) => {
    try {
        const currentUser = await getUserByEmailService(user.email)
        if (!currentUser) {
            throw new Error('User not found')
        }
        const passIsEqual = await comparePassword(
            user.password,
            currentUser.password,
        )
        if (!passIsEqual) {
            throw new Error('User password or email wrong')
        }
        const accessToken = await generateToken('access', {
            sub: currentUser.id,
            email: currentUser.email,
            role: currentUser.role,
            username: currentUser.username,
        })
        const refreshToken = await generateToken('refresh', {
            sub: currentUser.id,
            email: currentUser.email,
            role: currentUser.role,
        })
        return {
            accessToken,
            refreshToken,
        }
    } catch (error) {
        logger.error(error)
        return error
    }
}

export const refreshAccessToken = async (user) => {
    try {
        if (!user.token) {
            throw new Error('Token is missing')
        }
        const refreshed = await refreshAccess('access', user.token)
        return refreshed
    } catch (error) {
        logger.error(error)
        return error
    }
}
