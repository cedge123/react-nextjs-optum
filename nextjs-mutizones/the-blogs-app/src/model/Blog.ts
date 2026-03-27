export type Blog = {
    id: number;
    title: string;
    body: string;
    userId: number
}

export type BlogWithUser = {
    id: number;
    title: string;
    body: string;
    userId: number;
    userName: string;
}