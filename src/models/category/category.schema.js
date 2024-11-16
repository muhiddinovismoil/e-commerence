import { logger } from '../../utils/logger.js'
import pool from '../../databases/index.js'
export const creaetCategoryTable = async () => {
    try {
        await pool.query(
            `CREATE TABLE IF NOT EXISTS categories (
                id SERIAL PRIMARY KEY,
                name VARCHAR UNIQUE NOT NULL,
                description TEXT NOT NULL,
                tag VARCHAR NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`,
        )
    } catch (error) {
        logger.error(error)
    }
}
