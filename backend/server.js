// server.js
import express from 'express';
import fs from 'fs';

const app = express();
const PORT = 3000;


app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express backend!' });
});

app.get('/api/lessons', (req, res) => {
  fs.readFile('./lessonData.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading file');
    }
    res.json(JSON.parse(data)); // Sends the parsed JSON data
  });
   });

  app.get('/api/step', (req, res) => {
  fs.readFile('./stepData.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading file');
    }
    res.json(JSON.parse(data)); // Sends the parsed JSON data
  });
   });

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});



