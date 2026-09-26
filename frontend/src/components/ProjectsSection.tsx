import React, { useState } from 'react';
import { Project } from '../types';
import { sound } from '../audio/SoundFX';
import { Star, GitFork, ExternalLink, Volume2, Sparkles, Radio, ArrowUpRight } from 'lucide-react';
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

  // Get themed accent bar gradient based on project stack
  const getProjectAccentGradient = (p: Project) => {
    if (p.id === 'vortexflow') {
      return 'linear-gradient(to right, #ea580c, #d99b43, #fef08a)'; // Monarch to Desert Gold
    } else if (p.id === 'drug-graph-visualizer') {
      return 'linear-gradient(to right, #5ba4e5, #38bdf8, #d99b43)'; // Desert Sky to Gold
    } else {
      return 'linear-gradient(to right, #f59e0b, #ea580c, #5ba4e5)'; // Gold, Monarch, Sky
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Editorial Section Header */}
      <div className="section-editorial-bar flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
            <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>REGISTRO DE SISTEMAS // GITHUB LIVE PIPELINE [SPRING BOOT 3 + CAFFEINE]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-['Syne'] text-white">
            SISTEMAS & <span className="desert-gold-gradient">ARQUITECTURA</span>
          </h2>
          <p className="text-zinc-300 text-sm mt-2 max-w-xl leading-relaxed">
            Arquitecturas de software integradas en vivo con GitHub API mediante backend Spring Boot 3 con Caffeine Cache.
            Diseñadas bajo patrones de microservicios distribuidos, streaming con RabbitMQ y modelado de grafos.
          </p>
        </div>

        {/* Filter Badges with Editorial Zine Styling */}
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => {
                sound.playClick();
                setFilter(opt.key);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                filter === opt.key
                  ? 'bg-amber-400 text-black font-bold shadow-md shadow-amber-500/20'
                  : 'zine-panel text-zinc-300 hover:text-white hover:border-amber-500/50'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid with Zine Drafting Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredProjects.map((project, index) => {
          return (
            <div
              key={project.id}
              onClick={() => {
                sound.playClick();
                setSelectedProject(project);
              }}
              onMouseEnter={() => sound.playHover()}
              className="group relative zine-panel corner-crosshairs rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:scale-[1.01] hover:border-amber-500/60 hover:shadow-2xl hover:shadow-amber-500/10 transition-all cursor-pointer overflow-hidden"
            >
              {/* Top Accent Gradient Bar matching Mountain Desert & PPTA colors */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5 opacity-80 group-hover:opacity-100 transition-opacity"
                style={{
                  backgroundImage: getProjectAccentGradient(project)
                }}
              />

              <div>
                {/* Module Stamp & Acoustic Trigger */}
                <div className="flex items-center justify-between mb-4">
                  <span className="tech-stamp">
                    SYS.0{index + 1} // {project.primaryLanguage.toUpperCase()}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handlePlaySoundMood(e, project)}
                      title="Probar respuesta acústica de señal"
                      className="p-1.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-amber-300 hover:text-white border border-amber-500/30 hover:border-amber-400 transition-colors"
                    >
                      <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                    </button>

                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900/90 text-amber-200/90 border border-amber-500/25">
                      {project.bpm || 'CLOCK: REALTIME'}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-['Syne'] text-white group-hover:text-amber-200 transition-colors mb-2 leading-snug">
                  {project.displayName || project.name}
                </h3>

                {/* Tagline */}
                <p className="text-xs text-zinc-300 leading-relaxed mb-4 font-normal">
                  {project.tagline}
                </p>

                {/* Sound Mood Note */}
                {project.soundMood && (
                  <div className="mb-4 text-[11px] font-mono text-amber-200/80 italic flex items-center gap-1.5 bg-amber-500/5 px-2.5 py-1 rounded-md border border-amber-500/15">
                    <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                    <span className="truncate">{project.soundMood}</span>
                  </div>
                )}

                {/* Topics / Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.topics?.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-zinc-900/80 border border-amber-500/20 text-zinc-300 group-hover:border-amber-500/40 transition-colors"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Live Stats & Inspect Trigger */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-zinc-200 font-semibold" title="GitHub Stars">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                    {project.stars || 0}
                  </span>
                  <span className="flex items-center gap-1 text-zinc-200 font-semibold" title="GitHub Forks">
                    <GitFork className="w-3.5 h-3.5 text-sky-400" />
                    {project.forks || 0}
                  </span>
                  <span className="text-amber-400 font-bold">
                    {project.primaryLanguage}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-amber-400 group-hover:text-amber-300 group-hover:translate-x-1 transition-all">
                  <span className="text-[11px] font-bold">INSPECCIONAR</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
