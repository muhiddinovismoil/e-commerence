import pool from '../databases/index.js'
import { compare } from 'bcrypt'
export async function getOneUserByEmailService(query, email) {
    try {
        const allData = await pool.query(query, email)
        return allData.rows[0]
    } catch (error) {
        return error
    }
}
export async function loginService(query, data) {
    try {
        const loginUser = await pool(query, data)
        if (!loginUser.rows[0]) {
            return loginUser.rows[0]
        } else {
            return compare(data.password, loginUser.rows[0].password)
        }
    } catch (error) {
        return error
    }
}
export async function registerService(query, data) {
    try {
        const registerUser = await pool(query, data)
        return registerUser.rows[0]
    } catch (error) {
        return error
    }
}
