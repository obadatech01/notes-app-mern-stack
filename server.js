require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/userRouter');
const noteRouter = require('./routes/noteRouter');

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/users', userRouter);
app.use('/api/notes', noteRouter);

// Listen Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});

// Connect to MongoDB
const URL = process.env.MONGODB_URL
mongoose.connect(URL, {
  // useCreateIndex: true,
  // useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB');
});