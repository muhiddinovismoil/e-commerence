import pool from '../databases/index.js'
export async function getAllReviews() {
    try {
        const data = await pool.query(`SELECT * FROM reviews;`)
        if (!data.rows) {
            throw new Error('Reviews are not found')
        }
        return data.rows
    } catch (error) {
        throw new Error(error)
    }
}
export async function getReviewsById(id) {
    try {
        const data = await pool.query(`SELECT * FROM reviews WHERE id=$1`, [id])
        if (!data.rows[0]) {
            throw new Error('Review are not found')
        }
        return data.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}
export async function createReviews(reviews) {
    try {
        const data = await pool.query(
            `INSERT INTO reviews(
                user_id,
                product_id,
                rating,
                comment
            ) VALUES($1,$2,$3,$4) RETURNING *`,
            [
                reviews.user_id,
                reviews.product_id,
                reviews.rating,
                reviews.comment,
            ],
        )
        if (!data.rows[0]) {
            throw new Error('Review not created with some reason')
        }
        return data.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}
export async function updateReviewsById(id, reviews) {
    try {
        const oldReview = await getReviewsById(id)
        const data = await pool.query(
            `UPDATE reviews SET rating=$1,comment=$2 WHERE id=$3 RETURNING *`,
            [
                reviews.rating || oldReview.rating,
                reviews.comment || oldReview.comment,
                id,
            ],
        )
        if (!data.rows[0]) {
            throw new Error('Reviews not updated with some reason')
        }
        return data.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}
export async function deleteReviewsById(id) {
    try {
        const data = await pool.query(
            `DELETE FROM reviews WHERE id=$1 RETURNING *`,
            [id],
        )
        if (!data.rows[0]) {
            throw new Error('Orders not deleted with some reasons')
        }
        return data.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}
