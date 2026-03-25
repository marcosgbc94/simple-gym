import { inject, injectable } from "tsyringe";
import { AuthRepository } from "../../domain/repositories/AuthRepository";
import { AuthEntity } from "../../domain/entities/AuthEntity";
import { Result } from "../../shared/Result";
import { LoginDTO } from "../../presentation/dto/LoginDTO";

@injectable()
export class LoginUseCase {
    constructor(
        @inject("AuthRepository") private authRepository: AuthRepository
    ) {}

    public async execute(request: LoginDTO): Promise<Result<AuthEntity>> {
        return await this.authRepository.login(request.email, request.password);
    }
}