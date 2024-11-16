import {
    createProducts,
    deleteProducts,
    getAllProducts,
    getProductsById,
    updateProducts,
} from '../services/products.service.js'
import { logger } from '../utils/index.js'
export async function getAllProductsController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/category METHOD: GET`)
        const categories = await getAllProducts()
        res.status(200).send({
            msg: 'OK',
            data: categories,
        })
    } catch (err) {
        logger.error(
            `Route: /api/v1/category METHOD: GET,Error: ${err.message}`,
        )
        next(err)
    }
}
export async function getProductByIdController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/category/${req.params.id} METHOD: GET`)
        const categories = await getProductsById(req.params.id)
        res.status(200).send({
            msg: 'OK',
            data: categories,
        })
    } catch (err) {
        logger.error(
            `Route: /api/v1/category/${req.params.id} METHOD: GET,Error: ${err.message}`,
        )
        next(err)
    }
}
export async function createProductController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/category/ METHOD: POST`)
        const newCategory = await createProducts(req.body)
        return res.status(200).send({
            msg: 'CREATED',
            category: newCategory,
        })
    } catch (err) {
        logger.error(
            `Route: /api/v1/category/ METHOD: POST,Error: ${err.message}`,
        )
        next(err)
    }
}
export async function updateProductController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/category/${req.params.id} METHOD: PUT`)
        const updateData = await updateProducts(req.params.id, req.body)
        return res.status(200).send({
            msg: 'Updated',
            updatedCategory: updateData,
        })
    } catch (err) {
        logger.error(
            `Route: /api/v1/category/${req.params.id} METHOD: PUT,Error: ${err.message}`,
        )
        next(err)
    }
}
export async function deleteProductController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/category/${req.params.id} METHOD: DELETE`)
        const removeCategory = await deleteProducts(req.params.id)
        return res.status(200).send({
            msg: 'Deleted',
            deletedItem: removeCategory,
        })
    } catch (err) {
        logger.error(
            `Route: /api/v1/category/${req.params.id} METHOD: DELETE,Error: ${err.message}`,
        )
        next(err)
    }
}
