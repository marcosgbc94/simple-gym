import { Result } from "../../shared/Result";
import { AuthEntity } from "../entities/AuthEntity";

export interface AuthRepository {
    login(email: string, password: string): Promise<Result<AuthEntity>>

    logout(): Promise<Result<void>>
}