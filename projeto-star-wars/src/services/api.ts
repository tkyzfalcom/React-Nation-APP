import axios from "axios";

const apiStarWars = axios.create({
    baseURL: 'https://swapi.dev/api/',
});

export const buscaStarships = (page?: string) => {
   
    const url = "starships/" + page;

    return apiStarWars.get(url);
};

export const buscaStarshipIndex = (index: string) => {

    const url = `starships/${index}`;

    return apiStarWars.get(url);
};