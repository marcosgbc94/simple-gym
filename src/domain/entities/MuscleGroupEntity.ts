import { Result } from '../../shared/Result';

export class MuscleGroupEntity {
    private constructor(
        public readonly id: string,
        public readonly zoneId: string,
        public readonly name: string,
        public readonly description: string | null,
        public readonly isActive: boolean,
        public readonly observations: string | null,
        public readonly deletedAt: Date | null
    ) {}

    /**
     * Obtiene los datos limpios
     */
    public static reconstitute(
        id: string, 
        zoneId: string, 
        name: string, 
        description: string | null,
        isActive: boolean, 
        observations: string | null, 
        deletedAt: Date | null
    ): MuscleGroupEntity {
        return new MuscleGroupEntity(id, zoneId, name, description, isActive, observations, deletedAt);
    }
}