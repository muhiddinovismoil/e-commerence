import {
    getAllProfilesService,
    getProfilesByIdService,
    createProfilesService,
    updateProfilesService,
    deleteProfilesService,
} from '../services/index.js'
import { logger } from '../utils/index.js'
export async function getAllProfiles(req, res, next) {
    try {
        logger.info(`Route: /api/v1/socialprofile Method: GET`)
        const data = await getAllProfilesService()
        if (!data) {
            return res.status(404).send('NOT FOUND')
        }
        res.status(200).send({
            msg: 'OK',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/socialprofile Method: GET,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function getProfileById(req, res, next) {
    try {
        const id = req.params.id
        logger.info(`Route: /api/v1/socialprofile/${id} Method: GET`)
        const data = await getProfilesByIdService(id)
        if (!data) {
            return res.status(404).send('NOT FOUND')
        }
        res.status(200).send({
            msg: 'OK',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/socialprofile/${id} Method: GET,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function createProfile(req, res, next) {
    try {
        logger.info(`Route: /api/v1/socialprofile Method: POST`)
        const newData = await createProfilesService(req.body)
        if (!newData) {
            return res.status(400).send('Not created with some reasons')
        }
        res.status(200).send({
            msg: 'Created',
            createdAddress: newData,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/socialprofile Method: POST,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function updateProfile(req, res, next) {
    try {
        const id = req.params.id
        logger.info(`Route: /api/v1/socialprofile/${id} Method: PUT`)
        const data = await getProfilesByIdService(id)
        const updateAddress = await updateProfilesService(req.body, data, id)
        if (!data) {
            return res.status(404).send('NOT FOUND')
        }
        res.status(200).send({
            msg: 'Updated Successfully',
            data: updateAddress,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/socialprofile/${id} Method: PUT,Error: ${error.message}`,
        )
        next(error)
    }
}
export async function deleteProfile(req, res, next) {
    try {
        const id = req.params.id
        logger.info(`Route: /api/v1/socialprofile/${id} Method: DELETE`)
        const removeAddress = await deleteProfilesService(id)
        if (!removeAddress) {
            return res.status(404).send('Not found or maybe deleted before')
        }
        res.status(200).send({
            msg: 'Deleted',
            removedData: removeAddress,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/socialprofile/${id} Method: DELETE,Error: ${error.message}`,
        )
        next(error)
    }
}
