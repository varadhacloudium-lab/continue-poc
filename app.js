const express = require('express');
const app = express();
const PORT = 3000;
const greetings = {
  english: 'Hello',
  spanish: 'Hola',
  french: 'Bonjour',
  german: 'Hallo',
  italian: 'Ciao',
  portuguese: 'Olá',
  russian: 'Привет',
  chinese: '你好',
  japanese: 'こんにちは',
  korean: '안녕하세요',
  arabic: 'مرحبا',
  hindi: 'नमस्ते',
  dutch: 'Hallo',
  swedish: 'Hej',
  polish: 'Cześć'
};

app.use(express.static('public'));

app.get('/api/greetings', (req, res) => {
  res.json(greetings);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Hello in all languages:');
  Object.entries(greetings).forEach(([lang, greeting]) => {
    console.log(`${lang}: ${greeting}`);
  });
});
