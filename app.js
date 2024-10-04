const express = require('express');
const mongoose = require('mongoose');
const patientRoutes = require('./routes/patientRoutes');
const eegDataRoutes = require('./routes/eegDataRoutes');
const multer = require('multer');
const fs = require('fs');
const dbConfig = require('./config/db');
const path = require('path');
const app = express();

require('dotenv').config();
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(dbConfig.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const upload = multer({ dest: 'uploads/' });

app.post('/api/upload-json', upload.single('jsonFile'), (req, res) => {
    const filePath = req.file.path;
  // Allow all origins; you can configure it as needed

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to read the file' });
        }

        const jsonData = JSON.parse(data);
        processJSONData(jsonData);
        res.status(200).json({ message: 'JSON file processed successfully' });
    });
});

const processJSONData = async (jsonData) => {
    console.log(jsonData);
    jsonData.forEach(async (item) => {
        const newRecord = new EEGData({
            patientId: item.patientId,
            recordSetName: item.recordSetName,
            data: item.data,
        });

        await newRecord.save();
    });
};

app.use('/api/patients', patientRoutes);
app.use('/api/eegdata', eegDataRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
