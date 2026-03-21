// src/modules/muscles/presentation/muscle.controller.ts
import { Request, Response } from 'express';
import { GetMuscleByIdUseCase } from '../../application/use-cases/GetMuscleByIdUseCase';
import { MuscleResponseDTO } from '../dto/MuscleDTO';
import { injectable } from 'tsyringe';

@injectable()
export class MuscleController {

    constructor(private readonly getMuscleByIdUseCase: GetMuscleByIdUseCase) {}

    public async getById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                error: "El ID del músculo es obligatorio."
            });
        }

        if (typeof id !== 'string') {
            return res.status(400).json({
                success: false,
                error: 'El ID proporcionado no es válido.'
            });
        }

        const result = await this.getMuscleByIdUseCase.execute(id);

        if (result.isFailure) {
            const status = result.numCode;
            return res.status(status).json({
                success: false,
                error: result.errorValue
            });
        }

        const muscleEntity = result.getValue();
        const responseDTO = MuscleResponseDTO.fromEntity(muscleEntity);

        return res.status(200).json({
            success: true,
            data: responseDTO
        });
    }
}