const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '157326',
  database: 'revendeur'
});

app.post('/inscription', async (req, res) => {
  try {
    const { userName, birthday, mail, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    const newUser = { userName, birthday, mail, password: hashedPassword };

    db.query('INSERT INTO utilisateurs SET ?', newUser, (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'inscription :', err);
        res.status(500).json({ error: 'Erreur lors de l\'inscription' });
      } else {
        newUser.id = result.insertId;
        res.json(newUser);
      }
    });
  } catch (error) {
    console.error('Erreur lors de l\'inscription :', error);
    res.status(500).json({ error: 'Erreur lors de l\'inscription' });
  }
});

app.post('/user', (req, res) => {
  const { user, mail, password } = req.body;

  db.query('SELECT * FROM utilisateurs WHERE (user = ? OR mail = ?) AND password = ?', [user, mail, password], (err, results) => {
    if (err) {
      console.error('Erreur lors de la connexion :', err);
      res.status(500).json({ error: 'Erreur lors de la connexion' });
    } else {
      if (results.length > 0) {
        res.status(200).json({ message: 'Connexion réussie' });
      } else {
        res.status(401).json({ error: 'Identifiants incorrects' });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
