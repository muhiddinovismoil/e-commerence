import pool from '../../databases/index.js'
import { logger } from '../../utils/index.js'
export const createCartItemTable = async () => {
    try {
        await pool.query(
            `CREATE TABLE IF NOT EXISTS cart_item(
                id SERIAL PRIMARY KEY,
                cart_id INT NOT NULL,
                product_id INT NOT NULL,
                quantity INT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (cart_id) REFERENCES carts(id)
            )`,
        )
    } catch (error) {
        logger.error(error)
    }
}
