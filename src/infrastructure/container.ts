import { container } from "tsyringe";
import { MuscleRepository } from "../domain/repositories/MuscleRepository";
import { MuscleRepositorySupabase } from "./repositories/MuscleRepositorySupabase";

container.registerSingleton<MuscleRepository>("MuscleRepository", MuscleRepositorySupabase);