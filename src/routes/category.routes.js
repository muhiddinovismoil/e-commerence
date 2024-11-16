import { Router } from 'express'
import {
    getAllCategoriesController,
    getCategorieByIdController,
    createCategoryController,
    updateCategoryController,
    deleteCategoryController,
} from '../controllers/index.js'
import {
    validateCategories,
    authGuard,
    roleGuard,
} from '../middlewares/index.js'
export const categoryRouter = Router()
categoryRouter.get('/', authGuard, getAllCategoriesController)
categoryRouter.get('/:id', authGuard, getCategorieByIdController)
categoryRouter.post(
    '/',
    authGuard,
    validateCategories,
    createCategoryController,
)
categoryRouter.put(
    '/:id',
    authGuard,
    roleGuard('admin', 'manager'),
    updateCategoryController,
)
categoryRouter.delete(
    '/:id',
    authGuard,
    roleGuard('admin', 'manager'),
    deleteCategoryController,
)
