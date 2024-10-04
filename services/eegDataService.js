const EEGData = require('../models/eegDataModel');
const { parseCSV } = require('../utils/csvParser');


exports.processEEGCSV = async (filePath, patientId, recordSetName) => {
    try {
        const eegDataRows = await parseCSV(filePath);
        const eegData = eegDataRows.map(row => ({
            column: Number(row['column']),
            value: Number(row['value']),
        }));

        const newEEGData = new EEGData({ patientId, recordSetName, data: eegData });
        await newEEGData.save();
    } catch (err) {
        console.error('Error processing EEG CSV:', err.message);
        throw new Error('EEG data processing failed');
    }
};
