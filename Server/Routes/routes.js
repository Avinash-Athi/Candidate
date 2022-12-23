const express = require('express');
const router = express.Router();

const adminController = require("../Controllers/admin");

router.post('/addCandidate', adminController.postAddCandidade);
router.get('/all', adminController.getAllCandidates);
router.post('/postmultiple', adminController.postMultiple);

module.exports = router;