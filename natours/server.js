const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const app = require('./app')
const DB = process.env.DATABASE.replace('<db_password>',process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {

   
}).then(() => {
   
    console.log('DB connection successful!');
    
    
});

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    }
});
const Tour = mongoose.model('Tour', tourSchema);

const tour = new Tour({
    name: "The forest hiker"
    , rating: 4.7,
    price: 500
});
tour.save().then((doc) => {
    console.log(doc);
    
}).catch(err => {
     console.log(err);
     
 });

const PORT = process.env.PORT || 8000;

app.listen(PORT, '127.0.0.1',()=>{
    console.log("Server is running");    
})