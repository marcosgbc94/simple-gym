import { MuscleRepository } from '../../data/repositories/MuscleRepository';

export interface MuscleResponseDTO {
    id: string;
    groupId: string;
    name: string;
    description: string | null;
    isActive: boolean;
    observations: string | null;
}

export class GetMuscleByIdUseCase {
    constructor(private readonly muscleRepository: MuscleRepository) {}

    public async execute(id: string): Promise<MuscleResponseDTO> {
        const muscle = await this.muscleRepository.getById(id);

        if (!muscle) {
            throw new Error('Músculo no encontrado');
        }

        return {
            id: muscle.id,
            groupId: muscle.groupId,
            name: muscle.name,
            description: muscle.description,
            isActive: muscle.isActive,
            observations: muscle.observations
        };
    }
}