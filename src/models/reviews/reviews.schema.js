import pool from '../../databases/index.js'
import { logger } from '../../utils/index.js'

export const createReviewsTables = async () => {
    try {
        await pool.query(
            `CREATE TABLE IF NOT EXISTS reviews(
                id SERIAL PRIMARY KEY,
                user_id INT NOT NULL,
                product_id INT NOT NULL,
                rating SMALLINT NOT NULL,
                comment TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id),
                FOREIGN KEY (product_id) REFERENCES products(id)
            )`,
        )
    } catch (error) {
        logger.error(error)
    }
}
