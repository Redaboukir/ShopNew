// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const connectDB = require('./dbConnect');
// Middleware pour traiter les données JSON
app.use(express.json());

// Route de base
app.get('/', (req, res) => {
    res.send('Bienvenue sur mon serveur Express !');
});

connectDB();


// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
