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
reviewRouter.get('/', getAllReviewsController)
reviewRouter.get('/:id', getReviewByIdController)
reviewRouter.post('/', createReviewController)
reviewRouter.put('/:id', updateReviewByIdController)
reviewRouter.delete('/:id', deleteReviewByIdController)
