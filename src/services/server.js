const express = require('express');

const app = express();

app.post('/login', (req, res) => {

    console.log("req:",req,"\nres:",res);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});