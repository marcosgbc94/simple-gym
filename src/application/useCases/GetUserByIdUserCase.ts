import { inject, injectable } from "tsyringe";
import { UserEntity } from "../../domain/entities/UserEntity";
import type { UserRepository } from "../../domain/repositories/UserRepository";
import { Result } from "../../shared/Result";

@injectable()
export class GetUserByIdUserCase {
    constructor(@inject("UserRepository") private readonly userRepository: UserRepository) {}

    public async execute(id: string): Promise<Result<UserEntity>> {
        const userResult = await this.userRepository.getUserById(id);

        if (userResult.isFailure) {
            return Result.fail(userResult.errorValue, userResult.code, userResult.numCode);
        }

        const user = userResult.getValue();

        if (!user) {
            return Result.fail("Usuario no encontrado", "USER_NOT_FOUND", 404);
        }

        return Result.ok(user);
    }
}