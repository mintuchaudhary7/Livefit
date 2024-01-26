// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/authdemo',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

// Create user schema and model
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});



const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname, '/public');
});

app.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    //res.redirect('/login');
    res.end({"shsh":"shsh"})
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
      res.sendFile(path.join(__dirname, "public/account.html"));
      // res.send('Login successful!');
    } else {
      res.send('Invalid username or password');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
