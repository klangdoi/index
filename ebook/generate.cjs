const fs = require('fs');

const files = fs.readdirSync('./images');

const data = files.map(file => ({
  name: file.replace(/\.[^/.]+$/, ""),
  file: `images/${file}`
}));

fs.writeFileSync('books.json', JSON.stringify(data, null, 2));

console.log('✅ books.json generated!');