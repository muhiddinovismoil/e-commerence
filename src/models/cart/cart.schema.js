import pool from '../../databases/index.js'
import { logger } from '../../utils/index.js'
export const createCartTables = async () => {
    try {
        await pool.query(
            `CREATE TABLE IF NOT EXISTS carts(
                id SERIAL PRIMARY KEY,
                user_id INT NOT NULL,
                total REAL NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );`,
        )
    } catch (error) {
        logger.error(error.message)
    }
}
