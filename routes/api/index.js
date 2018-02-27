const router = require("express").Router();
const nanaRoutes = require("./cookwithnana");

router.use(nanaRoutes);

module.exports = router;
