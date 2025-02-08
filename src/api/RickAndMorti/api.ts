import { rickAndMortiIstance } from "./axiosInstance";

class RickAndMortiApi {
    public async getByName(name: string) {
        const res = await rickAndMortiIstance.get("", { params: { name } });
        const data = res.data();
        return data;
    }
}

export const rickAndMortiApi = new RickAndMortiApi();