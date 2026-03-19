import { Router } from 'express';
import { MuscleController } from '../../controllers/MuscleController';
import { MuscleRepository } from '../../../repositories/MuscleRepository';
import { GetMuscleByIdUseCase } from '../../../../domain/useCases/GetMuscleByIdUseCase';

const router = Router();

// Instanciamos el repositorio (una sola vez para ambos casos de uso)
const repository = new MuscleRepository();

// Instanciamos los casos de uso
const getByIdUseCase = new GetMuscleByIdUseCase(repository); // <-- El nuevo

// Instanciamos el controlador inyectándole los dos casos de uso
const controller = new MuscleController(getByIdUseCase);

// Definimos las rutas
router.get('/:id', controller.getMuscleById); // <-- La nueva ruta GET

export { router as muscleRoutes };