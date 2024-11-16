import {
    getAllOrders,
    getOrdersById,
    createOrders,
    deleteOrders,
} from '../services/index.js'
import { logger } from '../utils/index.js'
export async function getAllOrdersController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/orders METHOD: GET`)
        const data = await getAllOrders()
        return res.send({
            msg: 'Ok',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/orders METHOD: GET,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function getOrderByIdController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/orders/${req.params.id} METHOD: GET`)
        const data = await getOrdersById(req.params.id)
        return res.send({
            msg: 'Ok',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/orders/${req.params.id} METHOD: GET,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function createOrderController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/orders METHOD: POST`)
        const data = await createOrders(req.body)
        return res.send({
            msg: 'Ok',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/orders METHOD: POST,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function deleteOrderByIdController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/orders/${req.params.id} METHOD: DELETE`)
        const data = await deleteOrders(req.params.id)
        return res.send({
            msg: 'Ok',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/orders/${req.params.id} METHOD: DELETE,Error: ${error.message}`,
        )
        next(error)
    }
}
