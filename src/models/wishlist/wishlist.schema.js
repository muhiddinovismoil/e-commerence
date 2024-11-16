import { logger } from '../../utils/index.js'
import pool from '../../databases/index.js'
export const createWishlistTable = async () => {
    try {
        await pool.query(
            `CREATE TABLE IF NOT EXISTS wishlist(
                id SERIAL PRIMARY KEY,
                user_id INT NOT NULL,
                product_id INT NOT NULL,
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
