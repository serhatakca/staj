const express = require('express');
const app = express();
const PORT = 3333;


app.get('/status', (req, res) => {
  res.send('OK');
});

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:" + PORT);
});

