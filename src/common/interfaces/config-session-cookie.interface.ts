export interface IConfigSessionCookie {
    readonly maxAge: number;
    readonly path: string;
    readonly httpOnly: boolean;
    readonly domain: string;
}