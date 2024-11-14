import pool from '../databases/index.js'

export async function getAllUserService(query) {
    try {
        const allData = await pool.query(query)
        return allData.rows[0]
    } catch (error) {
        return error
    }
}
export async function getOneUserByIdService(query, id) {
    try {
        const allData = await pool.query(query, [id])
        return allData.rows[0]
    } catch (error) {
        return error
    }
}
export async function createUserService(query, data) {
    try {
        const newData = await pool.query(query, data)
        return newData.rows[0]
    } catch (error) {
        return error
    }
}
export async function updateUserService(query, data) {
    try {
        const newData = await pool.query(query, data)
        return newData.rows[0]
    } catch (error) {
        return error
    }
}
export async function deleteUserService(query, data) {
    try {
        const newData = await pool.query(query, data)
        return newData.rows[0]
    } catch (error) {
        return error
    }
}
