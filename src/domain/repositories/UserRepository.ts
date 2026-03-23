import { Result } from "../../shared/Result";
import { UserEntity } from "../entities/UserEntity";

export interface UserRepository {
    getUserById(id: string): Promise<Result<UserEntity>>
}