import { Router } from 'express'
export const categoryRouter = Router()
categoryRouter.get('/')
categoryRouter.get('/:id')
categoryRouter.post('/')
categoryRouter.put('/:id')
categoryRouter.delete('/:id')
