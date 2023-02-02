const express = require('express');
const app = express();
const geolocation = require('geolocation');

app.get('/location', (req, res) => {
  geolocation.getCurrentPosition((err, position) => {
    if (err) {
      return res.status(500).send({ error: err.message });
    }

    const { latitude, longitude } = position.coords;
    res.send({ latitude, longitude });
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Location API is listening on port ${port}`);
});
