export interface GrupoMuscularModel {
    id_grupo_mus: string;
    id_zona_mus: string;
    nombre: string;
    desc: string | null;
    activo: boolean;
    eliminado_en: string | null;
    obs: string | null;
}