import { logger } from '../../utils/logger.js'
import pool from '../../databases/index.js'
export const createSocialProfilesTable = async () => {
    try {
        await pool.query(
            `CREATE TABLE IF NOT EXISTS social_profiles(
                id SERIAL PRIMARY KEY,
                user_id INT NOT NULL,
                platform VARCHAR NOT NULL,
                platform_user VARCHAR NOT NULL,
                CONSTRAINT fk_users
                    FOREIGN KEY (user_id)
                    REFERENCES users(id)
                    ON DELETE CASCADE
                    ON UPDATE CASCADE
            )`
        )
    } catch (error) {
        logger.error(error.message)
    }
}
