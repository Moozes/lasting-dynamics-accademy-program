type SessionLog = {
    id: number;
    created_at: Date;
    description: string;
    media?: string;
    media_urls?: string[];
};

export type SessionLogssAPIResponse = {
    count: number;
    num_pages: number;
    next: null | string;
    previous: null | string;
    results: SessionLog[] | [];
};
