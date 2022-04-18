import axios from "axios";

export class ApiService {
    #BASE_URL = 'https://api.themoviedb.org/3/';
    #API_KEY = '5bb22c57348a36de617928c842cde881';

    async fetchTrendingMovies() {
        const response = await axios.get(`${this.#BASE_URL}trending/movie/day?api_key=${this.#API_KEY}`);
        return response.data.results;
    };

    async fetchMovieDetails(id) {
        const response = await axios.get(`${this.#BASE_URL}movie/${id}?api_key=${this.#API_KEY}`);
        return response.data;
    }

    async fetchMovieCast(id) {
        const response = await axios.get(`${this.#BASE_URL}movie/${id}/credits?api_key=${this.#API_KEY}`);
        return response.data.cast;
    }

    async fetchMovieReviews(id) {
        const response = await axios.get(`${this.#BASE_URL}movie/${id}/reviews?api_key=${this.#API_KEY}`);
        return response.data.results;
    }

    async fetchMoviesByName(searchQuery) {
        const response = await axios.get(`${this.#BASE_URL}search/movie?api_key=${this.#API_KEY}&query=${searchQuery}`);
        return response.data.results;
    }
}