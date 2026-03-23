export interface UsuarioModel {
    id_usuario: string;
    id_genero: number;
    id_estado_usu: number;
    nombres: string;
    paterno: string;
    materno?: string | null;
    fecha_nac: Date;
    acepta_terminos_en?: Date | null;
    activo: boolean;
    creado_en: Date;
    creado_por: number;
    modificado_en?: Date | null;
    modificado_por?: number | null;
    eliminado_en?: Date | null;
    eliminado_por?: number | null;
    obs?: string | null;
}