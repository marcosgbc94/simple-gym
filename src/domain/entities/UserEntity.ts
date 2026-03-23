import { UsuarioModel } from "../../infrastructure/models/UsuarioModel";

export class UserEntity {
    constructor(
        public readonly id: string,
        public readonly firstName: string,
        public readonly firstLastName: string,
        public readonly secondLastName: string | null | undefined,
        public readonly email: string,
        public readonly isActive: boolean,
        public readonly genderId: number,
        public readonly statusId: number,
    ) {}

    static reconstitute(model: UsuarioModel, email: string): UserEntity {
        return new UserEntity(
            model.id_usuario,
            model.nombres,
            model.paterno,
            model.materno || null,
            email,
            model.activo ?? true,
            model.id_genero,
            model.id_estado_usu
        );
    }

    /**
     * Obtiene el nombre completo
     */
    get fullName(): string {
        const second = this.secondLastName ? ` ${this.secondLastName}` : "";
        return `${this.firstName} ${this.firstLastName}${second}`;
    }
}