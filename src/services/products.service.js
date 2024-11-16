import pool from '../databases/index.js'
export async function getAllProducts() {
    try {
        const data = await pool.query(`SELECT * FROM products`)
        if (!data.rows) {
            throw new Error('Products not found')
        }
        return data.rows
    } catch (error) {
        throw new Error(`Error with some issue: ${error.message}`)
    }
}
export async function getProductsById(id) {
    try {
        const data = await pool.query(`SELECT * FROM products WHERE id=$1`, [
            id,
        ])
        if (!data.rows[0]) {
            throw new Error('Product not found')
        }
        return data.rows[0]
    } catch (error) {
        throw new Error(`Error with some issue: ${error.message}`)
    }
}
export async function createProducts(products) {
    try {
        const newData = await pool.query(
            `INSERT INTO products(
                    category_id,
                    title,
                    picture,
                    summary,
                    description,
                    price,
                    discount_type,
                    discount_value,
                    tags
                ) VALUES (
                    $1,$2,$3,$4,$5,$6,$7,$8,$9
                ) RETURNING *`,
            [
                products.category_id,
                products.title,
                products.picture,
                products.summary,
                products.description,
                products.price,
                products.discount_type,
                products.discount_value,
                products.tags,
            ],
        )
        return newData.rows[0]
    } catch (error) {
        throw new Error(`Error with some issue: ${error.message}`)
    }
}
export async function updateProducts(id, body) {
    try {
        const data = await getProductsById(id)
        const update = await pool.query(
            `UPDATE products SET 
                title=$1,
                picture=$2,
                summary=$3,
                description=$4,
                price=$5,
                discount_type=$6,
                discount_value=$7
                WHERE id=$8 RETURNING *`,
            [
                body.title || data.title,
                body.picture || data.picture,
                body.summary || data.summary,
                body.description || data.description,
                body.price || data.price,
                body.discount_type || data.discount_type,
                body.discount_value || data.discount_value,
                id,
            ],
        )
        if (!update.rows[0]) {
            throw new Error('Product not updated with some reason')
        }
        return update.rows[0]
    } catch (error) {
        throw new Error(`Error with some issue: ${error.message}`)
    }
}
export async function deleteProducts(id) {
    try {
        const remove = await pool.query(
            `DELETE FROM products WHERE id=$1 RETURNING *`,
            [id],
        )
        if (!remove.rows[0]) {
            throw new Error(`Product not deleted with some reason`)
        }
        return remove.rows[0]
    } catch (error) {
        throw new Error(`Error with some issue: ${error.message}`)
    }
}
