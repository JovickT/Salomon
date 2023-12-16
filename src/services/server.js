const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import du module cors

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000' // Remplacez par l'URL de votre client React
}));

app.post('/', (req, res) => {
    const { firstname, lastname, email, password, verifyPassword } = req.body;
    // Utilisez ces données comme nécessaire
    localStorage.setItem('formData', JSON.stringify(req.body));
    console.log("Données du formulaire :", req.body);
    res.send('Données reçues');
});

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});