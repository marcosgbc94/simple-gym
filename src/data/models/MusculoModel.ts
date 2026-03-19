export interface MusculoModel {
    id_musculo: string;
    id_grupo_mus: string;
    nombre: string;
    desc: string | null;
    activo: boolean;
    eliminado_en: string | null;
    obs: string | null;
}