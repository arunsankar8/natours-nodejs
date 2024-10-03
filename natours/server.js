const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const app = require('./app')
const DB = process.env.DATABASE.replace('<db_password>',process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {   
}).then(() => {
   console.log('DB connection successful!');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, '127.0.0.1',()=>{
    console.log("Server is running");    
})