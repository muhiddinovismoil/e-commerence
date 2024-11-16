import pool from '../databases/index.js'
export async function getAllCart() {
    try {
        const data = await pool.query(`SELECT * FROM carts;`)
        if (!data.rows) {
            throw new Error('Carts not found')
        }
        return data.rows
    } catch (error) {
        throw new Error(error)
    }
}
export async function getCartById(id) {
    try {
        const data = await pool.query(`SELECT * FROM carts WHERE id=$1`, [id])
        if (!data.rows[0]) {
            throw new Error('Cart not found')
        }
        return data.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}
export async function createCart(cart) {
    try {
        const newCart = await pool.query(
            `INSERT INTO carts (
                user_id,
                total
            ) VALUES($1,$2) RETURNING *`,
            [cart.user_id, cart.total],
        )
        if (!newCart.rows[0]) {
            throw new Error('Cart not created with some reason')
        }
        return newCart.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}
export async function updateCartById(id, cart) {
    try {
        const currentCart = await getCartById(id)
        const update = await pool.query(
            `UPDATE carts SET total=$1 WHERE id=$2 RETURNING *`,
            [cart.total || currentCart.total, id],
        )
        if (!update.rows[0]) {
            throw new Error('Cart not updated with some reason')
        }
        return update.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}
export async function deleteCartById(id) {
    try {
        const deleted = await pool.query(
            `DELETE FROM carts WHERE id=$1 RETURNING *`,
            [id],
        )
        if (!deleted.rows[0]) {
            throw new Error('Cart not deleted with some reason')
        }
        return deleted.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}
