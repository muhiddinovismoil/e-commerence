import express from 'express'
import morgan from 'morgan'
import {
    createUserTable,
    addressTable,
    createSocialProfilesTable,
    creaetCategoryTable,
    createProductsTable,
    createCartTables,
    createCartItemTable,
    createOrdersTable,
    createReviewsTables,
    createWishlistTable,
} from './models/index.js'
import {
    userRouter,
    addressRouter,
    socialProfileRouter,
    authRouter,
    categoryRouter,
    productsRouter,
    cartsItemRouter,
    cartsRouter,
    orderRouter,
    reviewRouter,
    wishlistRouter,
} from './routes/index.js'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/address', addressRouter)
app.use('/api/v1/socialprofile', socialProfileRouter)
app.use('/api/v1/category', categoryRouter)
app.use('/api/v1/products', productsRouter)
app.use('/api/v1/carts', cartsRouter)
app.use('/api/v1/carts-item', cartsItemRouter)
app.use('/api/v1/orders', orderRouter)
app.use('/api/v1/reviews', reviewRouter)
app.use('/api/v1/wishlists', wishlistRouter)

app.use((err, req, res, next) => {
    if (err) {
        return res.send(err.message)
    }
    return res.send('Not found')
})
app.get('/api/v1/setup', async (req, res) => {
    await createUserTable()
    await addressTable()
    await createSocialProfilesTable()
    await creaetCategoryTable()
    await createProductsTable()
    await createCartTables()
    await createCartItemTable()
    await createOrdersTable()
    await createReviewsTables()
    await createWishlistTable()
    res.status(200).send({ msg: 'Tables are created Successfully' })
})
export default app
