import { AuthEntity } from "../../domain/entities/AuthEntity";
import { AuthModel } from "../models/AuthModel";
import { AuthMapper } from "../mappers/AuthMapper";
import { AuthRepository } from "../../domain/repositories/AuthRepository";
import { Result } from "../../shared/Result";
import { supabase } from "../../config/supabaseClient";

export class AuthRepositorySupabase implements AuthRepository {
    
    public async login(email: string, password: string): Promise<Result<AuthEntity>> {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                return Result.fail<AuthEntity>(error.message, "UNAUTHORIZED", 401);
            }

            if (!data.session || !data.user) {
                return Result.fail<AuthEntity>("No se pudo establecer la sesión", "INTERNAL_ERROR", 500);
            }

            const authModel: AuthModel = {
                access_token: data.session.access_token,
                refresh_token: data.session.refresh_token,
                expires_in: data.session.expires_in,
                token_type: data.session.token_type,
                uuid: data.user.id,
                email: data.user.email ?? email
            };

            const entity = AuthMapper.toDomain(authModel);
            return Result.ok<AuthEntity>(entity);

        } catch (err) {
            return Result.fail<AuthEntity>(`Error inesperado en login: ${err}`, "INTERNAL_ERROR", 500);
        }
    }

    public async logout(): Promise<Result<void>> {
        try {
            const { error } = await supabase.auth.signOut();

            if (error) {
                return Result.fail<void>(error.message, "INTERNAL_ERROR", 500);
            }

            return Result.ok<void>();
        } catch (err) {
            return Result.fail<void>(`Error al cerrar sesión: ${err}`, "INTERNAL_ERROR", 500);
        }
    }
}