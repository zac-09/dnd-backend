const AppError = require("../utils/error");
const catchAsync = require("../utils/catchAsync");
const Scenario = require("../models/scenario");

exports.saveScenario = catchAsync(async (req, res, next) => {
  const scenario = await Scenario.create(req.body);
  res.status(201).json({
    status: "success",
    scenario,
  });
});

exports.getScenario = catchAsync(async (req, res, next) => {
  const scenario = await Scenario.findOne({ _id: req.params.id });
  if (!scenario) return next(new AppError("Scenario not found", 404));
  res.status(200).json({
    status: "success",
    scenario,
  });
});
exports.getAllScenarios = catchAsync(async (req, res, next) => {
  const scenarios = await Scenario.find({});
  res.status(200).json({
    status: "success",
    scenarios,
  });
});

exports.deleteScenario = catchAsync(async (req, res, next) => {
  const scenario = await Scenario.findOne({ _id: req.params.id });
  if (!scenario) return next(new AppError("Scenario not found", 404));
  await Scenario.findByIdAndDelete({ _id: req.params.id });
  res.status(204).json({
    status: "success",
  });
  res;
});

exports.editScenario = catchAsync(async (req, res, next) => {
console.log("reached here edit")

  const scenario = await Scenario.findOne({ _id: req.params.id });
  if (!scenario) return next(new AppError("Scenario not found", 404));
console.log("reached here",scenario)
  const updatedScenario = await Scenario.findByIdAndUpdate(req.params.id, req.body, {
    new: true, 
    runValidators: true,
  });
  res.status(200).json({
    status: "success", 
    updatedScenario, 
  });
  res;
});
