const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 6000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (replace <URI> with your MongoDB connection string)
mongoose.connect('mongodb+srv://abrar2004myself:1QBs8Z8WcaqEN1en@cluster0.6g444.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a schema for user data
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
    email: String,
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema);

// Save user data
app.post('/api/register', async (req, res) => {
    const userData = req.body;
    try {
        const user = new User(userData);
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(400).send('Error registering user');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
