const mongoose = require("mongoose");

const scenarioSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    createAt: {
      type: Date,
      default: Date.now(),
    },
    data: [],
    name: {
      type: String,
      required: [true, "you must give a scenario a name"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const scenarioModel = mongoose.model("Scenario", scenarioSchema);

module.exports = scenarioModel;
