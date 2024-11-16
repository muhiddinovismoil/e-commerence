import {
    getAllCartsItem,
    getCartItemById,
    createCartsItem,
    updateCartsItem,
    deleteCartsItem,
} from '../services/index.js'
import { logger } from '../utils/index.js'
export async function getAllCartsItemController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/carts-item METHOD: GET`)
        const data = await getAllCartsItem()
        return res.status(200).send({
            msg: 'OK',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/carts-item METHOD: GET,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function getCartItemByIdController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/carts-item/${req.params.id} METHOD: GET`)
        const data = await getCartItemById(req.params.id)
        return res.status(200).send({
            msg: 'OK',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/carts-item/${req.params.id} METHOD: GET,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function createCartItemController(req, res, next) {
    try {
        logger.info()
        const newData = await createCartsItem(req.body)
        return res.status(200).send({
            msg: 'CREATED',
            data: newData,
        })
    } catch (error) {
        logger.error()
        next(error)
    }
}
export async function updateCartItemController(req, res, next) {
    try {
        logger.info()
        const updateData = await updateCartsItem(req.params.id, req.body)
        return res.status(200).send({
            msg: 'Updated',
            data: updateData,
        })
    } catch (error) {
        logger.error()
        next(error)
    }
}
export async function deleteCartItemController(req, res, next) {
    try {
        logger.info()
        const deleteData = await deleteCartsItem(req.params.id)
        return res.status(200).send({
            msg: 'DELETED',
            data: deleteData,
        })
    } catch (error) {
        logger.error()
        next(error)
    }
}
