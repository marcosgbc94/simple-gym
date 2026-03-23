import { supabase } from '../../config/supabaseClient';
import { MusculoModel } from '../models/MusculoModel';
import { MuscleEntity } from '../../domain/entities/MuscleEntity';
import { MuscleRepository } from '../../domain/repositories/MuscleRepository';
import { MuscleMapper } from '../mappers/MuscleMapper';
import { Result } from '../../shared/Result';
import { injectable } from 'tsyringe';

@injectable()
export class MuscleRepositorySupabase implements MuscleRepository {

    /**
     * Obtiene un músculo por su identificador
     * @param id Identificador del músculo
     */
    public async getMuscleById(id: string): Promise<Result<MuscleEntity>> {
        const { data, error } = await supabase
            .from('musculo')
            .select('*')
            .eq('id_musculo', id)
            .single();

        if (error) {
            return Result.fail("No se logró conectar al servicio de Base de Datos.", "DB_ERROR", 500);
        }

        if (!data) {
            return Result.fail("No se logró encontrar el registro", "NOT_FOUND", 404);
        }

        return Result.ok(MuscleMapper.mapToDomain(data as MusculoModel));
    }

}