import { logger } from '../../utils/logger.js'
import pool from '../../databases/index.js'
export const createProductsTable = async () => {
    try {
        await pool.query(
            `CREATE TABLE IF NOT EXISTS products (
                id SERIAL PRIMARY KEY,
                category_id INT NOT NULL,
                title VARCHAR NOT NULL,
                picture VARCHAR,
                summary VARCHAR NOT NULL,
                description TEXT NOT NULL,
                price REAL NOT NULL,
                discount_type VARCHAR,
                discount_value REAL,
                tags VARCHAR NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                CONSTRAINT fk_category
                    FOREIGN KEY(category_id)
                    REFERENCES categories(id)
            )`,
        )
    } catch (error) {
        logger.error(error)
    }
}
