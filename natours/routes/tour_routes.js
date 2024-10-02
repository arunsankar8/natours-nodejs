const express = require('express');
const tourController = require('../controller/tour_controller')
const router = express.Router();

router.param('id', tourController.checkId);
router.route('/').get(tourController.getAllTours).post(tourController.addNewTour);
router.route('/:id').get(tourController.getTourData).
put(tourController.updateTourData).delete(tourController.deleteTour);


module.exports = router;