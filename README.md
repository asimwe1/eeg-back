# EEG-BACKEND

## Overview
The Brain Stimulation System is a web application designed to monitor and adjust brain activity in real-time for patients with neurological and psychological disorders. The system utilizes EEG data to provide insights into brain function and administer non-invasive brain stimulation treatments.

## Features
- **Patient Management**: Create, read, update, and delete patient records.
- **EEG Data Management**: Upload and retrieve EEG data associated with patients.
- **Real-Time Monitoring**: Monitor brain activity in real-time through a web interface.
- **File Upload**: Upload JSON files containing patient and EEG data for batch processing.

## Technologies Used
- **Node.js**: Backend server
- **Express.js**: Web framework for Node.js
- **MongoDB**: Database for storing patient and EEG data
- **Mongoose**: ODM for MongoDB
- **multer**: Middleware for handling file uploads
- **express-validator**: Middleware for validating incoming request data
- **winston**: Logging library for logging errors and application events

## Installation
1. Clone the repository:
   ```bash
   git clone git@github.com:asimwe1/egg-back
   cd eeg-back
   ```

Install the dependencies:

```bash
npm install
```

Create a .env file in the root directory and add your MongoDB URI:

```plaintext
MONGO_URI=
```
Start the server:

```bash
    npm start
```

Usage

    Access the web application by navigating to http://localhost:5000 in your browser.
    Use the provided forms to input patient data and retrieve EEG data.

Contributing

Contributions are welcome! If you would like to contribute, please fork the repository and submit a pull request.
License

This project is licensed under the MIT License. See the LICENSE file for details.

### Summary
- The **`.gitignore`** file ensures that sensitive data (like the `.env` file) and unnecessary files (like `node_modules`) are not tracked by Git.
- The **`README.md`** file provides a clear overview of the project, installation instructions, features, and usage information, making it easier for others (or future you) to understand and work with the project.

Feel free to modify any of the contents to better suit your project's specifics! Let me know if you need further assistance!

