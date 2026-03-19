import { MuscleEntity } from '../../domain/entities/MuscleEntity';
import { MuscleRepository } from '../../domain/repositories/MuscleRepository';
import { Result } from '../../shared/Result';

export class GetMuscleByIdUseCase {
    
    constructor(private readonly muscleRepository: MuscleRepository) {}

    public async execute(id: string): Promise<Result<MuscleEntity>> {
        const muscleResult = await this.muscleRepository.getMuscleById(id);

        if (muscleResult.isFailure) {
            return Result.fail(muscleResult.errorValue, muscleResult.code);
        }

        const muscle = muscleResult.getValue();

        if (!muscle) {
            return Result.fail("Músculo no encontrado", "MUSCLE_NOT_FOUND", 404);
        }

        return Result.ok(muscle);
    }
}