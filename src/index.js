require('dotenv').config();

const express = require('express');
const routes = require('./routes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

console.log(process.env.PORT)

app.listen(process.env.PORT || 3000, () => {
  console.log(`🏃‍♂️ Server runing on port: ${PORT} `)
})
