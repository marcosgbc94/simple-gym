import { AuthEntity } from "../../domain/entities/AuthEntity";

export interface LoginResponse {
    uuid: string;
    email: string;
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}

export class LoginDTO {
    static fromEntity(entity: AuthEntity): LoginResponse {
        return {
            uuid: entity.uuid,
            email: entity.email,
            accessToken: entity.accessToken,
            refreshToken: entity.refreshToken,
            expiresIn: entity.expiresIn
        };
    }
}