const express = require('express');
const cors = require('cors')



const app = express();

app.use(express.json())
app.use(cors(options))

app.listen(
    process.env.PORT,
    () => console.info(`> listening at: ${process.env.PORT}`)
)