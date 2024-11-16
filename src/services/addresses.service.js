import pool from '../databases/index.js'
export async function getAllAddressesService() {
    try {
        const addressses = await pool.query(`SELECT * FROM addresses`)
        return addressses.rows
    } catch (error) {
        return error
    }
}
export async function getAddressByIdService(id) {
    try {
        const addressses = await pool.query(
            `SELECT * FROM addresses WHERE id = $1`,
            id,
        )
        return addressses.rows[0]
    } catch (error) {
        return error
    }
}
export async function createAddressService(data) {
    try {
        const addressses = await pool.query(
            `INSERT INTO addresses(
                user_id,
                title,
                address_line_1,
                address_line_2,
                country,
                city,
                postal_code,
                phone_number
                )
                VALUES(
                $1,$2,
                $3,$4,
                $5,$6,
                $7,$8
                ) RETURNING *`,
            [
                data.user_id,
                data.title,
                data.address_line_1,
                data.address_line_2,
                data.country,
                data.city,
                data.postal_code,
                data.phone_number,
            ],
        )
        return addressses.rows[0]
    } catch (error) {
        return error
    }
}
export async function updateAddressService(data, oldData, id) {
    try {
        const addressses = await pool.query(
            `UPDATE addresses SET 
                title=$1,
                address_line_1=$2,
                address_line_2=$3,
                country=$4,
                city=$5,
                postal_code=$6,
                phone_number=$7
                WHERE id=$8 RETURNING *`,
            [
                data.title || oldData.title,
                data.address_line_1 || oldData.address_line_1,
                data.address_line_2 || oldData.address_line_2,
                data.country || oldData.country,
                data.city || oldData.city,
                data.postal_code || oldData.postal_code,
                data.phone_number || oldData.phone_number,
                id,
            ],
        )
        return addressses.rows[0]
    } catch (error) {
        return error
    }
}
export async function deleteAddressService(id) {
    try {
        const addressses = await pool.query(
            `DELETE FROM addresses WHERE id=$1 RETURNING *`,
            id,
        )
        return addressses.rows[0]
    } catch (error) {
        return error
    }
}
