const express = require("express");
const {
  getAllScenarios,
  saveScenario,
  getScenario,
  deleteScenario,
  editScenario,
  getUserScenarios,
} = require("../controllers/scenarioController");
const { protect } = require("../controllers/userController");
const router = express.Router();

router.post("/saveScenario", protect, saveScenario);
router.get("/userScenarios", protect, getUserScenarios);
router.get("/:id", getScenario);
router.delete("/:id", protect, deleteScenario);
router.patch("/:id", protect, editScenario);

router.get("/", getAllScenarios);
module.exports = router;
 