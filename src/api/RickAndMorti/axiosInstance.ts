import axios from "axios";

export const rickAndMortiIstance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/character",
});
