import { Router } from 'express'
import {
    getAllProductsController,
    getProductByIdController,
    createProductController,
    updateProductController,
    deleteProductController,
} from '../controllers/index.js'
import { validateProducts, authGuard, roleGuard } from '../middlewares/index.js'
export const productsRouter = Router()
productsRouter.get('/', authGuard, getAllProductsController)
productsRouter.get('/:id', authGuard, getProductByIdController)
productsRouter.post('/', authGuard, validateProducts, createProductController)
productsRouter.put(
    '/:id',
    authGuard,
    roleGuard('admin', 'moderator'),
    updateProductController,
)
productsRouter.delete(
    '/:id',
    authGuard,
    roleGuard('admin', 'moderator'),
    deleteProductController,
)
