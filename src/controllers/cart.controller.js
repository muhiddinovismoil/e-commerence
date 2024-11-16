import {
    getAllCart,
    getCartById,
    createCart,
    updateCartById,
    deleteCartById,
} from '../services/index.js'
import { logger } from '../utils/index.js'
export async function getAllCartsController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/carts METHOD: GET`)
        const allcarts = await getAllCart()
        return res.status(200).send({
            msg: 'Ok',
            data: allcarts,
        })
    } catch (error) {
        logger.error(`Route: /api/v1/carts METHOD: GET,Error: ${error.message}`)
        next(error)
    }
}
export async function getCartByIdController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/carts/${req.params.id} METHOD: GET`)
        const cartByid = await getCartById(req.params.id)
        return res.status(200).send({
            msg: 'Ok',
            data: cartByid,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/carts/${req.params.id} METHOD: GET,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function createCartController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/carts METHOD: POST`)
        const newCart = await createCart(req.body)
        return res.status(200).send({
            msg: 'Ok',
            data: newCart,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/carts METHOD: POST,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function updateCartController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/carts/${req.params.id} METHOD: PUT`)
        const changeCart = await updateCartById(req.params.id, req.body)
        return res.status(200).send({
            msg: 'Ok',
            data: changeCart,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/carts/${req.params.id} METHOD: PUT,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function deleteCartController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/carts/${req.params.id} METHOD: DELETE`)
        const remove = await deleteCartById(req.params.id, req.body)
        return res.status(200).send({
            msg: 'Ok',
            data: remove,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/carts/${req.params.id} METHOD: DELETE,Error: ${error.message}`,
        )
        next(error)
    }
}
