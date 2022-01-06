const API_KEY = '9fc5ec823b52d89bc85b0d989845ac55'
const API_BASE = 'https://api.themoviedb.org/3'

/* export const request = {
    trending: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
    originals: `/discover/tv?with_network=8&api_key=${API_KEY}&language=pt-BR`,
    action: `/discover/movie?with_genres=28&api_key=${API_KEY}&language=pt-BR`,
    comedy: `/discover/tv?with_genres=35&api_key=${API_KEY}&language=pt-BR&`,
    romance: `/discover/tv?with_genres=10749&api_key=${API_KEY}&language=pt-BR&`,
    documentaries: `/discover/tv?with_genres=99&api_key=${API_KEY}&language=pt-BR&`,
    topRated: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
    horror: `discover/movie?with_genres=27&api_key=${API_KEY}&language=pt-BR&`

} */

/*search/movie?api_key=9fc5ec823b52d89bc85b0d989845ac55&language=pt-BR&query=titanic  */
/* movie/id?api_key=9fc5ec823b52d89bc85b0d989845ac55&language=pt-BR */

 const baseUrl = async (endpoint) => {
    const response = await fetch(`${API_BASE}${endpoint}`)
    const data = await response.json()
    return data;
}

export default {
    getHomeList: async () => {
        return [
            {
                title: 'Treding',
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
            
        ]
    }
} 

/* {
         movie.map((item,index) =>{
           return(
            <div className="wrapper" key={index}>
            <button onClick={LeftArrow}  className='left_button'><FiChevronLeft /></button>
            <button onClick={RightArrow} className='right_button'><FiChevronRight /></button>
            <div style={{ marginLeft: scrollX }} className="slide">
            {
              item.results > 0 && item.results.movie.map((itens, index) => {
                return (
                  <div key={index} className="card">
                    <img src={`https://image.tmdb.org/t/p/original/${itens.backdrop_path}`} />
                    <p>{itens.name}</p>
                  </div>
                )
              })
            }
              
            </div>
          </div>
           )
         })
       }

      </div>
    </div>
  )
}


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
