import {
    getAllWishlist,
    getByIdWishlist,
    createWishlist,
    deleteWishlist,
} from '../services/index.js'
import { logger } from '../utils/index.js'
export async function getAllWishlistsController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/wishlists METHOD: GET`)
        const data = await getAllWishlist()
        return res.status(200).send({
            msg: 'Ok',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/wishlists METHOD: GET,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function getWishlistByIdController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/wishlists/${req.params.id} METHOD: GET`)
        const data = await getByIdWishlist(req.params.id)
        return res.status(200).send({
            msg: 'Ok',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/wishlists/${req.params.id} METHOD: GET,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function addWishlistController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/wishlists METHOD: POST`)
        const data = await createWishlist(req.body)
        return res.status(200).send({
            msg: 'Ok',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/wishlists METHOD: POST,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function deleteWishlistByIdController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/wishlists/${req.params.id} METHOD: DELETE`)
        const data = await deleteWishlist(req.params.id)
        return res.status(200).send({
            msg: 'Ok',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/wishlists/${req.params.id} METHOD: DELETE,Error: ${error.message}`,
        )
        next(error)
    }
}
