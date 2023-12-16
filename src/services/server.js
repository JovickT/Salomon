const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { firstname, lastname, email, password, verifyPassword } = req.body;
    // Utilise ces données comme nécessaire
    console.log("Données du formulaire :", req.body);
    res.send('Données reçues');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});