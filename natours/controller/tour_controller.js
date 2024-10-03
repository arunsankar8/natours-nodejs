const Tour = require("./../models/tour_models");

exports.getAllTours = async function (req, res) {
  const tours = await Tour.find();

  res.status(200).json({
    status: "success",
    data: {
      tours,
    },
  });
};

exports.getTourData = async function (req, res) {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    return returnError(res, error);
  }
};
exports.updateTourData = async function (req, res) {
  try {
    const tour = await Tour.findOneAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    return returnError(res, error);
  }
};
exports.addNewTour = async function (req, res) {
  try {
    const tour = await Tour.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    return returnError(res, error);
  }
};
exports.deleteTour = async function (req, res) {
  const tour = await Tour.findOneAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};

const returnError = (res, errorMsg) => {
  return res.status(400).json({
    status: "Failure",
    message: errorMsg,
  });
};
