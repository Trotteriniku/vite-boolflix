import { reactive } from "vue";

export const store= reactive({
    apiUrl: "https://api.themoviedb.org/3/",
    endPoint: {
        movie: "search/movie",
        series: "search/tv"
    },
    params: {
        api_key: "2685b6a8f123b29cd4c75c4bd228e18e",
        query: "",
        num: 20,
        offset: 0,
        language: "it-IT",
    },
    error: "",
    loading: true,
    movieList: [],
    seriesList: []
})