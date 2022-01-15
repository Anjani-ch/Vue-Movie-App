import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Details from '../views/Details.vue'

// Movie components
import PopularMovies from '../views/movies/PopularMovies.vue'
import NowPlayingMovies from '../views/movies/NowPlayingMovies.vue'
import UpcomingMovies from '../views/movies/UpcomingMovies.vue'
import TopRatedMovies from '../views/movies/TopRatedMovies.vue'

// TV show components
import PopularTvShows from '../views/tvShows/PopularTvShows.vue'
import TvShowsAiringToday from '../views/tvShows/TvShowsAiringToday.vue'
import TvShowsOnAir from '../views/tvShows/TvShowsOnAir.vue'
import TopRatedTvShows from '../views/tvShows/TopRatedTvShows.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  // Movie routes
  {
    path: '/movies/popular',
    name: 'PopularMovies',
    component: PopularMovies
  },
  {
    path: '/movies/now-playing',
    name: 'NowPlayingMovies',
    component: NowPlayingMovies
  },
  {
    path: '/movies/upcoming',
    name: 'UpcomingMovies',
    component: UpcomingMovies
  },
  {
    path: '/movies/top-rated',
    name: 'TopRatedMovies',
    component: TopRatedMovies
  },
  {
    path: '/movies/:id',
    name: 'SingleMovie',
    component: Details,
    props: true
  },
  // TV shows routes
  {
    path: '/tv-shows/popular',
    name: 'PopularTvShows',
    component: PopularTvShows    
  },
  {
    path: '/tv-shows/airing-today',
    name: 'TvShowsAiringToday',
    component: TvShowsAiringToday     
  },
  {
    path: '/tv-shows/on-the-air',
    name: 'TvShowsOnAir',
    component: TvShowsOnAir     
  },
  {
    path: '/tv-shows/top-rated',
    name: 'TopRatedTvShows',
    component: TopRatedTvShows
  },
  {
    path: '/tv-shows/:id',
    name: 'SingleTvShow',
    component: Details,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
