import React from 'react';
import { Code, Server, Database, Cpu, GitBranch, Palette, CheckCircle2 } from 'lucide-react';
import { sound } from '../audio/SoundFX';

interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  skills: string[];
}

interface SkillsSectionProps {
  categories?: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ categories }) => {
  const defaultCategories: SkillCategory[] = [
    {
      category: "Desarrollo Web & Frontend",
      icon: "Code",
      color: "from-pink-500 to-rose-500",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Vue.js", "Angular", "Responsive Design", "TailwindCSS"]
    },
    {
      category: "Backend & APIs Distribuidas",
      icon: "Server",
      color: "from-purple-500 to-indigo-500",
      skills: ["Spring Boot 3", "Java", "C# .NET 8", "ASP.NET Core", "Python (Flask, Pandas)", "RESTful APIs", "SignalR (WebSockets)", "Hangfire"]
    },
    {
      category: "Bases de Datos & Caché",
      icon: "Database",
      color: "from-cyan-400 to-blue-500",
      skills: ["SQL Avanzado", "Normalización (hasta 5FN)", "PostgreSQL", "Triggers & SPs", "MongoDB (NoSQL)", "Redis (Caché)", "Spring JPA", "EF Core"]
    },
    {
      category: "Arquitectura & Metodologías",
      icon: "Cpu",
      color: "from-emerald-400 to-teal-500",
      skills: ["Microservicios", "Event Sourcing", "Patrón Sagas", "RabbitMQ", "Modelos C4", "Docker & Compose", "GitHub Actions CI/CD"]
    },
    {
      category: "Marcos Ágiles & Escalados",
      icon: "GitBranch",
      color: "from-amber-400 to-orange-500",
      skills: ["Scrum", "Kanban", "XP (Extreme Programming)", "Lean Software", "SAFe", "LeSS", "Scrum@Scale", "Disciplined Agile (DA)"]
    },
    {
      category: "UI/UX & Habilidades Blandas",
      icon: "Palette",
      color: "from-fuchsia-500 to-purple-600",
      skills: ["Flow Diagrams", "Design Systems & UI Patterns", "Heurísticas de Usabilidad", "Trabajo en Equipo", "Resolución de Problemas", "Inglés Avanzado"]
    }
  ];

  const items = categories && categories.length > 0 ? categories : defaultCategories;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Code': return <Code className="w-5 h-5 text-pink-400" />;
      case 'Server': return <Server className="w-5 h-5 text-purple-400" />;
      case 'Database': return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-amber-400" />;
      default: return <Palette className="w-5 h-5 text-rose-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
          <span>COMPETENCIAS CLAVE & INGENIERÍA</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-['Syne'] text-white">
          MATRIZ TÉCNICA & <span className="cyan-gradient-text">ARQUITECTURA</span>
        </h2>
        <p className="text-zinc-400 text-sm mt-3">
          Habilidades de ingeniería de software estructuradas por capas funcionales, desde la capa de persistencia 
          y colas de mensajería hasta interfaces web altamente responsivas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((cat, idx) => (
          <div
            key={cat.category}
            onMouseEnter={() => sound.playHover()}
            className="group glass-panel rounded-2xl p-6 border border-zinc-800/80 hover:border-zinc-700 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:scale-105 transition-transform">
                {renderIcon(cat.icon)}
              </div>
              <h3 className="text-base font-bold font-['Syne'] text-zinc-100 group-hover:text-white transition-colors">
                {cat.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  onMouseEnter={() => sound.playHover()}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors"
                >
                  <CheckCircle2 className="w-3 h-3 text-pink-400 shrink-0" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
