<template>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 sticky-top">
        <div class="container">
            <router-link :to="{ name: 'Home' }"><img src="@/assets/logo.png" alt="logo"></router-link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarToggler">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><router-link class="nav-link text-light" :to="{ name: 'Home' }">Home</router-link></li>
                    <li class="nav-item"><router-link class="nav-link text-light" :to="{ name: 'About' }">About</router-link></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-light" href="#" id="movieDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Movies</a>

                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="movieDropdown">
                            <li><router-link class="dropdown-item" :to="{ name: 'PopularMovies' }">Popular</router-link></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><router-link class="dropdown-item" :to="{ name: 'NowPlayingMovies' }">Now Playing</router-link></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><router-link class="dropdown-item" :to="{ name: 'UpcomingMovies' }">Upcoming</router-link></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><router-link class="dropdown-item" :to="{ name: 'TopRatedMovies' }">Top Rated</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-light" href="#" id="tvDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">TV Shows</a>

                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="tvDropdown">
                            <li><router-link class="dropdown-item" :to="{ name: 'PopularTvShows' }">Popular</router-link></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><router-link class="dropdown-item" :to="{ name: 'TvShowsAiringToday' }">Airing Today</router-link></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><router-link class="dropdown-item" :to="{ name: 'TvShowsOnAir' }">On The Air</router-link></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><router-link class="dropdown-item" :to="{ name: 'TopRatedTvShows' }">Top Rated</router-link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
    img {
        padding: 0;
        margin: 0;
        width: 50px;
    }
</style>