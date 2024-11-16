import { Router } from 'express'
import {
    getAllOrdersController,
    getOrderByIdController,
    createOrderController,
    updateOrderByIdController,
    deleteOrderByIdController,
} from '../controllers/index.js'
import { validateOrders,authGuard,roleGuard } from '../middlewares/index.js'
export const orderRouter = Router()
orderRouter.get('/', getAllOrdersController)
orderRouter.get('/:id', getOrderByIdController)
orderRouter.post('/', createOrderController)
orderRouter.put('/:id', updateOrderByIdController)
orderRouter.delete('/:id', deleteOrderByIdController)
