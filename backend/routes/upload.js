const express = require('express');
const multer = require('multer');
const csv = require('csv-parser');
const Data = require('../models/Data');
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const results = [];
  const fileBuffer = req.file.buffer;
  const stream = fileBuffer.toString('utf-8');
  
  stream.pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      try {
        await Data.insertMany(results);
        res.status(200).send('File uploaded and data saved.');
      } catch (error) {
        res.status(500).send('Error saving data.');
      }
    });
});

module.exports = router;
