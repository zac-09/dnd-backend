const AppError = require("../utils/error");
const catchAsync = require("../utils/catchAsync");
const Scenario = require("../models/scenario");
const CanvasScenario = require('../models/canvasScenario')

exports.saveScenario = catchAsync(async (req, res, next) => {
  const scenario = await Scenario.create({ ...req.body, userId: req.user._id });
  res.status(201).json({
    status: "success",
    scenario,
  });
});

exports.saveCanvasScenario = catchAsync(async (req, res, next) => {
  const scenario = await CanvasScenario.create({ data: req.body, userId: req.user._id, name: req.body.name });
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

exports.getUserCanvasScenarios = catchAsync(async (req, res, next) => {
  const canvasScenarios = await CanvasScenario.find({});
  res.status(200).json({
    status: "success",
    canvasScenarios,
  });
});

exports.getUserScenarios = catchAsync(async (req, res, next) => {
  const user = req.user;
  const scenarios = await Scenario.find({ userId: user._id });
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
  console.log("reached here edit");

  const scenario = await Scenario.findOne({ _id: req.params.id });
  if (!scenario) return next(new AppError("Scenario not found", 404));
  console.log("reached here", scenario);
  const updatedScenario = await Scenario.findByIdAndUpdate(
    req.params.id,
    
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    status: "success",
    updatedScenario,
  });
  res;
});
