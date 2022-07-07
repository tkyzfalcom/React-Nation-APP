import { useState } from 'react';
import axios from "axios";


export interface post {
    title:string,
    body:string,
    userId:number
}
const apiStarWars = axios.create({
    baseURL: 'https://swapi.dev/api/',
});

const apiPost=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})

export async function postLogin(login:post){
    return apiPost.post("/posts/",login)
}
export const buscaStarships = (page?: string) => {
   
    const url = "starships/" + page;

    return apiStarWars.get(url);
};

export const buscaStarshipIndex = (index: string) => {

    const url = `starships/${index}`;

    return apiStarWars.get(url);
};