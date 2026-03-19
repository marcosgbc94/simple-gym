import { Request, Response } from 'express';
import { GetMuscleByIdUseCase } from '../../../domain/useCases/GetMuscleByIdUseCase';

export class MuscleController {
    // Ahora inyectamos AMBOS casos de uso
    constructor(
        private readonly getMuscleByIdUseCase: GetMuscleByIdUseCase
    ) {}

    // ... (aquí mantienes tu método createMuscle intacto) ...

    // NUEVO MÉTODO PARA LEER
    public getMuscleById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        // 1. Verificamos que el ID exista y sea un string (Type Guard)
        if (!id || typeof id !== 'string') {
            res.status(400).json({
                success: false,
                error: 'El ID del músculo es requerido y debe ser válido.'
            });
            return; // Importante para que no siga ejecutando
        }

        // 2. Ahora TypeScript sabe que 'id' es 100% un string
        const muscleData = await this.getMuscleByIdUseCase.execute(id);

        res.status(200).json({
            success: true,
            data: muscleData
        });

    } catch (error: any) {
        res.status(404).json({
            success: false,
            error: error.message
        });
    }
};
}