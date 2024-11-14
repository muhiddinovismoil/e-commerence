import { logger } from '../../utils/logger.js'
import pool from '../../databases/index.js'
export const addressTable = async () => {
    try {
        await pool.query(
            `CREATE TABLE IF NOT EXISTS addresses (
                id SERIAL PRIMARY KEY,
                user_id INT,
                title VARCHAR NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                address_line_1 VARCHAR NOT NULL,
                address_line_2 VARCHAR NOT NULL,
                country VARCHAR NOT NULL,
                city VARCHAR NOT NULL,
                postal_code VARCHAR NOT NULL,
                phone_number VARCHAR NOT NULL,
                CONSTRAINT fk_user
                    FOREIGN KEY (user_id)
                    REFERENCES users(id)
                    ON DELETE CASCADE
                    ON UPDATE CASCADE
                )
            `
        )
    } catch (error) {
        logger.error(error)
    }
}
