export interface AuthModel {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    token_type: string;
    uuid: string;
    email: string
}