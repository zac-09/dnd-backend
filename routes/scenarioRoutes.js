const express = require("express");
const {
  getAllScenarios,
  saveScenario,
  getScenario,
  deleteScenario,
  editScenario,
} = require("../controllers/scenarioController");
const router = express.Router();

router.post("/saveScenario", saveScenario);
router.get("/:id", getScenario);
router.delete("/:id", deleteScenario);
router.patch("/:id", editScenario); 

router.get("/", getAllScenarios);
module.exports = router;
