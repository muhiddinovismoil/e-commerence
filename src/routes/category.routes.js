import { Router } from 'express'
import {
    getAllCategoriesController,
    getCategorieByIdController,
    createCategoryController,
    updateCategoryController,
    deleteCategoryController,
} from '../controllers/index.js'
import {} from '../middlewares/index.js'
export const categoryRouter = Router()
categoryRouter.get('/', getAllCategoriesController)
categoryRouter.get('/:id', getCategorieByIdController)
categoryRouter.post('/', createCategoryController)
categoryRouter.put('/:id', updateCategoryController)
categoryRouter.delete('/:id', deleteCategoryController)
