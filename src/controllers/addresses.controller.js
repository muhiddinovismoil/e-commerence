import {
    getAddressByIdService,
    getAllAddressesService,
    createAddressService,
    updateAddressService,
    deleteAddressService,
} from '../services/index.js'
import { logger } from '../utils/logger.js'
export async function getAllAddresses(req, res, next) {
    try {
        logger.info(`Route: /api/v1/address Method: GET`)
        const data = await getAllAddressesService(`SELECT * FROM addresses`)
        if (!data) {
            return res.status(404).send('NOT FOUND')
        }
        res.status(200).send({
            msg: 'OK',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/address Method: GET,Error: ${error.message}`
        )
        next(error)
    }
}
export async function getAddressById(req, res, next) {
    try {
        const id = req.params.id
        logger.info(`Route: /api/v1/address/${id} Method: GET`)
        const data = await getAddressByIdService(
            `SELECT * FROM addresses WHERE id = $1`,
            [id]
        )
        if (!data) {
            return res.status(404).send('NOT FOUND')
        }
        res.status(200).send({
            msg: 'OK',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/address/${id} Method: GET,Error: ${error.message}`
        )
        next(error)
    }
}
export async function createAddresses(req, res, next) {
    try {
        logger.info(`Route: /api/v1/address Method: POST`)
        const {
            user_id,
            title,
            address_line_1,
            address_line_2,
            country,
            city,
            postal_code,
            phone_number,
        } = req.body
        const newData = await createAddressService(
            `INSERT INTO addresses(user_id,title,address_line_1,address_line_2,country,city,postal_code,phone_number)
                VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
            [
                user_id,
                title,
                address_line_1,
                address_line_2,
                country,
                city,
                postal_code,
                phone_number,
            ]
        )
        if (!newData) {
            return res.status(400).send('Not created with some reasons')
        }
        res.status(200).send({
            msg: 'Created',
            createdAddress: newData,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/address Method: POST,Error: ${error.message}`
        )
        next(error)
    }
}
export async function updateAddresses(req, res, next) {
    try {
        const id = req.params.id
        logger.info(`Route: /api/v1/address/${id} Method: PUT`)
        const {
            title,
            address_line_1,
            address_line_2,
            country,
            city,
            postal_code,
            phone_number,
        } = req.body
        const data = await getAddressByIdService(
            `SELECT * FROM addresses WHERE id = $1`,
            [id]
        )
        const updateAddress = await updateAddressService(
            `UPDATE addresses SET title=$1,address_line_1=$2,address_line_2=$3,country=$4,city=$5,postal_code=$6,phone_number=$7
            WHERE id=$8 RETURNING *`,
            [
                title || data.title,
                address_line_1 || data.address_line_1,
                address_line_2 || data.address_line_2,
                country || data.country,
                city || data.city,
                postal_code || data.postal_code,
                phone_number || data.phone_number,
                id,
            ]
        )
        if (!data) {
            return res.status(404).send('NOT FOUND')
        }
        res.status(200).send({
            msg: 'Updated Successfully',
            data: updateAddress,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/address/${id} Method: PUT,Error: ${error.message}`
        )
        next(error)
    }
}
export async function deleteAddresses(req, res, next) {
    try {
        const id = req.params.id
        logger.info(`Route: /api/v1/address/${id} Method: DELETE`)
        const removeAddress = await deleteAddressService(
            `DELETE FROM addresses WHERE id=$1 RETURNING *`,
            [id]
        )
        if (!removeAddress) {
            return res.status(404).send('Not found or maybe deleted before')
        }
        res.status(200).send({
            msg: 'Deleted',
            removedData: removeAddress,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/address/${id} Method: DELETE,Error: ${error.message}`
        )
        next(error)
    }
}
