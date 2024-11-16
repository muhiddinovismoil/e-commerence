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
productsRouter.get('/', getAllProductsController)
productsRouter.get('/:id', getProductByIdController)
productsRouter.post('/', validateProducts, createProductController)
productsRouter.put('/:id', updateProductController)
productsRouter.delete('/:id', deleteProductController)
