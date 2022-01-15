import { ref } from 'vue'

const getTvShows = (type, limit) => {
    const data = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            const res = await fetch(`/api/tv-shows/${type}${limit ? '?limit=' + limit : ''}`, { method: 'GET' })

            let json

            if (res.status === 404) throw new Error('Resource does not exist')

            json = await res.json()

            if(!json) throw new Error('Failed to get resources')

            if(!json.length) throw new Error('No resources found')

            for(let i = 0; i < json.length; i++) {
                json[i].backdrop_url = `https://image.tmdb.org/t/p/original${json[i].backdrop_path}`
                json[i].poster_url = `https://image.tmdb.org/t/p/original${json[i].poster_path}`
            }
            
            data.value = json
          } catch (error) {
              error.value = error.message
          }
    }

    return { data, error, load }
}

export default getTvShows