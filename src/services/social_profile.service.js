import pool from '../databases/index.js'
export async function getAllProfilesService() {
    try {
        const addressses = await pool.query(`SELECT * FROM social_profiles`)
        return addressses.rows
    } catch (error) {
        return error
    }
}
export async function getProfilesByIdService(id) {
    try {
        const addressses = await pool.query(
            `SELECT * FROM social_profiles WHERE id = $1`,
            [id],
        )
        return addressses.rows[0]
    } catch (error) {
        return error
    }
}
export async function createProfilesService(data) {
    try {
        const addressses = await pool.query(
            `INSERT INTO social_profiles(
                user_id,
                platform,
                platform_user
            ) VALUES(
                $1,
                $2,
                $3
            ) RETURNING *`,
            [data.user_id, data.platform, data.platform_user],
        )
        return addressses.rows[0]
    } catch (error) {
        return error
    }
}
export async function updateProfilesService(data, oldData, id) {
    try {
        const addressses = await pool.query(
            `UPDATE social_profiles SET platform=$1,platform_user=$2 WHERE id=$3 RETURNING *`,
            [
                data.platform || oldData.platform,
                data.platform_user || oldData.platform_user,
                id,
            ],
        )
        return addressses.rows[0]
    } catch (error) {
        return error
    }
}
export async function deleteProfilesService(id) {
    try {
        const addressses = await pool.query(
            `DELETE FROM social_profiles WHERE id=$1 RETURNING *`,
            [id],
        )
        return addressses.rows[0]
    } catch (error) {
        return error
    }
}
