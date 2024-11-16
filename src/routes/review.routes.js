import { Router } from 'express'
import {
    getAllReviewsController,
    getReviewByIdController,
    createReviewController,
    updateReviewByIdController,
    deleteReviewByIdController,
} from '../controllers/index.js'
import { validateReviews, authGuard, roleGuard } from '../middlewares/index.js'
export const reviewRouter = Router()
reviewRouter.get('/', authGuard, getAllReviewsController)
reviewRouter.get('/:id', authGuard, getReviewByIdController)
reviewRouter.post('/', authGuard, validateReviews, createReviewController)
reviewRouter.put(
    '/:id',
    authGuard,
    roleGuard('admin', 'manager'),
    updateReviewByIdController,
)
reviewRouter.delete(
    '/:id',
    authGuard,
    roleGuard('admin', 'manager'),
    deleteReviewByIdController,
)
