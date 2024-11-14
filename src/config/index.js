import db from './db.js'
import app from './app.js'
export const config = {
    ...db,
    ...app,
}
