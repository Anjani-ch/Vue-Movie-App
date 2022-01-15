import { ref } from 'vue'

const getMovie = id => {
    const data = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            const res = await fetch(`/api/movies/${id}`, { method: 'GET' })

            let json

            if (res.status === 404) throw new Error('Resource does not exist')

            json = await res.json()

            if(!json) throw new Error('Failed to get resources')

            json.backdrop_url = `https://image.tmdb.org/t/p/original${json.backdrop_path}`
            json.poster_url = `https://image.tmdb.org/t/p/original${json.poster_path}`
            
            data.value = json
          } catch (error) {
              error.value = error.message
          }
    }

    return { data, error, load }
}

export default getMovie