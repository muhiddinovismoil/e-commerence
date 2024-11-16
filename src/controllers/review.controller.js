import {} from '../services/index.js'
import { logger } from '../utils/index.js'
export async function getAllReviewsController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/reviews METHOD: GET`)
    } catch (error) {
        logger.error(
            `Route: /api/v1/reviews METHOD: GET,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function getReviewByIdController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/reviews/${req.params.id} METHOD: GET`)
    } catch (error) {
        logger.error(
            `Route: /api/v1/reviews/${req.params.id} METHOD: GET,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function createReviewController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/reviews METHOD: POST`)
    } catch (error) {
        logger.error(
            `Route: /api/v1/reviews METHOD: POST,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function updateReviewByIdController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/reviews/${req.params.id} METHOD: PUT`)
    } catch (error) {
        logger.error(
            `Route: /api/v1/reviews/${req.params.id} METHOD: PUT,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function deleteReviewByIdController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/reviews/${req.params.id} METHOD: DELETE`)
    } catch (error) {
        logger.error(
            `Route: /api/v1/reviews/${req.params.id} METHOD: DELETE,Error: ${error.message}`,
        )
        next(error)
    }
}
