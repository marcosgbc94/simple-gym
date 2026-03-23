import { container } from "tsyringe";
import { MuscleRepository } from "../domain/repositories/MuscleRepository";
import { UserRepository } from "../domain/repositories/UserRepository";
import { MuscleRepositorySupabase } from "./repositories/MuscleRepositorySupabase";
import { UserRepositorySupabase } from "./repositories/UserRepositorySupabase";

container.registerSingleton<MuscleRepository>("MuscleRepository", MuscleRepositorySupabase);
container.registerSingleton<UserRepository>("UserRepository", UserRepositorySupabase);