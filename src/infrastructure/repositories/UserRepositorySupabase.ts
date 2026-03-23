import { supabase, supabaseAdmin } from "../../config/supabaseClient";
import { UserEntity } from "../../domain/entities/UserEntity";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { UserMapper } from "../mappers/UserMapper";
import { Result } from "../../shared/Result";
import { injectable } from "tsyringe";

@injectable()
export class UserRepositorySupabase implements UserRepository {
    
    public async getUserById(id: string): Promise<Result<UserEntity>> {
        try {

            const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    
            if (!id || !uuidRegex.test(id)) {
                return Result.fail<UserEntity>(`ID de usuario con formato incorrecto.`, "BAD_REQUEST", 400);
            }
            
            const { data: authData, error: authError } = await supabaseAdmin.auth.admin.getUserById(id);

            if (authError || !authData.user) {
                return Result.fail<UserEntity>("El usuario no existe en el sistema de autenticación.", "USER_NOT_FOUND", 404);
            }

            const { data: dbUser, error: dbError } = await supabase
                .from('usuario')
                .select('*')
                .eq('id_usuario', id)
                .single();

            if (dbError || !dbUser) {
                return Result.fail<UserEntity>("Perfil de usuario no encontrado en la base de datos.", "USER_NOT_FOUND", 404);
            }

            const entity = UserMapper.mapToDomain(dbUser, authData.user.email!);

            return Result.ok<UserEntity>(entity);

        } catch (err) {
            return Result.fail<UserEntity>(`Error interno del repositorio: ${err}`, "ERRPR", 500);
        }
    }
}