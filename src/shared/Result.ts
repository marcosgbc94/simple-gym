// src/shared/Result.ts

export class Result<T> {
    public readonly isSuccess: boolean;
    public readonly isFailure: boolean;
    private readonly _error: string | null;
    private readonly _code: string | null;
    private readonly _numCode: number | null;
    private readonly _value: T | null;
  
    private constructor(isSuccess: boolean, error?: string | null, code?: string | null, numCode?: number | null, value?: T) {
      if (isSuccess && error) {
        throw new Error("Operación inválida: Un resultado exitoso no puede contener un error.");
      }
      if (!isSuccess && !error) {
        throw new Error("Operación inválida: Un resultado fallido debe contener un mensaje de error.");
      }
  
      this.isSuccess = isSuccess;
      this.isFailure = !isSuccess;
      this._error = error || null;
      this._code = code || null;
      this._numCode = numCode || null;
      this._value = value !== undefined ? value : null;
    }
  
    /**
     * Obtiene el valor del resultado. 
     * Lanza un error si se intenta acceder a un valor en un resultado fallido.
     */
    public getValue(): T {
      if (!this.isSuccess) {
        throw new Error(`No se puede obtener el valor de un resultado fallido. Error: ${this._error}`);
      }
      return this._value as T;
    }
  
    /**
     * Obtiene el mensaje de error para humanos.
     */
    public get errorValue(): string {
      return this._error as string;
    }
  
    /**
     * Obtiene el código de error para la lógica de la capa de Presentation (ej: 'NOT_FOUND', 'DB_ERROR').
     */
    public get code(): string {
      return this._code || 'INTERNAL_ERROR';
    }

     /**
     * Obtiene el código de error numerico
     */
      public get numCode(): number {
        return this._numCode || 500;
      }
  
    /**
     * Crea un resultado exitoso.
     */
    public static ok<U>(value?: U): Result<U> {
      return new Result<U>(true, null, null, null, value);
    }
  
    /**
     * Crea un resultado fallido.
     * @param error Mensaje descriptivo para el log o el usuario.
     * @param code Código estandarizado para que el controlador sepa qué status HTTP usar.
     */
    public static fail<U>(error: string, code: string = 'INTERNAL_ERROR', numCode: number = 500): Result<U> {
      return new Result<U>(false, error, code, numCode);
    }
  }