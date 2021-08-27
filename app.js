const express = require("express");

const morgan = require("morgan");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const scenarioRouter = require("./routes/scenarioRoutes");
const errorHandler = require("./controllers/errorController");

const app = express();
// cors
app.use(
  cors({
    credentials: true,
  })
);
app.all("*", cors());
app.options("*", cors());

app.use(morgan("dev"));

app.use(express.json({ limit: "1584540kb" }));
app.use(express.urlencoded({ extended: true, limit: "12609009kb" }));
app.use("/api/v1/users", userRouter);
app.use("/api/v1/scenarios", scenarioRouter);

app.use("*", (req, res) => {
  res.status(404).json({
    status: "error end point not found",
    message: req.originalUrl,
  });
});

app.use(errorHandler);
module.exports = app;
