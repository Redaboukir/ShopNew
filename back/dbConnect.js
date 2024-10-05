// dbConnect.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const dbUri = `mongodb+srv://redaboy71:t4G0kFvZ2cQ0OHDE@cluster0shop.qs60f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0SHOP`;
        
        // Connexion à la base de données sans les options obsolètes
        await mongoose.connect(dbUri);
        console.log('Connexion à la base de données réussie');
    } catch (error) {
        if (error.message.includes('failed to authenticate')) {
            console.error('Échec de l\'authentification : identifiant ou mot de passe incorrect.');
        } else {
            console.error('Erreur de connexion à la base de données:', error.message);
        }
        process.exit(1);
    }
};

module.exports = connectDB; // Exporte la fonction
