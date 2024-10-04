const express = require('express');
const router = express.Router();
const eegDataController = require('../controllers/eegDataController');

// routes for eeg data
router.post('/', eegDataController.createEEGData);
router.get('/patient/:patientId', eegDataController.getEEGDataByPatient);
router.delete('/:id', eegDataController.deleteEEGData);

module.exports = router;
