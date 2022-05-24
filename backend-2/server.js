const express = require('express')
const app = express();
const cors = require('cors')

// json Middleware.
app.use(express.json())
app.use(cors())

app.set('views', './views')
app.set('view engine', 'pug')

const mongoose  = require('mongoose')
const { Schema } = mongoose;


// Schema Creation for Product Entity
    const ProductSchema = new  Schema({
        title:  String, // String is shorthand for {type: String}
        price: Number
    });

    const Product = mongoose.model('Product', ProductSchema);


const connectDB  = async() => {
    const conn = await mongoose.connect('mongodb://localhost:27017/productDB',
    { useNewUrlParser: true, useUnifiedTopology: true }
    );

    console.log(`Your Express application is connected to Mongo Server`);

}

connectDB();


//  Creating Rest Api's
app.post('/product', async (req, res)=>{
    const data = await Product.create(req.body);
    res.json(data);
;})


app.get('/productjson', async (req, res)=>{
    const products = await Product.find();
    res.json(products)
})

app.get('/product', async (req, res)=>{
    const products = await Product.find();
    // res.json(products)
    res.render('product', {products})
})

app.get('/test', (req, res) => {
    res.render('product', { title: 'Hey', message: 'Hello there!' })
  })



app.listen(5000, console.log('Server is listening on port 5000'))