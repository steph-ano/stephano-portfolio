# Stephano Valdivia Quispe — Portfolio & CV Inmersivo ⚡

> **Software Engineer & Creative Technologist**  
> *Arquitectura de software moderna, microservicios y experiencias interactivas impulsadas por arte y sonido.*  
> Estudiante de 8vo ciclo de Ingeniería de Software — Universidad Peruana de Ciencias Aplicadas (UPC).

---

## ⚡ Concepto & Dirección de Arte

Este proyecto trasciende el portafolio corporativo estándar para convertirse en una **obra conceptual viva**. Fusiona el rigor arquitectónico de sistemas distribuidos (Spring Boot 3, C# .NET 8, RabbitMQ, Event Sourcing, C4 Model, PostgreSQL, Redis) con la energía visceral, sincopada y texturizada del **post-punk, experimental hip hop y digicore** (inspirado en *JPEGMAFIA, Genesis Owusu, Jane Remover, Geordie Greep, Nujabes, Xiu Xiu, Viagra Boys, Model/Actriz y Maruja*).

### Elementos Sensoriales
- **Visualizador de Frecuencias de Audio**: Espectrograma dinámico interactivo con pulsos reactivos.
- **Motor de Micro-Sonido Nativo (Web Audio API)**: Sintetizador en tiempo real para clics analógicos, barridos sinusoidales, bajo 808 y acordes armónicos estilo jazz/lo-fi (sin librerías pesadas de audio).
- **Control de Audio Global**: Botón de Mute / Unmute con persistencia en `localStorage`.
- **Canvas de Luz Aurora**: Partículas fluidas e iridiscentes que reaccionan a la inercia del cursor.
- **Micro-Sampler Pad (MPC Web)**: Pad interactivo de 6 botones para disparar texturas sonoras generadas por código.

---

## 🏗️ Arquitectura de la Solución

```
┌────────────────────────────────────────────────────────┐
│                   CLIENTE (BROWSER)                    │
│      React 18 + Vite + TailwindCSS + Web Audio API     │
└───────────────────────────┬────────────────────────────┘
                            │  HTTP (REST API)
                            ▼
┌────────────────────────────────────────────────────────┐
│               BACKEND (SPRING BOOT 3.4)                │
│                                                        │
│  [ProjectsController]  [CvController]  [WebConfig]     │
│            │                 │                         │
│  [GitHubService]      [CvService]      [CacheConfig]   │
│            │ (Caffeine Cache TTL: 60 min)              │
│  [projects-config.json]                                │
└───────────────────────────┬────────────────────────────┘
                            │  HTTPS (Bearer PAT opcional)
                            ▼
┌────────────────────────────────────────────────────────┐
│                     GITHUB API                         │
│         api.github.com/repos/{owner}/{repo}            │
└────────────────────────────────────────────────────────┘
```

### ¿Por qué esta arquitectura?
1. **Seguridad Total**: Tu token personal de GitHub (`GITHUB_TOKEN`) reside exclusivamente en el backend y jamás se expone al cliente.
2. **Caché Inteligente**: Se implementa **Caffeine Cache** con TTL de 60 minutos para evitar los límites de rate limit de GitHub (60 req/hora sin token, 5000 req/hora con token).
3. **Curaduría & Metadatos Enriquecidos**: A través de `projects-config.json` tú decides exactamente qué repositorios mostrar, su orden, BPM asignado, paleta y descripción arquitectónica personalizada.
4. **Resiliencia (Graceful Degradation)**: Si la API de GitHub sufre rate limit o no hay conexión, el backend entrega automáticamente los datos curados sin romper la interfaz.

---

## 📡 Endpoints de la API REST (Spring Boot)

| Método | Endpoint | Descripción | Caché |
|---|---|---|---|
| `GET` | `/api/projects` | Lista curada de proyectos enriquecida con métricas en vivo de GitHub | Caffeine (`projects`) |
| `GET` | `/api/projects/{id}` | Detalle del proyecto con README renderizado y estadísticas | Caffeine (`projectDetails`) |
| `POST`| `/api/projects/cache/evict` | Invalida la caché para forzar recarga inmediata de GitHub | N/A |
| `GET` | `/api/cv` | Perfil académico UPC, competencias clave, certificaciones y ADN musical | Caffeine (`cv`) |
| `GET` | `/api/health` | Estado de salud de la API | N/A |

---

## 🚀 Puesta en Marcha Local

### Requisitos
- **Node.js**: v18+ (recomendado v22+)
- **Java**: JDK 21+ o JDK 25

### 1. Clonar y configurar variables de entorno (Opcional)
Para habilitar hasta 5,000 peticiones por hora a GitHub, puedes definir la variable de entorno antes de iniciar el backend:
```powershell
$env:GITHUB_TOKEN="ghp_tuTokenDeGitHubOpcional"
```
*(Si no configuras ningún token, el sistema funciona igualmente sin problemas con el límite estándar o el fallback curado).*

### 2. Ejecutar el Backend (Spring Boot 3)
```powershell
cd backend
.\mvnw.cmd spring-boot:run
```
La API estará lista en: `http://localhost:8080/api/projects` y `http://localhost:8080/api/cv`.

### 3. Ejecutar el Frontend (React + Vite)
En otra terminal:
```powershell
cd frontend
npm install
npm run dev
```
La aplicación web estará disponible en: `http://localhost:5173`.

---

## 🎨 Personalización de Proyectos
Para agregar, reordenar o cambiar los proyectos visibles:
1. Edita `backend/src/main/resources/projects-config.json`.
2. Puedes ajustar el `bpm`, `soundMood`, `topics`, `badgeColor` y descripción arquitectónica.
3. Si el backend está en ejecución, puedes llamar a `POST http://localhost:8080/api/projects/cache/evict` para refrescar los datos sin reiniciar el servidor.

---

## 👨‍💻 Autor
**Stephano Renan Valdivia Quispe**  
- **Email**: [stephrvq@gmail.com](mailto:stephrvq@gmail.com)  
- **LinkedIn**: [linkedin.com/in/stephanovaldivia](https://linkedin.com/in/stephanovaldivia)  
- **GitHub**: [github.com/stephanovaldivia](https://github.com/stephanovaldivia)  
- **Teléfono**: +51 923 399 455
