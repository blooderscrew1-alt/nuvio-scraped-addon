// Generated automatically by Nuvio Addon Studio Android App
const scrapedStreams = [
  {
    "id": "autoscraped_0",
    "name": "Apple Music Live: Lady Gaga - Mayhem Requiem",
    "title": "Apple Music Live: Lady Gaga - Mayhem Requiem",
    "url": "https://cuevana.cz/pelicula/apple-music-live-lady-gaga-mayhem-requiem",
    "category": "Music & Concerts",
    "type": "movie"
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