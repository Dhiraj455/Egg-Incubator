const Attribute = require("../model/Attribute");

module.exports.PostAttribute = (req, res) => {
  let response = {
    success: false,
    message: "",
    errMessage: "",
    close: false,
  };
  try {
    const { temperature, humidity, timeInHr } = req.body;
    const attribute = new Attribute({
      timeInHr,
      temperature,
      humidity,
    });
    attribute.save();
    if (temperature > 40 || humidity > 60) {
      response.message = "Alert! Temperature or humidity is high";
      response.close = true;
      res.status(200).json(response);
    } else {
      response.success = true;
      response.message = "Attribute saved successfully";
      res.status(200).json(response);
    }
  } catch(err) {
    console.log("Error", err);
    response.message = "Something went wrong!";
    response.errMessage = err.message;
    res.status(400).json(response);
  }
};

module.exports.GetAttribute = (req, res) => {
  let response = {
    success: false,
    message: "",
    errMessage: "",
    data: [],
  };
  try {
    Attribute.find({})
      .then((data) => {
        response.success = true;
        response.message = "Attribute fetched successfully";
        response.data = data;
        res.status(200).json(response);
      })
      .catch((err) => {
        console.log("Error", err);
        response.message = "Something went wrong!";
        response.errMessage = err.message;
        res.status(400).json(response);
      });
  } catch {
    console.log("Error", err);
    response.message = "Something went wrong!";
    response.errMessage = err.message;
    res.status(400).json(response);
  }
};