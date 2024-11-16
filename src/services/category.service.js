import pool from '../databases/index.js'
export async function getAllCategories() {
    try {
        const data = await pool.query(`SELECT * FROM categories`)
        if (!data.rows) {
            throw new Error('Categories not found')
        }
        return data.rows
    } catch (error) {
        throw new Error(`Error with some issue: ${error.message}`)
    }
}
export async function getCategoryById(id) {
    try {
        const data = await pool.query(`SELECT * FROM categories WHERE id=$1`, [
            id,
        ])
        if (!data.rows[0]) {
            throw new Error('Category not found')
        }
        return data.rows[0]
    } catch (error) {
        throw new Error(`Error with some issue: ${error.message}`)
    }
}
export async function createCategory(category) {
    try {
        const check = await pool.query(
            `SELECT * FROM categories WHERE name=$1`,
            [category.name],
        )
        if (!check.rows[0]) {
            const newData = await pool.query(
                `INSERT INTO categories(
                    name,
                    description,
                    tag
                ) VALUES (
                    $1,$2,$3 
                ) RETURNING *`,
                [category.name, category.description, category.tag],
            )
            return newData.rows[0]
        }
        throw new Error('This category already created before')
    } catch (error) {
        throw new Error(`Error with some issue: ${error.message}`)
    }
}
export async function updateCategory(id, body) {
    try {
        const data = await getCategoryById(id)
        const update = await pool.query(
            `UPDATE categories SET name=$1,description=$2,tag=$3 WHERE id=$4 RETURNING *`,
            [
                body.name || data.name,
                body.description || data.description,
                body.tag || data.tag,
                id,
            ],
        )
        if (!update.rows[0]) {
            throw new Error('Category not updated with some reason')
        }
        return update.rows[0]
    } catch (error) {
        throw new Error(`Error with some issue: ${error.message}`)
    }
}
export async function deleteCategory(id) {
    try {
        const remove = await pool.query(
            `DELETE FROM categories WHERE id=$1 RETURNING *`,
            [id],
        )
        if (!remove.rows[0]) {
            throw new Error(`Category not deleted with some reason`)
        }
        return remove.rows[0]
    } catch (error) {
        throw new Error(`Error with some issue: ${error.message}`)
    }
}
