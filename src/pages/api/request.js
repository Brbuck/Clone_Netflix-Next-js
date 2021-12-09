const API_KEY = '9fc5ec823b52d89bc85b0d989845ac55'
export const API_BASE = 'https://api.themoviedb.org/3'

export const resquests = {
    trending: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
    originals: `/discover/tv?with_network=8&api_key=${API_KEY}&language=pt-BR`,
    action: `/discover/movie?with_genres=28&api_key=${API_KEY}&language=pt-BR`,
    comedy: `/discover/tv?with_genres=35&api_key=${API_KEY}&language=pt-BR&`,
    romance: `/discover/tv?with_genres=10749&api_key=${API_KEY}&language=pt-BR&`,
    documentaries: `/discover/tv?with_genres=99&api_key=${API_KEY}&language=pt-BR&`,
    topRated: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
    horror: `discover/movie?with_genres=27&api_key=${API_KEY}&language=pt-BR&`

}

/*search/movie?api_key=9fc5ec823b52d89bc85b0d989845ac55&language=pt-BR&query=titanic  */
/* movie/id?api_key=9fc5ec823b52d89bc85b0d989845ac55&language=pt-BR */