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
        const data = await pool.query()
    } catch (error) {
        throw new Error(error)
    }
}
export async function updateReviewsById(id, reviews) {
    try {
        const oldReview = await getReviewsById(id)
        const data = await pool.query()
    } catch (error) {
        throw new Error(error)
    }
}
export async function deleteReviewsById(id) {
    try {
        const data = await pool.query()
    } catch (error) {
        throw new Error(error)
    }
}
