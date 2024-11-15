import express from 'express'
import morgan from 'morgan'
import {
    createUserTable,
    addressTable,
    createSocialProfilesTable,
} from './models/index.js'
import {
    userRouter,
    addressRouter,
    socialProfileRouter,
    authRouter,
} from './routes/index.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/address', addressRouter)
app.use('/api/v1/socialprofile', socialProfileRouter)
app.get('/api/v1/setup', async (req, res) => {
    await createUserTable()
    await addressTable()
    await createSocialProfilesTable()
    res.send('Table created ...')
})
export default app
