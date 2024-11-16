import { Router } from 'express'
import {
    getAllCartsItemController,
    getCartItemByIdController,
    createCartItemController,
    updateCartItemController,
    deleteCartItemController,
} from '../controllers/index.js'
import { validateCartItem, authGuard, roleGuard } from '../middlewares/index.js'
export const cartsItemRouter = Router()
cartsItemRouter.get('/', authGuard, getAllCartsItemController)
cartsItemRouter.get('/:id', authGuard, getCartItemByIdController)
cartsItemRouter.post('/', authGuard, validateCartItem, createCartItemController)
cartsItemRouter.put(
    '/:id',
    authGuard,
    roleGuard('admin', 'manager'),
    updateCartItemController,
)
cartsItemRouter.delete(
    '/:id',
    authGuard,
    roleGuard('admin', 'manager'),
    deleteCartItemController,
)
