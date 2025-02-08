import { rickAndMortiIstance } from "./axiosInstance";

class RickAndMortiApi {
    public async getByName(name: string) {
        const res = await rickAndMortiIstance.get("", { params: { name } });
        return res.data;
    }
}

export const rickAndMortiApi = new RickAndMortiApi();