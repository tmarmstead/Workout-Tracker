const router = require("express").Router();
const workout = require("./workout");

router.use("/workouts", workout);

module.exports = router;
