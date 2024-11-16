import pool from '../databases/index.js'
export async function getAllWishlist() {
    try {
        const data = await pool.query(`SELECT * FROM wishlist`)
        if (!data.rows) {
            throw new Error('Wishlists not found')
        }
        return data.rows
    } catch (error) {
        throw new Error(error)
    }
}
export async function getByIdWishlist(id) {
    try {
        const data = await pool.query(`SELECT * FROM wishlist WHERE id=$1`, [
            id,
        ])
        if (!data.rows[0]) {
            throw new Error('Wishlist not found')
        }
        return data.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}
export async function createWishlist(wishlist) {
    try {
        const newWishlist = await pool.query(
            `INSERT INTO wishlist(
                user_id,
                product_id
            ) VALUES($1,$2) RETURNING *`,
            [wishlist.user_id, wishlist.product_id],
        )
        if (!newWishlist.rows[0]) {
            throw new Error('Wishlist not created with some reason')
        }
        return newWishlist.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}
export async function deleteWishlist(id) {
    try {
        const remove = await pool.query(
            `DELETE FROM wishlist WHERE id=$1 RETURNING *`,
            [id],
        )
        if (!remove.rows[0]) {
            throw new Error('Wishlist not deleted with some reason')
        }
        return remove.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}
