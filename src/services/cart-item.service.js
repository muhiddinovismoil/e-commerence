import pool from '../databases/index.js'
export async function getAllCartsItem() {
    try {
        const data = await pool.query(`SELECT * FROM cart_item`)
        if (!data.rows) {
            throw new Error('Carts-Item not found')
        }
        return data.rows
    } catch (error) {
        throw new Error(error)
    }
}
export async function getCartItemById(id) {
    try {
        const data = await pool.query(`SELECT * FROM cart_item WHERE id=$1`, [
            id,
        ])
        if (!data.rows[0]) {
            throw new Error('Carts-Item not found')
        }
        return data.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}
export async function createCartsItem(cartItem) {
    try {
        const data = await pool.query(
            `INSERT INTO cart_item(
                cart_id,
                product_id,
                quantity
            ) VALUES($1,$2,$3) RETURNING *`,
            [cartItem.cart_id, cartItem.product_id, cartItem.quantity],
        )
        if (!data.rows[0]) {
            throw new Error('Carts-Item not created with some reason')
        }
        return data.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}
export async function updateCartsItem(id, cartItem) {
    try {
        const oldData = await getCartItemById(id)
        const changed = await pool.query(
            `UPDATE cart_item SET quantity=$1 WHERE id=$2 RETURNING *`,
            [cartItem.quantity || oldData.quantity, id],
        )
        if (!changed.rows[0]) {
            throw new Error('Carts-Item not updated with some reason')
        }
        return changed.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}
export async function deleteCartsItem(id) {
    try {
        const removeData = await pool.query(
            `DELETE FROM cart_item WHERE id=$1 RETURNING *`,
            [id],
        )
        if (!removeData.rows[0]) {
            throw new Error('Carts-Item not updated with some reason')
        }
        return removeData.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}
