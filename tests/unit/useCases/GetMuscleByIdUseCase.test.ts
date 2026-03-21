import "reflect-metadata";
import { GetMuscleByIdUseCase } from "../../../src/application/useCases/GetMuscleByIdUseCase";
import { MuscleRepository } from "../../../src/domain/repositories/MuscleRepository";
import { MuscleMockFactory } from "../../mocks/MuscleMockFactory";
import { Result } from "../../../src/shared/Result";

describe("GetMuscleByIdUseCase", () => {
    const mockRepository: MuscleRepository = {
        getMuscleById: jest.fn()
    };

    const useCase = new GetMuscleByIdUseCase(mockRepository);

    /**
     * TEST 1
     */
    it("debería retornar un músculo si el ID existe", async () => {
        const fakeMuscle = MuscleMockFactory.createMuscleResult("123");

        (mockRepository.getMuscleById as jest.Mock).mockResolvedValue(fakeMuscle);

        const result = (await useCase.execute("123")).getValue();

        expect(result.id).toBe("123");
        expect(result.name).toContain("Bíceps");
    });

    /**
     * TEST 2
     */
    it("debería lanzar un error si el músculo no existe", async () => {
        (mockRepository.getMuscleById as jest.Mock).mockResolvedValue(
            Result.fail("Músculo no encontrado")
        );

        const result = await useCase.execute("999");

        expect(result.isFailure).toBe(true);
        expect(result.errorValue).toBe("Músculo no encontrado");
    });
});