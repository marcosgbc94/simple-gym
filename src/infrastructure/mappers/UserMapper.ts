import { UserEntity } from "../../domain/entities/UserEntity";
import { UsuarioModel } from "../models/UsuarioModel";

export class UserMapper {

    static mapToDomain(row: UsuarioModel, email: string): UserEntity {
        return UserEntity.reconstitute(row, email);
    }

    static mapToDatabase(entity: UserEntity): Partial<UsuarioModel> {
        return {
            id_usuario: entity.id,
            nombres: entity.firstName,
            paterno: entity.firstLastName,
            materno: entity.secondLastName || null,
            activo: entity.isActive,
            id_genero: entity.genderId,
            id_estado_usu: entity.statusId
        };
    }
}