import express from 'express';
import mongoose from 'mongoose';
import mOrder from './Models/order';
import mProduct from './Models/product';
import router from './src/Controllers/Routes/orderRoutes';

const app = express()
mongoose.set('strictQuery', true)
const url= 'mongodb://127.0.0.1/6000'
// const con = mongoose.connect(url)

const port = process.env.PORT || 6000
app.listen(port, () => console.log('Listening on port', port))

// con.on('open', () => {
//     console.log('Database connected')
// })
// con.on('error', (err) => {
//     console.log(`Database error: ${err}`)
// })

app.use(express.json())

router.get('/', async(req,res) => {
    try{
        const order = await order.find()
        res.json(order)
    }catch(e){
        res.send('There is an error: ', e)
    }
})


// const order = require('.config/db')
// class DatabaseOperations{
//     constructer(table){
//         this.table = table
//     }
// }