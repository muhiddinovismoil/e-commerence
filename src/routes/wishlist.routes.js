import { Router } from 'express'
import {
    getAllWishlistsController,
    getWishlistByIdController,
    addWishlistController,
    deleteWishlistByIdController,
} from '../controllers/index.js'
import { validateWishlist, authGuard, roleGuard } from '../middlewares/index.js'
export const wishlistRouter = Router()
wishlistRouter.get('/', authGuard, getAllWishlistsController)
wishlistRouter.get('/:id', authGuard, getWishlistByIdController)
wishlistRouter.post('/', authGuard, validateWishlist, addWishlistController)
wishlistRouter.delete(
    '/:id',
    authGuard,
    roleGuard('admin', 'manager'),
    deleteWishlistByIdController,
)
