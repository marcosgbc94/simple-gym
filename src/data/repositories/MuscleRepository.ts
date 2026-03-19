import { supabase } from '../../config/supabaseClient';
import { MusculoModel } from '../models/MusculoModel';
import { MuscleEntity } from '../../domain/entities/MuscleEntity';

export class MuscleRepository {
    
    private mapToDomain(row: MusculoModel): MuscleEntity {
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

    private mapToDatabase(entity: MuscleEntity): MusculoModel {
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

    public async getById(id: string): Promise<MuscleEntity | null> {
        const { data, error } = await supabase
            .from('musculo')
            .select('*')
            .eq('id_musculo', id)
            .single();

        if (error || !data) return null;

        return this.mapToDomain(data as MusculoModel);
    }

}