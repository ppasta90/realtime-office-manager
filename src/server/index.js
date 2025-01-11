import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import pino from 'pino';
import pinoHttp from 'pino-http';
import bcrypt from 'bcryptjs';
import User from '../db/models/user.js';
// logger setup
const logger = pino({
    transport: {
        target: 'pino-pretty'
    },
})

// Initialize the HTTP logger middleware
const httpLogger = pinoHttp({
    logger: logger
});

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from the root .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// setting up cors and json middleware
app.use(cors());
app.use(express.json());
app.use(httpLogger);

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => logger.info("Connected to MongoDB"))
    .catch((err) => logger.error("MongoDB connection error:", err));

app.post('/signup', async (req, res) => {
    try {
        const { name, lastName, specialization, username, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        const existingUserByEmail = await User.findOne({ email });
        const existingUserByUsername = await User.findOne({ username });

        if (existingUserByEmail) {
            return res.status(400).json({
                message: 'User with this email already exists'
            });
        }

        if (existingUserByUsername) {
            return res.status(400).json({
                message: 'User with this username already exists'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            name,
            lastName,
            specialization,
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({
            message: 'User created successfully',
            user: {
                name,
                lastName,
                specialization,
                username,
                email
            }
        });

    } catch (error) {
        logger.error('Signup error:', error);
        res.status(500).json({ message: 'Error creating user' });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        logger.error('Login error:', error);
        res.status(500).json({ message: 'Error logging in' });
    }
});

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});

export default app;