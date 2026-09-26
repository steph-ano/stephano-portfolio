import React, { useState } from 'react';
import { Project } from '../types';
import { sound } from '../audio/SoundFX';
import { Star, GitFork, Disc3, ExternalLink, Code2, Play, Volume2, Sparkles, Terminal, Radio } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('ALL');

  const filterOptions = [
    { label: 'TODOS', key: 'ALL' },
    { label: 'MICROSERVICIOS & .NET', key: 'C#' },
    { label: 'DATA & PYTHON', key: 'Python' },
    { label: 'FRONTEND & REACT/VUE', key: 'TypeScript' }
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'ALL') return true;
    return p.primaryLanguage.toLowerCase() === filter.toLowerCase() ||
           (p.languages && Object.keys(p.languages).some(k => k.toLowerCase() === filter.toLowerCase()));
  });

  const handlePlaySoundMood = (e: React.MouseEvent, p: Project) => {
    e.stopPropagation();
    if (p.id === 'vortexflow') {
      sound.playSubBass();
    } else if (p.id === 'drug-graph-visualizer') {
      sound.playChord();
    } else {
      sound.playGlitch();
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-zinc-800 pb-6 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>REGISTRO DE SISTEMAS // GITHUB LIVE PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-['Syne'] text-white">
            PROYECTOS & <span className="aurora-gradient-text">ARQUITECTURA</span>
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-xl">
            Sistemas seleccionados integrados en vivo con GitHub API mediante backend Spring Boot 3 con Caffeine cache, 
            diseñados con principios de microservicios, teoría de grafos y alta reactividad.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => {
                sound.playClick();
                setFilter(opt.key);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                filter === opt.key
                  ? 'bg-zinc-100 text-black font-semibold shadow-md'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => {
          return (
            <div
              key={project.id}
              onClick={() => {
                sound.playClick();
                setSelectedProject(project);
              }}
              onMouseEnter={() => sound.playHover()}
              className="group relative glass-panel rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all cursor-pointer overflow-hidden"
            >
              {/* Top ambient glow line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-70 group-hover:opacity-100 transition-opacity"
                style={{
                  backgroundImage: `linear-gradient(to right, ${project.badgeColor || '#22d3ee'}, #8b5cf6, #e024c3)`
                }}
              />

              <div>
                {/* Module code & telemetry preview */}
                <div className="flex items-center justify-between mb-4">
                  <span className="mono-tag text-zinc-500 group-hover:text-cyan-400 transition-colors font-bold">
                    SYS.0{index + 1} // {project.primaryLanguage.toUpperCase()}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handlePlaySoundMood(e, project)}
                      title="Probar respuesta acústica de señal"
                      className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-cyan-300 border border-zinc-800 hover:border-cyan-500/40 transition-colors"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>

                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                      {project.bpm || 'CLOCK: REALTIME'}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold font-['Syne'] text-white group-hover:text-pink-300 transition-colors mb-2">
                  {project.displayName || project.name}
                </h3>

                {/* Tagline */}
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {project.tagline}
                </p>

                {/* Sound Mood Note */}
                {project.soundMood && (
                  <div className="mb-4 text-[11px] font-mono text-zinc-400 italic flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-purple-400 shrink-0" />
                    <span className="truncate">{project.soundMood}</span>
                  </div>
                )}

                {/* Topics / Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.topics?.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom live stats & inspect trigger */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-zinc-300">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    {project.stars || 0}
                  </span>
                  <span className="flex items-center gap-1 text-zinc-300">
                    <GitFork className="w-3.5 h-3.5 text-cyan-400" />
                    {project.forks || 0}
                  </span>
                  <span className="text-pink-400 font-semibold">
                    {project.primaryLanguage}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-pink-400 group-hover:translate-x-1 transition-transform">
                  <span className="text-[11px]">INSPECCIONAR</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
