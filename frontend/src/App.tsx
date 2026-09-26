import React, { useEffect, useState } from 'react';
import { AuroraCanvas } from './components/AuroraCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VisualGallerySection } from './components/VisualGallerySection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Project, CvData } from './types';

// Fallback curated projects in case API is loading or offline
const INITIAL_PROJECTS: Project[] = [
  {
    id: "vortexflow",
    name: "VortexFlow",
    displayName: "VortexFlow – Analítica de Tendencias en Tiempo Real",
    tagline: "Event-driven real-time pipeline con RabbitMQ, SignalR, .NET 8 y microservicios",
    description: "Aplicación web distribuida para análisis y automatización que procesa insights en tiempo real mediante colas de mensajes y WebSockets.",
    customDescription: "Diseñado bajo patrones de arquitectura de microservicios y Event Sourcing con RabbitMQ. Procesa streams de datos a alta velocidad con persistencia políglota (PostgreSQL + Redis).",
    githubOwner: "stephanovaldivia",
    githubRepo: "VortexFlow",
    primaryLanguage: "C#",
    languages: {
      "C#": 48.0,
      "TypeScript": 25.0,
      "Vue": 15.0,
      "Python": 12.0
    },
    topics: ["microservices", "rabbitmq", "signalr", "docker", "redis", "postgresql", "event-sourcing"],
    homepage: "https://github.com/stephanovaldivia/VortexFlow",
    githubUrl: "https://github.com/stephanovaldivia/VortexFlow",
    featured: true,
    order: 1,
    badgeColor: "#e024c3",
    bpm: "164 BPM",
    soundMood: "Fast-paced, kinetic, industrial pulse",
    stars: 12,
    forks: 3
  },
  {
    id: "drug-graph-visualizer",
    name: "Drug-Graph-Visualizer",
    displayName: "Drug Graph Visualizer – Análisis de Medicamentos & Redes",
    tagline: "Visualización computacional de grafos farmacológicos y relaciones químicas",
    description: "Aplicación web interactiva para la exploración y análisis estructural de medicamentos basada en teoría de grafos y algoritmos de centralidad.",
    customDescription: "Implementa modelado de redes complejas con NetworkX y Python Flask en backend, conectado a una interfaz reactiva en Vue 3 con renderizado dinámico de nodos.",
    githubOwner: "stephanovaldivia",
    githubRepo: "Drug-Graph-Visualizer",
    primaryLanguage: "Python",
    languages: {
      "Python": 55.0,
      "Vue": 30.0,
      "JavaScript": 15.0
    },
    topics: ["graph-theory", "networkx", "flask", "vue3", "primevue", "data-visualization"],
    homepage: "https://github.com/stephanovaldivia/Drug-Graph-Visualizer",
    githubUrl: "https://github.com/stephanovaldivia/Drug-Graph-Visualizer",
    featured: true,
    order: 2,
    badgeColor: "#22d3ee",
    bpm: "112 BPM",
    soundMood: "Organic, algorithmic, ambient resonance",
    stars: 8,
    forks: 2
  },
  {
    id: "drmuzzzic-engine",
    name: "DRMUZZZIC",
    displayName: "DRMUZZZIC – Laboratorio Sonoro & Visualizador Reactivo",
    tagline: "Exploración audiovisual experimental, sintetizador web y estética vanguardista",
    description: "Plataforma experimental inspirada en digicore, glitch y post-punk para el procesamiento y visualización de señales de audio en tiempo real.",
    customDescription: "Combina Web Audio API con shaders y canvas interactivos para traducir frecuencias sonoras en pulsos lumínicos psicodélicos y formas de onda reactivas.",
    githubOwner: "stephanovaldivia",
    githubRepo: "DRMUZZZIC",
    primaryLanguage: "TypeScript",
    languages: {
      "TypeScript": 60.0,
      "CSS": 25.0,
      "HTML": 15.0
    },
    topics: ["web-audio-api", "dsp", "canvas", "react", "tailwind", "music-tech"],
    homepage: "https://github.com/stephanovaldivia",
    githubUrl: "https://github.com/stephanovaldivia",
    featured: true,
    order: 3,
    badgeColor: "#f43f5e",
    bpm: "140 BPM",
    soundMood: "Glitch, post-punk distortion, expressive textures",
    stars: 15,
    forks: 4
  }
];

export const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [cvData, setCvData] = useState<CvData | null>(null);

  useEffect(() => {
    // Fetch live curated projects from Spring Boot backend
    fetch('/api/projects')
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('API offline');
      })
      .then((data: Project[]) => {
        if (data && data.length > 0) {
          setProjects(data);
        }
      })
      .catch(() => {
        // Fallback already pre-loaded
      });

    // Fetch live CV data from Spring Boot backend
    fetch('/api/cv')
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('API offline');
      })
      .then((data: CvData) => {
        if (data) {
          setCvData(data);
        }
      })
      .catch(() => {
        // Fallback
      });
  }, []);

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0d12] text-zinc-100 relative selection:bg-amber-500 selection:text-black">
      {/* Background Interactive Aurora & Particle Field */}
      <AuroraCanvas />

      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 analog-grain opacity-30" />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero onExploreProjects={handleExploreProjects} />
        <VisualGallerySection />
        <ProjectsSection projects={projects} />
        <SkillsSection categories={cvData?.skillCategories} />
        <TimelineSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
