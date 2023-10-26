const express = require('express');
const app = express();

const port = 5000;

// Navigation

app.get('/', (req, res) => {
    res.send('welcome');
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})