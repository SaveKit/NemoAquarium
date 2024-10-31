const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001; // You can use any port

// Enable CORS for the front-end
app.use(cors());

// Serve the image
app.get('/image', (req, res) => {
    const imagePath = path.join(__dirname, 'frame_objectdetection.jpg'); // Adjust the path as necessary
    fs.access(imagePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error('Image not found:', err); // Log the error
            return res.status(404).send('Image not found');
        }
        res.sendFile(imagePath);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
