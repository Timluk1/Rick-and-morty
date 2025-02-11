export interface ICharter {
    id: number;
    name: string;
    url: string;
    pages: number;
    status: string;
    createdAt: string;
}

export interface IInfo {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null
}


export interface ICharterResponse {
    info: IInfo;
    results: ICharter[];
}