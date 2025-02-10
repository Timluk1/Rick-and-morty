import { rickAndMortiIstance } from "./axiosInstance";
import { ICharterResponse } from "./types";

class RickAndMortiApi {
    public async getByName({ name, page }: { name: string, page?: number}): Promise<ICharterResponse> {
        const res = await rickAndMortiIstance.get("", { params: { name, page } });
        return res.data as ICharterResponse;
    }
}

export const rickAndMortiApi = new RickAndMortiApi();
