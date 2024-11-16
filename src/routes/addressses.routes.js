import { Router } from 'express'
import {
    getAllAddresses,
    getAddressById,
    createAddresses,
    updateAddresses,
    deleteAddresses,
} from '../controllers/index.js'
import { validateAddress } from '../middlewares/index.js'
import { addressSchema } from '../validations/index.js'
export const addressRouter = Router()
addressRouter.get('/', getAllAddresses)
addressRouter.get('/:id', getAddressById)
addressRouter.post('/', validateAddress(addressSchema), createAddresses)
addressRouter.put('/:id', updateAddresses)
addressRouter.delete('/:id', deleteAddresses)
