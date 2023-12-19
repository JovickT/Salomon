const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import du module cors

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000/',
    methods: ['GET', 'POST'], // Définissez les méthodes que vous autorisez
    credentials: true,
}));

app.post('/', (req, res) => {
    const { email, password } = req.body;
    // Vérification des identifiants ici...
    if (email  && password ) {
        res.status(200).json({ message: 'Connexion réussie' });
    } else {
        res.status(401).json({ message: 'Identifiants invalides' });
    }
});

app.post('/account', (req, res) => {
    const { firstname, lastname, email, password, verifyPassword } = req.body;
    // Vérification des identifiants ici...
    if (firstname && lastname, email && password && verifyPassword) {
        res.status(200).json({ message: 'Connexion réussie' });
    } else {
        res.status(401).json({ message: 'Identifiants invalides' });
    }
});

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});