import { injectable } from "tsyringe";
import { Request, Response } from 'express';
import { GetUserByIdUserCase } from "../../application/useCases/GetUserByIdUserCase";
import { UserResponseDTO } from "../dto/UserDTO";

@injectable()
export class UserController {
    constructor(private readonly getUserByIdUseCase: GetUserByIdUserCase) {}

    public async getById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                error: "El ID del usuario es obligatorio."
            });
        }

        if (typeof id !== 'string') {
            return res.status(400).json({
                success: false,
                error: 'El ID proporcionado no es válido.'
            });
        }

        const result = await this.getUserByIdUseCase.execute(id);

        if (result.isFailure) {
            const status = result.numCode;
            return res.status(status).json({
                success: false,
                error: result.errorValue
            });
        }

        const muscleEntity = result.getValue();
        const responseDTO = UserResponseDTO.fromEntity(muscleEntity);

        return res.status(200).json({
            success: true,
            data: responseDTO
        });
    }
}