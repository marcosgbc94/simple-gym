import { MuscleEntity } from "../../src/domain/entities/MuscleEntity";
import { Result } from "../../src/shared/Result";

export class MuscleMockFactory {
    /**
     * Crea un músculo válido por defecto para pruebas rápidas
     */
    static createValidMuscle(id = "123"): MuscleEntity {
        return MuscleEntity.reconstitute(
            id,
            "group-1",
            "Bíceps Braquial",
            "Músculo flexor del brazo",
            true,
            "Entidad generada para tests",
            null
        );
    }

    /**
     * Crea un músculo válido por defecto para pruebas rápidas (con Result Pattern)
     */
    static createMuscleResult(id = "123"): Result<MuscleEntity> {
        const muscle = this.createValidMuscle(id);
        return Result.ok<MuscleEntity>(muscle);
    }

    /**
     * Crea una lista de músculos (útil para tests de 'GetAll')
     */
    static createMuscleList(): MuscleEntity[] {
        return [
            this.createValidMuscle("1"),
            this.createValidMuscle("2"),
        ];
    }
}