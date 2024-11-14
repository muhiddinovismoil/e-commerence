import pool from '../databases/index.js'
export async function getAllAddressesService(query) {
    try {
        const addressses = await pool.query(query)
        return addressses.rows
    } catch (error) {
        return error
    }
}
export async function getAddressByIdService(query, id) {
    try {
        const addressses = await pool.query(query, id)
        return addressses.rows[0]
    } catch (error) {
        return error
    }
}
export async function createAddressService(query, data) {
    try {
        const addressses = await pool.query(query, data)
        return addressses.rows[0]
    } catch (error) {
        return error
    }
}
export async function updateAddressService(query, data) {
    try {
        const addressses = await pool.query(query, data)
        return addressses.rows[0]
    } catch (error) {
        return error
    }
}
export async function deleteAddressService(query, id) {
    try {
        const addressses = await pool.query(query, id)
        return addressses.rows[0]
    } catch (error) {
        return error
    }
}
