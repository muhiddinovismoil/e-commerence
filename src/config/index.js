import db from './db.js'
import app from './app.js'
import email from './email.js'
import jwt from './jwt.js'
export const config = {
    ...db,
    ...app,
    ...email,
    ...jwt,
}
