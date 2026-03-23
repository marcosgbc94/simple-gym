### Título y Descripción
# Simple Gym API
API para sistema SimpleGym el cual es una herramienta para gestionar rutinas de entrenamiento físico de gimnasio y deportes en general.

### Stack Tecnológico
Se ocuparon las siguietes tecnologías:
- Runtime: Node.js con TypeScript.
- Framework: Express.
- Arquitectura: Hexagonal (Domain-Driven Design principles).
- Base de Datos: Supabase (PostgreSQL).
- DI Container: TSyringe.
- Validación: Zod.
- Testing: Jest.
- Docs: Swagger.

### Estructura del Proyecto
Esto es vital en Hexagonal para que no crean que es un desorden:  
```
src/  
 ├── application/    # Casos de Uso  
 ├── domain/         # Entidades y Contratos (Interfaces)  
 ├── infrastructure/ # Implementaciones (Repo, DB, Swagger)  
 └── presentation/   # Express, Controllers, Routes, Validations (Zod)  
 ```

### Instalación y Uso
Los comandos a usar son:

`npm install`

Configurar el `.env`
```
PORT=
SUPABASE_URL=
SUPABASE_KEY=
```

`npm run dev`

## Documentación de la API (Swagger)

Una vez que el servidor esté corriendo, puede acceder a la documentación interactiva y probar los endpoints directamente desde el navegador:

* **Local:** [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

> **Nota:** La documentación fue generada usando `swagger-jsdoc` siguiendo el estándar OpenAPI 3.0.