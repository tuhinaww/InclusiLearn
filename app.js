const express = require('express');
const session = require('express-session');
const app = express();

const http = require('http');
const server = http.createServer(app);

const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat message', (message) => {
    io.emit('chat message', message);
  });
});

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

const isLoggedIn = require('./middlewares/isLoggedIn');

// Navigation

app.get('/', (req, res) => {
    res.send('welcome');
})

const loginRoutes = require('./routes/loginRoutes');
app.use('/', loginRoutes);

const registrationRoutes = require('./routes/registrationRoutes'); 
app.use('/', registrationRoutes); 

const uploadRoutes = require('./routes/uploadPostRoutes');
app.use('/', isLoggedIn, uploadRoutes);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
})