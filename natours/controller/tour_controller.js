const fs = require("fs");

const FILE_NAME = `${__dirname}/../dev-data/data/tours-simple.json`;

const toursData = fs.readFileSync(FILE_NAME);

const tours = JSON.parse(toursData);

exports.getAllTours = function (req, res) {
    res.status(200).json({
        status: "success",
        data: {
            tours
        }
    });
 
}

exports.checkId = function (req,res,next,val) {
    
 const id = parseInt(val);
    const tour = tours.find(value => value.id === id);
    if (!tour) {
        return res.status(404).json({
            status: "failure",
            message: "Invalid id"
        });
    }
    next();
}
exports.getTourData = function(req, res){

    const id = parseInt(req.params.id);
    const tour = tours.find(value => value.id === id);
    if (!tour) {
        return res.status(404).json({
            status: "failure",
            message: "Invalid id"
        });
    }
          res.status(200).json({
        status: "success",
        data: {
            tour
        }
    });
    
}
exports.updateTourData = function(req, res){

    const id = parseInt(req.params.id);
    const tourData = tours.find(value => value.id === id);
    if (!tourData) {
        return res.status(404).json({
            status: "failure",
            message: "Invalid id"
        });
    }
    const tour = Object.assign({id},req.body);
    const index = tours.indexOf(tourData);
    tours[index] = tour;
    fs.writeFile(FILE_NAME,JSON.stringify(tours), err => {
        res.status(200).json({
       status: "success",
       data: {
           tour
       }
   });
   })
    
}
exports.addNewTour = function(req, res){

    const data = req.body;
    const id = tours[tours.length-1].id+1;
    const tour = Object.assign({ id }, data);
    tours.push(tour);
    fs.writeFile(FILE_NAME,JSON.stringify(tours), err => {
         res.status(201).json({
        status: "success",
        data: {
            tour
        }
    });
    })
}
exports.deleteTour = function(req, res){

    const id = parseInt(req.params.id);
    const tour = tours.find(element=>element.id === id );
    if(!tour){
       return res.status(404).json({
            status: "failure",
            message  : "No element with id"
        });
    }
    const index = tours.indexOf(tour);
    tours.splice(index, 1);
    fs.writeFile(FILE_NAME,JSON.stringify(tours), err => {
        
    res.status(200).json({
        status: "success",
        data: null
    });
   }) 
}