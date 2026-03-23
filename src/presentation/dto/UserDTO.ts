import { UserEntity } from "../../domain/entities/UserEntity";
import { UserResponse } from "../http/validations/UserSchema";

export class UserResponseDTO {
    /**
     * Convierte de Entidad de Dominio a Objeto de Respuesta (DTO)
     */
    static fromEntity(entity: UserEntity): UserResponse {
        return {
            id: entity.id,
            email: entity.email,
            firstName: entity.firstName,
            firstLastName: entity.firstLastName,
            secondLastName: entity.secondLastName || null, 
            isActive: entity.isActive,
            genderId: entity.genderId,
            statusId: entity.statusId
        };
    }

    /**
     * Convierte una lista de entidades a una lista de DTOs
     */
    static fromEntities(entities: UserEntity[]): UserResponse[] {
        return entities.map(entity => this.fromEntity(entity));
    }
}