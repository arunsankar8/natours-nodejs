const express = require("express")
const tourRoutes = require('./routes/tour_routes')
const morgan = require("morgan");

const app = express();


console.log(process.env.NODE_ENV)

app.use(express.json());

app.use((req,res,next)=>{
   // console.log(`${req.method}  - ${req.url}`);
    next();
})

if (process.env.NODE_ENV  === 'development') {
    app.use(morgan('dev'))
}


app.use('/api/v1/tours',tourRoutes)

module.exports = app;
