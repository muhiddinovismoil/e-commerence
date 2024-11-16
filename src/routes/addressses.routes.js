import { Router } from 'express'
import {
    getAllAddresses,
    getAddressById,
    createAddresses,
    updateAddresses,
    deleteAddresses,
} from '../controllers/index.js'
import { validateAddress, authGuard, roleGuard } from '../middlewares/index.js'
import { addressSchema } from '../validations/index.js'
export const addressRouter = Router()
addressRouter.get('/', authGuard, getAllAddresses)
addressRouter.get('/:id', authGuard, getAddressById)
addressRouter.post(
    '/',
    authGuard,
    validateAddress(addressSchema),
    createAddresses,
)
addressRouter.put(
    '/:id',
    authGuard,
    roleGuard('admin', 'manager'),
    updateAddresses,
)
addressRouter.delete(
    '/:id',
    authGuard,
    roleGuard('admin', 'manager'),
    deleteAddresses,
)
