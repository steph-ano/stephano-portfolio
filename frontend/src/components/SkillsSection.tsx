import React from 'react';
import { Code, Server, Database, Cpu, GitBranch, Palette, CheckCircle2, Terminal } from 'lucide-react';
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
      color: "sky",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Vue.js", "Angular", "Responsive Design", "TailwindCSS"]
    },
    {
      category: "Backend & APIs Distribuidas",
      icon: "Server",
      color: "monarch",
      skills: ["Spring Boot 3", "Java", "C# .NET 8", "ASP.NET Core", "Python (Flask, Pandas)", "RESTful APIs", "SignalR (WebSockets)", "Hangfire"]
    },
    {
      category: "Bases de Datos & Caché",
      icon: "Database",
      color: "gold",
      skills: ["SQL Avanzado", "Normalización (hasta 5FN)", "PostgreSQL", "Triggers & SPs", "MongoDB (NoSQL)", "Redis (Caché)", "Spring JPA", "EF Core"]
    },
    {
      category: "Arquitectura & Metodologías",
      icon: "Cpu",
      color: "sky",
      skills: ["Microservicios", "Event Sourcing", "Patrón Sagas", "RabbitMQ", "Modelos C4", "Docker & Compose", "GitHub Actions CI/CD"]
    },
    {
      category: "Marcos Ágiles & Escalados",
      icon: "GitBranch",
      color: "gold",
      skills: ["Scrum", "Kanban", "XP (Extreme Programming)", "Lean Software", "SAFe", "LeSS", "Scrum@Scale", "Disciplined Agile (DA)"]
    },
    {
      category: "UI/UX & Habilidades Blandas",
      icon: "Palette",
      color: "monarch",
      skills: ["Flow Diagrams", "Design Systems & UI Patterns", "Heurísticas de Usabilidad", "Trabajo en Equipo", "Resolución de Problemas", "Inglés Avanzado"]
    }
  ];

  const items = categories && categories.length > 0 ? categories : defaultCategories;

  const renderIcon = (name: string, colorVariant: string) => {
    switch (name) {
      case 'Code':
        return <Code className="w-5 h-5 text-sky-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-orange-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-amber-400" />;
      default:
        return <Palette className="w-5 h-5 text-orange-400" />;
    }
  };

  const getStampClass = (index: number) => {
    const rem = index % 3;
    if (rem === 0) return 'tech-stamp-sky';
    if (rem === 1) return 'tech-stamp-monarch';
    return 'tech-stamp';
  };

  const getCheckClass = (index: number) => {
    const rem = index % 3;
    if (rem === 0) return 'text-sky-400';
    if (rem === 1) return 'text-orange-400';
    return 'text-amber-400';
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Editorial Section Header */}
      <div className="section-editorial-bar flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span>COMPETENCIAS CLAVE // CAPAS DE ARQUITECTURA DE SOFTWARE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-['Syne'] text-white">
            MATRIZ TÉCNICA & <span className="desert-gold-gradient">ESPECIFICACIÓN</span>
          </h2>
          <p className="text-zinc-300 text-sm mt-2 max-w-xl leading-relaxed">
            Habilidades de ingeniería estructuradas por capas funcionales, desde la persistencia relacional
            y mensajería en colas de eventos hasta microservicios y diseño centrado en el usuario.
          </p>
        </div>

        <div className="text-xs font-mono text-zinc-400 flex items-center gap-2 self-start md:self-end">
          <Terminal className="w-4 h-4 text-amber-400" />
          <span>SPEC-VERSION: 2024.3 // UPC MONTERRICO</span>
        </div>
      </div>

      {/* Blueprint Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((cat, idx) => (
          <div
            key={cat.category}
            onMouseEnter={() => sound.playHover()}
            className="group zine-panel corner-crosshairs rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:scale-[1.01] hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10 transition-all"
          >
            <div>
              {/* Module Header Stamp & Icon */}
              <div className="flex items-center justify-between mb-5">
                <span className={getStampClass(idx)}>
                  MOD.0{idx + 1} // ARCHITECTURE
                </span>

                <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 group-hover:scale-105 group-hover:border-amber-500/30 transition-all">
                  {renderIcon(cat.icon, cat.color)}
                </div>
              </div>

              {/* Category Title */}
              <h3 className="text-base sm:text-lg font-bold font-['Syne'] text-white group-hover:text-amber-200 transition-colors mb-4">
                {cat.category}
              </h3>

              {/* Skills Tag Cloud */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    onMouseEnter={() => sound.playHover()}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-900/90 border border-amber-500/15 text-zinc-200 hover:text-white hover:border-amber-500/50 hover:bg-amber-500/10 transition-all"
                  >
                    <CheckCircle2 className={`w-3 h-3 ${getCheckClass(idx)} shrink-0`} />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>{cat.skills.length} TECNOLOGÍAS</span>
              <span className="text-amber-400/80">VERIFICADO</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
