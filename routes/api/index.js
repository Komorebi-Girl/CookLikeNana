const router = require("express").Router();
const nanaRoutes = require("./nana");

router.use(nanaRoutes);

module.exports = router;
