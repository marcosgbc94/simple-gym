export class Result<T> {
    public isSuccess: boolean;
    public isFailure: boolean;
    private error: string | null;
    private _value: T | null;

    private constructor(isSuccess: boolean, error?: string | null, value?: T) {
        if (isSuccess && error) {
            throw new Error("Un resultado exitoso no puede contener un error.");
        }
        if (!isSuccess && !error) {
            throw new Error("Un resultado fallido debe contener un mensaje de error.");
        }

        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        this.error = error || null;
        this._value = value || null;
    }

    // Devuelve el valor solo si fue exitoso
    public getValue(): T {
        if (!this.isSuccess) {
            throw new Error("No puedes obtener el valor de un resultado fallido.");
        }
        return this._value as T;
    }

    // Devuelve el mensaje de error
    public getError(): string {
        if (this.isSuccess) {
            throw new Error("No puedes obtener un error de un resultado exitoso.");
        }
        return this.error as string;
    }

    // Métodos estáticos para instanciar fácilmente
    public static ok<U>(value?: U): Result<U> {
        return new Result<U>(true, null, value);
    }

    public static fail<U>(error: string): Result<U> {
        return new Result<U>(false, error);
    }
}