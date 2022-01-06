const API_KEY = '9fc5ec823b52d89bc85b0d989845ac55'
const API_BASE = 'https://api.themoviedb.org/3'


 const baseUrl = async (endpoint) => {
    const response = await fetch(`${API_BASE}${endpoint}`)
    const data = await response.json()
    return data;
}

export default {
    getHomeList: async () => {
        return [
            {
                title: 'Trending',
                item: await baseUrl(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                title: 'Original',
                item: await baseUrl(`/discover/tv?with_network=8&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                title: 'Action',
                item: await baseUrl(`/discover/movie?with_genres=28&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                title: 'Comedy',
                item: await baseUrl(`/discover/tv?with_genres=35&api_key=${API_KEY}&language=pt-BR&`)
            },
            {
              title: 'Romace',
              item: await baseUrl(`/discover/tv?with_genres=10749&api_key=${API_KEY}&language=pt-BR&`)
          },
            
        ]
    }
} 

/* 

export async function getStaticProps() {

 /*  const response = await fetch(`https://api.themoviedb.org/3/discover/tv?with_network=8&language=pt-BR&api_key=9fc5ec823b52d89bc85b0d989845ac55`)
  const data = await response.json() */

/*  let list = await request.getHomeList()
 console.log(list)

  return {
    props: {
      movie: list,
    },
    revalidate: 10,
  }
} */ 
