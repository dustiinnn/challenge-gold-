const express = require('express')

const app = express()
const productRouter = require('./routers/products.router')
const orderRouter = require('./routers/orders.router')
const userRouter = require('./routers/users.router')

app.use(express.json()) 

app.use(productRouter)
app.use(orderRouter)
app.use(userRouter)

app.use((err, req, res, next) => {
    console.log(err)

    return res.status(err.status).json({
        status: false,
        data: {},
        error: err.error
    })
})

module.exports = app