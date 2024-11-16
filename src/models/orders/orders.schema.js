import pool from '../../databases/index,js'
import { logger } from '../../utils/index.js'
export const createOrdersTable = async () => {
    try {
        await pool.query(
            `CREATE TABLE IF NOT EXISTS orders(
                id SERIAL PRIMARY KEY,
                user_id INT NOT NULL,
                cart_id INT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id),
                FOREIGN KEY (cart_id) REFERENCES carts(id)
            );`,
        )
    } catch (error) {
        logger.error(error)
    }
}
