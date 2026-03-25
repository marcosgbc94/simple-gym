// src/infrastructure/http/controllers/AuthController.ts
import { Request, Response } from "express";
import { container } from "tsyringe";
import { LoginUseCase } from "../../application/useCases/LoginUseCase";
import { LoginSchema } from "../../presentation/http/validations/loginSchema";

export class AuthController {
    
    public async login(req: Request, res: Response): Promise<Response> {
        try {

            const validation = LoginSchema.safeParse(req.body);
            
            if (!validation.success) {
                return res.status(400).json({
                    success: false,
                    error: "Datos de entrada inválidos"
                });
            }

            const loginUseCase = container.resolve(LoginUseCase);
       
            const result = await loginUseCase.execute(validation.data);

            if (result.isFailure) {
                return res.status(result.numCode).json({
                    success: false,
                    error: result.errorValue
                });
            }

            return res.status(200).json({
                success: true,
                data: result.getValue()
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                error: "Error interno en el servidor"
            });
        }
    }
}