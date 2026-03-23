import { MuscleEntity } from "../../domain/entities/MuscleEntity";
import { MuscleResponse } from "../http/validations/muscleSchema";

export class MuscleResponseDTO {
    /**
     * Convierte de entidad a DTO
     */
    static fromEntity(entity: MuscleEntity) {
        return {
            id: entity.id,
            name: entity.name,
            group: entity.groupId,
            description: entity.description || "Sin descripción",
            isActive: entity.isActive
        };
    }

    static fromEntities(entities: MuscleEntity[]): MuscleResponse[] {
        return entities.map(entity => this.fromEntity(entity));
    }
}