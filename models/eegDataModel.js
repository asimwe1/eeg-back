const mongoose = require('mongoose');

const eegDataSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    recordSetName: {
        type: String,
        required: true,
    },
    data: [
        {
            column: Number,
            value: Number,
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('EEGData', eegDataSchema);
