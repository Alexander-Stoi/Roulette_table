const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 6000;
const HOST = process.env.HOST || '0.0.0.0';



app.listen(PORT, HOST, () => {
    console.log(`Server is listening at http://localhost:6000`);
})