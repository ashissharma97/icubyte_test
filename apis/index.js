const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 8000

app.use(express.json())

app.use(cors())

app.use(morgan('combined'))

app.use(express.urlencoded({ extended: false}));

app.use('/api/v1/', require('./routers/v1'))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))