const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const uploadRoutes = require('./routes/upload');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/upload', uploadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
