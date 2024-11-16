import {
    getAddressByIdService,
    getAllAddressesService,
    createAddressService,
    updateAddressService,
    deleteAddressService,
} from '../services/index.js'
import { logger } from '../utils/index.js'
export async function getAllAddresses(req, res, next) {
    try {
        logger.info(`Route: /api/v1/address Method: GET`)
        const data = await getAllAddressesService()
        if (!data) {
            return res.status(404).send('NOT FOUND')
        }
        res.status(200).send({
            msg: 'OK',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/address Method: GET,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function getAddressById(req, res, next) {
    try {
        const id = req.params.id
        logger.info(`Route: /api/v1/address/${id} Method: GET`)
        const data = await getAddressByIdService([id])
        if (!data) {
            return res.status(404).send('NOT FOUND')
        }
        res.status(200).send({
            msg: 'OK',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/address/${id} Method: GET,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function createAddresses(req, res, next) {
    try {
        logger.info(`Route: /api/v1/address Method: POST`)
        const newData = await createAddressService(req.body)
        if (!newData) {
            return res.status(400).send('Not created with some reasons')
        }
        res.status(200).send({
            msg: 'Created',
            createdAddress: newData,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/address Method: POST,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function updateAddresses(req, res, next) {
    try {
        const id = req.params.id
        logger.info(`Route: /api/v1/address/${id} Method: PUT`)
        const data = await getAddressByIdService([id])
        if (!data) {
            return res.status(404).send('NOT FOUND')
        }
        const updateAddress = await updateAddressService(req.body, data, id)
        res.status(200).send({
            msg: 'Updated Successfully',
            data: updateAddress,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/address/${id} Method: PUT,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function deleteAddresses(req, res, next) {
    try {
        const id = req.params.id
        logger.info(`Route: /api/v1/address/${id} Method: DELETE`)
        const removeAddress = await deleteAddressService([id])
        if (!removeAddress) {
            return res.status(404).send('Not found or maybe deleted before')
        }
        res.status(200).send({
            msg: 'Deleted',
            removedData: removeAddress,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/address/${id} Method: DELETE,Error: ${error.message}`,
        )
        next(error)
    }
}
