// Generated automatically by Nuvio Addon Studio Android App
const scrapedStreams = [
  {
    "title": "Todas las Películas",
    "url": "https://www.pelisplushd.la/peliculas",
    "category": "Películas",
    "type": "channel"
  },
  {
    "title": "Últimos Estrenos de Películas",
    "url": "https://www.pelisplushd.la/peliculas/estrenos",
    "category": "Películas",
    "type": "channel"
  },
  {
    "title": "Películas Populares",
    "url": "https://www.pelisplushd.la/peliculas/populares",
    "category": "Películas",
    "type": "channel"
  },
  {
    "title": "Todas las Series",
    "url": "https://www.pelisplushd.la/series",
    "category": "Series",
    "type": "channel"
  },
  {
    "title": "Últimos Estrenos de Series",
    "url": "https://www.pelisplushd.la/series/estrenos",
    "category": "Series",
    "type": "channel"
  },
  {
    "title": "Series Populares",
    "url": "https://www.pelisplushd.la/series/populares",
    "category": "Series",
    "type": "channel"
  },
  {
    "title": "Doramas",
    "url": "https://www.pelisplushd.la/generos/dorama",
    "category": "Doramas",
    "type": "channel"
  },
  {
    "title": "Todos los Animes",
    "url": "https://www.pelisplushd.la/animes",
    "category": "Anime",
    "type": "channel"
  },
  {
    "title": "Últimos Estrenos de Anime",
    "url": "https://www.pelisplushd.la/animes/estrenos",
    "category": "Anime",
    "type": "channel"
  },
  {
    "title": "Animes Populares",
    "url": "https://www.pelisplushd.la/animes/populares",
    "category": "Anime",
    "type": "channel"
  },
  {
    "title": "Películas de Acción",
    "url": "https://www.pelisplushd.la/generos/accion",
    "category": "Action",
    "type": "channel"
  },
  {
    "title": "Animación",
    "url": "https://www.pelisplushd.la/generos/animacion",
    "category": "Animation",
    "type": "channel"
  },
  {
    "title": "Aventura",
    "url": "https://www.pelisplushd.la/generos/aventura",
    "category": "Adventure",
    "type": "channel"
  },
  {
    "title": "Ciencia Ficción",
    "url": "https://www.pelisplushd.la/generos/ciencia-ficcion",
    "category": "Sci-Fi",
    "type": "channel"
  },
  {
    "title": "Comedia",
    "url": "https://www.pelisplushd.la/generos/comedia",
    "category": "Comedy",
    "type": "channel"
  },
  {
    "title": "Crimen",
    "url": "https://www.pelisplushd.la/generos/crimen",
    "category": "Crime",
    "type": "channel"
  },
  {
    "title": "Documentales",
    "url": "https://www.pelisplushd.la/generos/documental",
    "category": "Documentary",
    "type": "channel"
  },
  {
    "title": "Drama",
    "url": "https://www.pelisplushd.la/generos/drama",
    "category": "Drama",
    "type": "channel"
  },
  {
    "title": "Fantasía",
    "url": "https://www.pelisplushd.la/generos/fantasia",
    "category": "Fantasy",
    "type": "channel"
  },
  {
    "title": "Cine Extranjero",
    "url": "https://www.pelisplushd.la/generos/foreign",
    "category": "Foreign",
    "type": "channel"
  },
  {
    "title": "Guerra",
    "url": "https://www.pelisplushd.la/generos/guerra",
    "category": "War",
    "type": "channel"
  },
  {
    "title": "Historia",
    "url": "https://www.pelisplushd.la/generos/historia",
    "category": "History",
    "type": "channel"
  },
  {
    "title": "Películas de TV",
    "url": "https://www.pelisplushd.la/generos/pelicula-de-la-television",
    "category": "TV Movies",
    "type": "channel"
  },
  {
    "title": "Romance",
    "url": "https://www.pelisplushd.la/generos/romance",
    "category": "Romance",
    "type": "channel"
  },
];

export default {
    id: "autoscraped",
    name: "Nuvio AutoScraper",
    version: "1.0.0",
    
    async search(query) {
        if (!query) return [];
        const q = query.toLowerCase();
        return scrapedStreams.filter(item => item.title.toLowerCase().includes(q));
    },
    
    async getStreams(type, id) {
        return scrapedStreams.filter(item => item.type === type);
    },
    
    async getSources(type, query) {
        if (query) {
            const q = query.toLowerCase();
            return scrapedStreams.filter(item => item.title.toLowerCase().includes(q)).map(item => ({
                name: item.title,
                url: item.url,
                type: item.type
            }));
        }
        return scrapedStreams.map(item => ({
            name: item.title,
            url: item.url,
            type: item.type
        }));
    }
};