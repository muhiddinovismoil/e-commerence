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
cartsItemRouter.get('/', getAllCartsItemController)
cartsItemRouter.get('/:id', getCartItemByIdController)
cartsItemRouter.post('/', createCartItemController)
cartsItemRouter.put('/:id', updateCartItemController)
cartsItemRouter.delete('/:id', deleteCartItemController)
