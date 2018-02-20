const router = require("express").Router();
const nanaRoutes = require("./nana");

router.use("/nana", nanaRoutes);

module.exports = router;
