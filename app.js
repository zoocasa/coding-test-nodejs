const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Express server running');
});

const PORT = 8080;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
}

module.exports = app;
