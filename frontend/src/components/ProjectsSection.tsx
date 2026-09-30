import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { sound } from '../audio/SoundFX';
import { Star, GitFork, Volume2, Sparkles, Radio, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [itemsPerView, setItemsPerView] = useState<number>(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - itemsPerView);

  const handlePrev = () => {
    sound.playClick();
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    sound.playClick();
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const handlePlaySoundMood = (e: React.MouseEvent, p: Project) => {
    e.stopPropagation();
    if (p.id === 'ledgerly') {
      sound.playChord();
    } else if (p.id === 'vigilante') {
      sound.playChord();
    } else if (p.id === 'vortexflow' || p.id === 'arbitraje-bot') {
      sound.playSubBass();
    } else if (p.id === 'drug-graph-visualizer') {
      sound.playChord();
    } else {
      sound.playGlitch();
    }
  };

  const getProjectAccentGradient = (p: Project) => {
    if (p.id === 'ledgerly') {
      return 'linear-gradient(to right, #00ADD8, #38bdf8, #10b981)';
    } else if (p.id === 'vigilante') {
      return 'linear-gradient(to right, #38bdf8, #5ba4e5, #fef08a)';
    } else if (p.id === 'vortexflow') {
      return 'linear-gradient(to right, #ea580c, #d99b43, #fef08a)';
    } else if (p.id === 'drug-graph-visualizer') {
      return 'linear-gradient(to right, #5ba4e5, #38bdf8, #d99b43)';
    } else if (p.id === 'arbitraje-bot') {
      return 'linear-gradient(to right, #d99b43, #ea580c, #38bdf8)';
    } else {
      return 'linear-gradient(to right, #f59e0b, #ea580c, #5ba4e5)';
    }
  };

  const getTransformStyle = () => {
    if (itemsPerView === 3) {
      return `translateX(calc(-${currentIndex} * (33.333% + 0.5rem)))`;
    }
    if (itemsPerView === 2) {
      return `translateX(calc(-${currentIndex} * (50% + 0.75rem)))`;
    }
    return `translateX(calc(-${currentIndex} * (100% + 1.5rem)))`;
  };

  return (
    <section id="projects" className="py-16 sm:py-24 px-3.5 sm:px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Editorial Section Header */}
      <div className="section-editorial-bar flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6">
        <div>
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-amber-400 mb-2 flex-wrap">
            <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
            <span>REGISTRO DE SISTEMAS // GITHUB LIVE PIPELINE [CARRUSEL]</span>
          </div>
          <h2 className="text-[clamp(1.5rem,6.2vw,3rem)] font-black font-['Syne'] text-white leading-tight break-words tracking-tight">
            SISTEMAS & <span className="desert-gold-gradient">ARQUITECTURA</span>
          </h2>
          <p className="text-zinc-300 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
            Sistemas de software seleccionados e integrados en vivo con GitHub API mediante backend Spring Boot 3 con Caffeine Cache.
            Abarcando motores de contabilidad inmutable en Go (Ledgerly), plataformas geoespaciales con Sentinel-2 (Vigilante), microservicios y grafos.
          </p>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center gap-3 self-start md:self-end">
          <div className="text-xs font-mono text-amber-300/80 px-3 py-1.5 rounded-lg zine-panel border border-amber-500/25">
            SYS <span className="text-white font-bold">0{currentIndex + 1}</span> / 0{projects.length}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              onMouseEnter={() => sound.playHover()}
              className="p-2 sm:p-2.5 rounded-xl zine-panel hover:border-amber-400 text-zinc-300 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95"
              title="Proyecto anterior"
              aria-label="Proyecto anterior"
            >
              <ChevronLeft className="w-4 h-4 text-amber-400" />
            </button>

            <button
              onClick={handleNext}
              onMouseEnter={() => sound.playHover()}
              className="p-2 sm:p-2.5 rounded-xl zine-panel hover:border-amber-400 text-zinc-300 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95"
              title="Proyecto siguiente"
              aria-label="Proyecto siguiente"
            >
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Projects Carousel Container with touch gestures */}
      <div
        className="relative overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slider Track */}
        <div
          className="flex transition-transform duration-500 ease-out gap-6"
          style={{ transform: getTransformStyle() }}
        >
          {projects.map((project, index) => {
            return (
              <div
                key={project.id}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0"
              >
                <div
                  onClick={() => {
                    sound.playClick();
                    setSelectedProject(project);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className="group relative h-full zine-panel corner-crosshairs rounded-2xl p-5 sm:p-7 flex flex-col justify-between hover:scale-[1.01] hover:border-amber-500/60 hover:shadow-2xl hover:shadow-amber-500/10 transition-all cursor-pointer overflow-hidden"
                >
                  {/* Top Accent Gradient Bar */}
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
                          className="p-1.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-amber-300 hover:text-white border border-amber-500/30 hover:border-amber-400 transition-colors cursor-pointer"
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

                    <div className="flex items-center gap-1 text-amber-400 group-hover:text-amber-300 group-hover:translate-x-1 transition-all font-bold">
                      <span className="text-[11px]">INSPECCIONAR</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Indicator Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              sound.playClick();
              setCurrentIndex(idx);
            }}
            onMouseEnter={() => sound.playHover()}
            className={`h-1.5 transition-all rounded-full cursor-pointer ${
              currentIndex === idx
                ? 'w-8 bg-amber-400 shadow-md shadow-amber-500/40'
                : 'w-2 bg-zinc-700 hover:bg-zinc-500'
            }`}
            aria-label={`Ir al proyecto ${idx + 1}`}
          />
        ))}
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
