import { Result } from '../../shared/Result';

export class MuscleEntity {
    private constructor(
        public readonly id: string,
        public readonly groupId: string,
        public readonly name: string,
        public readonly description: string | null,
        public readonly isActive: boolean,
        public readonly observations: string | null,
        public readonly deletedAt: Date | null
    ) {}

    public static reconstitute(
        id: string,
        groupId: string,
        name: string,
        description: string | null,
        isActive: boolean,
        observations: string | null,
        deletedAt: Date | null
    ): MuscleEntity {
        return new MuscleEntity(
            id, 
            groupId, 
            name, 
            description, 
            isActive, 
            observations, 
            deletedAt
        );
    }
}