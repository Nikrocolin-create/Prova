const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
    console.log(req)
    res.send({
      token: 'test123',
    });
  });

app.use('/rate/:postId', (req, res) => {
    console.log(req)
    res.send({
      token: 'variabel',
    });
  });
app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));