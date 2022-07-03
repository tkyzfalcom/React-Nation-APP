import axios from "axios";

const apiStarWars = axios.create({
    baseURL: 'https://swapi.dev/api/',
});

export const buscaStarships = () => {

    const url = `starships/`;

    return apiStarWars.get(url);
};

export const buscaStarshipIndex = (index: string) => {

    const url = `starships/${index}`;

    return apiStarWars.get(url);
};