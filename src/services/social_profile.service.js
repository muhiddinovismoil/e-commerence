import pool from '../databases/index.js'
export async function getAllProfilesService(query) {
    try {
        const addressses = await pool.query(query)
        return addressses.rows
    } catch (error) {
        return error
    }
}
export async function getProfilesByIdService(query, id) {
    try {
        const addressses = await pool.query(query, id)
        return addressses.rows[0]
    } catch (error) {
        return error
    }
}
export async function createProfilesService(query, data) {
    try {
        const addressses = await pool.query(query, data)
        return addressses.rows[0]
    } catch (error) {
        return error
    }
}
export async function updateProfilesService(query, data) {
    try {
        const addressses = await pool.query(query, data)
        return addressses.rows[0]
    } catch (error) {
        return error
    }
}
export async function deleteProfilesService(query, id) {
    try {
        const addressses = await pool.query(query, id)
        return addressses.rows[0]
    } catch (error) {
        return error
    }
}
