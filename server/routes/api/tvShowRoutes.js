const { Router } = require('express')
const fetch = require('node-fetch')

const router = Router()

// Popular
router.get('/popular', async (req, res) => {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/tv/popular?api_key=${process.env.API_KEY}`, { method: 'GET' })
        const data = await response.json()

        const limit = parseInt(req.query.limit)

        let tvShows = []
        
        if (limit) for(let i = 0; i < limit; i++) tvShows.push(data.results[i])
        else tvShows = data.results

        res.send(tvShows)
    } catch (error) {
        res.send(error)
    }
})

// Airing today
router.get('/airing-today', async (req, res) => {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/tv/airing_today?api_key=${process.env.API_KEY}`, { method: 'GET' })
        const data = await response.json()

        const limit = parseInt(req.query.limit)

        let tvShows = []
        
        if (limit) for(let i = 0; i < limit; i++) tvShows.push(data.results[i])
        else tvShows = data.results

        res.send(tvShows)
    } catch (error) {
        res.send(error)
    }
})

// On TV
router.get('/on-the-air', async (req, res) => {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/tv/on_the_air?api_key=${process.env.API_KEY}`, { method: 'GET' })
        const data = await response.json()

        const limit = parseInt(req.query.limit)

        let tvShows = []
        
        if (limit) for(let i = 0; i < limit; i++) tvShows.push(data.results[i])
        else tvShows = data.results

        res.send(tvShows)
    } catch (error) {
        res.send(error)
    }
})

// Top rated
router.get('/top-rated', async (req, res) => {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/tv/top_rated?api_key=${process.env.API_KEY}`, { method: 'GET' })
        const data = await response.json()

        const limit = parseInt(req.query.limit)

        let tvShows = []
        
        if (limit) for(let i = 0; i < limit; i++) tvShows.push(data.results[i])
        else tvShows = data.results

        res.send(tvShows)
    } catch (error) {
        res.send(error)
    }
})

// Single
router.get('/:id', async (req, res) => {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/tv/${req.params.id}?api_key=${process.env.API_KEY}`, { method: 'GET' })
        const data = await response.json()

        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router