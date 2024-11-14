import app from './src/app.js'
import { config } from './src/config/index.js'
import { logger } from './src/utils/logger.js'
import pool from './src/databases/index.js'
const bootstrap = async () => {
    try {
        app.listen(config.app.port, () => {
            logger.info(`SERVER IS RUNNING ON PORT: ${config.app.port}`)
        })
        logger.info((await pool.query(`SELECT now()`)).rows)
    } catch (error) {
        logger.error(error)
    }
}
bootstrap()
