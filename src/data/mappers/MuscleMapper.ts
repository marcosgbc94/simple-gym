import { MuscleEntity } from "../../domain/entities/MuscleEntity";
import { MusculoModel } from "../models/MusculoModel";

export class MuscleMapper {
    /**
     * Convierte un modelo a una entidad
     * @param row Modelo de músculo
     */
    static mapToDomain(row: MusculoModel): MuscleEntity {
        return MuscleEntity.reconstitute(
            row.id_musculo,
            row.id_grupo_mus,
            row.nombre,
            row.desc,
            row.activo,
            row.obs,
            row.eliminado_en ? new Date(row.eliminado_en) : null
        );
    }

    /**
     * Convierte una entidad a un modelo
     * @param entity Entidad de músculo
     */
    static mapToDatabase(entity: MuscleEntity): MusculoModel {
        return {
            id_musculo: entity.id,
            id_grupo_mus: entity.groupId, 
            nombre: entity.name,
            desc: entity.description,
            activo: entity.isActive,
            obs: entity.observations,
            eliminado_en: entity.deletedAt ? entity.deletedAt.toISOString() : null
        };
    }
}