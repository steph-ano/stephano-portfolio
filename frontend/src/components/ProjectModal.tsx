import React from 'react';
import { X, ExternalLink, Disc3, Cpu, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../types';
import { sound } from '../audio/SoundFX';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-panel-glow bg-[#0d0f18] rounded-2xl border border-zinc-700 shadow-2xl p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          onMouseEnter={() => sound.playHover()}
          className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-gradient-to-tr from-pink-500/20 to-purple-500/20 border border-pink-500/40 text-pink-400">
            <Disc3 className="w-6 h-6 animate-spin duration-3000" />
          </div>
          <div>
            <span className="mono-tag text-pink-400 font-semibold">{project.bpm || '120 BPM'} • {project.soundMood || 'VANGUARD'}</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-['Syne'] text-white">
              {project.displayName || project.name}
            </h2>
          </div>
        </div>

        <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-medium">
          {project.tagline}
        </p>

        {/* Architectural Overview */}
        <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 mb-6">
          <div className="text-xs font-mono text-zinc-400 flex items-center gap-2 mb-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>ARQUITECTURA & DISEÑO DEL SISTEMA</span>
          </div>
          <p className="text-zinc-300 text-sm leading-relaxed">
            {project.customDescription || project.description}
          </p>
        </div>

        {/* Languages & Distribution */}
        {project.languages && Object.keys(project.languages).length > 0 && (
          <div className="mb-6">
            <div className="text-xs font-mono text-zinc-400 mb-2 flex items-center justify-between">
              <span>DISTRIBUCIÓN DE CÓDIGO</span>
              <span className="text-pink-400">GITHUB LIVE METRICS</span>
            </div>
            <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden flex mb-2">
              {Object.entries(project.languages).map(([lang, pct], idx) => {
                const colors = ['bg-pink-500', 'bg-purple-500', 'bg-cyan-400', 'bg-emerald-400', 'bg-amber-400'];
                return (
                  <div
                    key={lang}
                    style={{ width: `${pct}%` }}
                    className={`${colors[idx % colors.length]}`}
                    title={`${lang}: ${pct}%`}
                  />
                );
              })}
            </div>
            <div className="flex flex-wrap gap-3 text-xs font-mono text-zinc-400">
              {Object.entries(project.languages).map(([lang, pct]) => (
                <span key={lang}>
                  <span className="text-zinc-200">{lang}</span>: {pct}%
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Topics / Tags */}
        {project.topics && (
          <div className="mb-6">
            <div className="text-xs font-mono text-zinc-400 mb-2">TOPICS & INFRAESTRUCTURA</div>
            <div className="flex flex-wrap gap-2">
              {project.topics.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-800/80 border border-zinc-700/60 text-zinc-300"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Documentation / Readme preview */}
        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 mb-6 font-mono text-xs text-zinc-300 whitespace-pre-wrap leading-relaxed">
          <div className="flex items-center gap-2 text-zinc-400 pb-2 mb-2 border-b border-zinc-800">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>README SPECIFICATION</span>
          </div>
          {project.readmeMarkdown || project.description}
        </div>

        {/* Modal Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-800">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>GITHUB: {project.githubOwner}/{project.githubRepo}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="px-4 py-2 rounded-xl text-xs font-mono bg-zinc-800 hover:bg-zinc-700 text-white flex items-center gap-2 border border-zinc-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Ver Repositorio</span>
            </a>

            {project.homepage && project.homepage !== project.githubUrl && (
              <a
                href={project.homepage}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="px-4 py-2 rounded-xl text-xs font-mono bg-pink-600 hover:bg-pink-500 text-white flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Demo en Vivo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
