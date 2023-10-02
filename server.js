const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
    res.send({
      token: 'test123',
    });
  });

app.use('/rate/:postId', (req, res) => {
    res.send({
      token: 'variabel',
    });
  });

let MOCK_DATA = [
  {clientId:"1",date:"", satisfaction:5, recommend:true,id:"1"},
  {clientId:"1",date:"", satisfaction:5, recommend:true,id:"2"},
  {clientId:"1",date:"", satisfaction:6, recommend:true,id:"3"},
  {clientId:"2",date:"", satisfaction:1, recommend:false,id:"4"},
  {clientId:"2",date:"", satisfaction:4, recommend:true,id:"5"},
  {clientId:"2",date:"", satisfaction:1, recommend:true,id:"6"},
  {clientId:"3",date:"", satisfaction:1, recommend:false,id:"7"},
  {clientId:"3",date:"", satisfaction:5, recommend:true,id:"8"},
  {clientId:"4",date:"", satisfaction:9, recommend:true,id:"9"},
  {clientId:"5",date:"", satisfaction:1, recommend:true,id:"10"}
]
for (let i = 0; i < 10; i++) {
  let date = new Date();
  date.setDate(i)
  
  const options = {year: 'numeric', month: 'numeric', day: 'numeric' };
  MOCK_DATA[i]["date"] = date.toLocaleDateString('en-us',options)
}

app.use('/data/get', (req, res) => {
  res.send({
    data: MOCK_DATA
  });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
