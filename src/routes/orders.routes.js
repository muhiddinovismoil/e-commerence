import { Router } from 'express'
import {
    getAllOrdersController,
    getOrderByIdController,
    createOrderController,
    deleteOrderByIdController,
} from '../controllers/index.js'
import { validateOrders, authGuard, roleGuard } from '../middlewares/index.js'
export const orderRouter = Router()
orderRouter.get('/', authGuard, getAllOrdersController)
orderRouter.get('/:id', authGuard, getOrderByIdController)
orderRouter.post('/', authGuard, validateOrders, createOrderController)
orderRouter.delete(
    '/:id',
    authGuard,
    roleGuard('admin', 'moderator'),
    deleteOrderByIdController,
)
