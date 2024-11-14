import {
    getAllProfilesService,
    getProfilesByIdService,
    createProfilesService,
    updateProfilesService,
    deleteProfilesService,
} from '../services/index.js'
import { logger } from '../utils/logger.js'
export async function getAllProfiles(req, res, next) {
    try {
        logger.info(`Route: /api/v1/socialprofile Method: GET`)
        const data = await getAllProfilesService(
            `SELECT * FROM social_profiles`
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
            `Route: /api/v1/socialprofile Method: GET,Error: ${error.message}`
        )
        next(error)
    }
}
export async function getProfileById(req, res, next) {
    try {
        const id = req.params.id
        logger.info(`Route: /api/v1/socialprofile/${id} Method: GET`)
        const data = await getProfilesByIdService(
            `SELECT * FROM social_profiles WHERE id = $1`,
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
            `Route: /api/v1/socialprofile/${id} Method: GET,Error: ${error.message}`
        )
        next(error)
    }
}
export async function createProfile(req, res, next) {
    try {
        logger.info(`Route: /api/v1/socialprofile Method: POST`)
        const { user_id, platform, platform_user } = req.body
        const newData = await createProfilesService(
            `INSERT INTO social_profiles(user_id, platform, platform_user)
                VALUES($1,$2,$3) RETURNING *`,
            [user_id, platform, platform_user]
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
            `Route: /api/v1/socialprofile Method: POST,Error: ${error.message}`
        )
        next(error)
    }
}
export async function updateProfile(req, res, next) {
    try {
        const id = req.params.id
        logger.info(`Route: /api/v1/socialprofile/${id} Method: PUT`)
        const { platform, platform_user } = req.body
        const data = await getProfilesByIdService(
            `SELECT * FROM social_profiles WHERE id = $1`,
            [id]
        )
        const updateAddress = await updateProfilesService(
            `UPDATE social_profiles SET platform=$1,platform_user=$2 WHERE id=$3 RETURNING *`,
            [platform || data.platform, platform_user || data.platform_user, id]
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
            `Route: /api/v1/socialprofile/${id} Method: PUT,Error: ${error.message}`
        )
        next(error)
    }
}
export async function deleteProfile(req, res, next) {
    try {
        const id = req.params.id
        logger.info(`Route: /api/v1/socialprofile/${id} Method: DELETE`)
        const removeAddress = await deleteProfilesService(
            `DELETE FROM social_profiles WHERE id=$1 RETURNING *`,
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
            `Route: /api/v1/socialprofile/${id} Method: DELETE,Error: ${error.message}`
        )
        next(error)
    }
}
