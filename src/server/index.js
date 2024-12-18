import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
console.log("__filename", __filename)
const __dirname = path.dirname(__filename);
console.log("__dirname", __dirname)

// Load environment variables from the root .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// setting up cors and json middleware
app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("MongoDB connection error:", err));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/signup', (req, res) => {
    const { name, lastName, specialization, username, email, password, confirmPassword } = req.body;
    res.status(200).json({ 
        message: 'Signup successful',
        user: { name, lastName, specialization, username, email }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;