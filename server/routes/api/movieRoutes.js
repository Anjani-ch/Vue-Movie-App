const { Router } = require('express')
const fetch = require('node-fetch')

const router = Router()

// Popular
router.get('/popular', async (req, res) => {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/movie/popular?api_key=${process.env.API_KEY}`, { method: 'GET' })
        const data = await response.json()

        const limit = parseInt(req.query.limit)

        let movies = []
        
        if (limit) for(let i = 0; i < limit; i++) movies.push(data.results[i])
        else movies = data.results

        res.send(movies)
    } catch (error) {
        res.send(error)
    }
})

// Now playing
router.get('/now-playing', async (req, res) => {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/movie/now_playing?api_key=${process.env.API_KEY}`, { method: 'GET' })
        const data = await response.json()

        const limit = parseInt(req.query.limit)

        let movies = []
        
        if (limit) for(let i = 0; i < limit; i++) movies.push(data.results[i])
        else movies = data.results

        res.send(movies)
    } catch (error) {
        res.send(error)
    }
})

// Upcoming
router.get('/upcoming', async (req, res) => {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/movie/upcoming?api_key=${process.env.API_KEY}`, { method: 'GET' })
        const data = await response.json()

        const limit = parseInt(req.query.limit)

        let movies = []
        
        if (limit) for(let i = 0; i < limit; i++) movies.push(data.results[i])
        else movies = data.results

        res.send(movies)
    } catch (error) {
        res.send(error)
    }
})

// Top rated
router.get('/top-rated', async (req, res) => {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/movie/top_rated?api_key=${process.env.API_KEY}`, { method: 'GET' })
        const data = await response.json()

        const limit = parseInt(req.query.limit)

        let movies = []
        
        if (limit) for(let i = 0; i < limit; i++) movies.push(data.results[i])
        else movies = data.results

        res.send(movies)
    } catch (error) {
        res.send(error)
    }
})

// Single
router.get('/:id', async (req, res) => {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/movie/${req.params.id}?api_key=${process.env.API_KEY}`, { method: 'GET' })
        const data = await response.json()

        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router