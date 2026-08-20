import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Message from './models/Message.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio-mail')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/messages', async (req, res) => {
  try {
    const { name, contact, subject, description } = req.body;
    
    if (!name || !contact || !subject || !description) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newMessage = new Message({
      name,
      contact,
      subject,
      description,
    });

    await newMessage.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
