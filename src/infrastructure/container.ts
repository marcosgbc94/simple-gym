import { container } from "tsyringe";
import { AuthRepository } from "../domain/repositories/AuthRepository";
import { MuscleRepository } from "../domain/repositories/MuscleRepository";
import { UserRepository } from "../domain/repositories/UserRepository";
import { AuthRepositorySupabase } from "./repositories/AuthRepositorySupabase";
import { MuscleRepositorySupabase } from "./repositories/MuscleRepositorySupabase";
import { UserRepositorySupabase } from "./repositories/UserRepositorySupabase";

container.registerSingleton<MuscleRepository>("MuscleRepository", MuscleRepositorySupabase);
container.registerSingleton<UserRepository>("UserRepository", UserRepositorySupabase);
container.registerSingleton<AuthRepository>("AuthRepository", AuthRepositorySupabase);