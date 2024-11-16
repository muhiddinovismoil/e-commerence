import pool from '../databases/index.js'

export async function getAllUserService() {
    try {
        const allData = await pool.query(`SELECT * FROM users;`)
        return allData.rows
    } catch (error) {
        return error
    }
}
export async function getOneUserByIdService(id) {
    try {
        const allData = await pool.query(`SELECT * FROM users WHERE id=$1`, [
            id,
        ])
        return allData.rows[0]
    } catch (error) {
        return error
    }
}
export async function updateUserService(data, oldData, id) {
    try {
        const newData = await pool.query(
            `UPDATE users SET name=$1,email=$2,username=$3 WHERE id=$4 RETURNING id`,
            [
                data.name || oldData.name,
                data.email || oldData.email,
                data.username || oldData.username,
                id,
            ],
        )
        return newData.rows[0]
    } catch (error) {
        return error
    }
}
export async function deleteUserService(id) {
    try {
        const newData = await pool.query(
            `DELETE FROM users WHERE id=$1 RETURNING *`,
            [id],
        )
        return newData.rows[0]
    } catch (error) {
        return error
    }
}
