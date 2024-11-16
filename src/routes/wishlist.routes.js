import { Router } from 'express'
import {
    getAllWishlistsController,
    getWishlistByIdController,
    addWishlistController,
    updateWishlistByIdController,
    deleteWishlistByIdController,
} from '../controllers/index.js'
import { validateWishlist, authGuard, roleGuard } from '../middlewares/index.js'
export const wishlistRouter = Router()
wishlistRouter.get('/', getAllWishlistsController)
wishlistRouter.get('/:id', getWishlistByIdController)
wishlistRouter.post('/', addWishlistController)
wishlistRouter.put('/:id', updateWishlistByIdController)
wishlistRouter.delete('/:id', deleteWishlistByIdController)
