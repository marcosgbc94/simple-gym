import { Result } from "../../shared/Result";
import { MuscleEntity } from "../entities/MuscleEntity";

export interface MuscleRepository {
    getMuscleById(id: string): Promise<Result<MuscleEntity>>
}