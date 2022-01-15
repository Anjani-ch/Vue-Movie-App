const express = require('express')
const dotenv = require('dotenv')
const path = require('path')

const movieRoutes = require('./routes/api/movieRoutes.js')
const tvShowRoutes = require('./routes/api/tvShowRoutes.js')

const app = express();

const PORT = process.env.PORT || 3000

dotenv.config()

app.use('/api/movies', movieRoutes)
app.use('/api/tv-shows', tvShowRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'public')))
    
    app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')))
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))