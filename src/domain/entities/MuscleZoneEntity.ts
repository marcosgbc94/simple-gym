import { Result } from '../../shared/Result';

export class MuscleZoneEntity {
    private constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly description: string | null,
        public readonly isActive: boolean,
        public readonly observations: string | null,
        public readonly deletedAt: Date | null
    ) {}

   
    public static reconstitute(
        id: string, name: string, description: string | null,
        isActive: boolean, observations: string | null, deletedAt: Date | null
    ): MuscleZoneEntity {
        return new MuscleZoneEntity(id, name, description, isActive, observations, deletedAt);
    }
}