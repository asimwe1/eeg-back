const EEGData = require('../models/eegDataModel');


exports.createEEGData = async (req, res) => {
    try {
        const { patientId, recordSetName, data } = req.body;
        const newEEGData = new EEGData({ patientId, recordSetName, data });
        const savedEEGData = await newEEGData.save();
        res.status(201).json(savedEEGData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.getEEGDataByPatient = async (req, res) => {
    const { patientId } = req.params;
    console.log(`Fetching EEG data for patientId: ${patientId}`);

    try {
        const eegData = await EEGData.find({ patientId: patientId });
        if (!eegData || eegData.length === 0) {
            return res.status(404).json({ message: 'EEG data not found' });
        }
        res.status(200).json(eegData);
    } catch (err) {
        console.error('Error fetching EEG data:', err);
        res.status(500).json({ message: err.message });
    }
};


exports.deleteEEGData = async (req, res) => {
    try {
        const eegData = await EEGData.findByIdAndDelete(req.params.id);
        if (!eegData) {
            return res.status(404).json({ message: 'EEG data not found' });
        }
        res.status(200).json({ message: 'EEG data deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
