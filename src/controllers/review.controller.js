import {
    getAllReviews,
    getReviewsById,
    createReviews,
    updateReviewsById,
    deleteReviewsById,
} from '../services/index.js'
import { logger } from '../utils/index.js'
export async function getAllReviewsController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/reviews METHOD: GET`)
        const data = await getAllReviews()
        return res.status(200).send({
            msg: 'OK',
            data: data,
        })
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
        const data = await getReviewsById(req.params.id)
        return res.status(200).send({
            msg: 'OK',
            data: data,
        })
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
        const data = await createReviews(req.body)
        return res.status(200).send({
            msg: 'Created',
            data: data,
        })
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
        const data = await updateReviewsById(req.params.id, req.body)
        return res.status(200).send({
            msg: 'Updated',
            data: data,
        })
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
        const data = await deleteReviewsById(req.params.id)
        return res.status(200).send({
            msg: 'Deleted',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/reviews/${req.params.id} METHOD: DELETE,Error: ${error.message}`,
        )
        next(error)
    }
}
