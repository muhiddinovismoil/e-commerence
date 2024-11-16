import {
    createCategory,
    deleteCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
} from '../services/index.js'
import { logger } from '../utils/index.js'
export async function getAllCategoriesController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/category METHOD: GET`)
        const categories = await getAllCategories()
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
export async function getCategorieByIdController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/category/${req.params.id} METHOD: GET`)
        const categories = await getCategoryById(req.params.id)
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
export async function createCategoryController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/category/ METHOD: POST`)
        const newCategory = await createCategory(req.body)
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
export async function updateCategoryController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/category/${req.params.id} METHOD: PUT`)
        const updateData = await updateCategory(req.params.id, req.body)
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
export async function deleteCategoryController(req, res, next) {
    try {
        logger.info(`Route: /api/v1/category/${req.params.id} METHOD: DELETE`)
        const removeCategory = await deleteCategory(req.params.id)
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
