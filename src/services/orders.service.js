import pool from '../databases/index.js'
export async function getAllOrders() {
    try {
        const data = await pool.query(`SELECT * FROM orders`)
        if (!data.rows) {
            throw new Error('Orders not found')
        }
        return data.rows
    } catch (error) {
        throw new Error(error)
    }
}
export async function getOrdersById(id) {
    try {
        const data = await pool.query(`SELECT * FROM orders WHERE id=$1`, [id])
        if (!data.rows[0]) {
            throw new Error('Orders not found')
        }
        return data.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}
export async function createOrders(order) {
    try {
        const data = await pool.query(
            `INSERT INTO orders(
                user_id,
                cart_id
            ) VALUES($1,$2) RETURNING *`,
            [order.user_id, order.cart_id],
        )
        if (!data.rows[0]) {
            throw new Error('Order not created with some reason')
        }
        return data.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}
export async function deleteOrders(id) {
    try {
        const data = await pool.query(
            `DELETE FROM orders WHERE id=$1 RETURNING *`,
            [id],
        )
        if (!data.rows[0]) {
            throw new Error('Order not deleted with some reason')
        }
        return data.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}
