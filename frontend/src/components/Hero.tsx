import React from 'react';
import { ArrowDown, Code2, Sparkles, Terminal, Play, Cpu, Layers } from 'lucide-react';
import { sound } from '../audio/SoundFX';
import { AudioSpectrum } from './AudioSpectrum';

interface HeroProps {
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center items-center px-4 sm:px-6">
      <div className="max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        {/* Top Badges / Status Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-700/60 text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>ESTUDIANTE DE ING. DE SOFTWARE • UPC</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-950/40 border border-pink-500/30 text-xs font-mono text-pink-300">
            <Sparkles className="w-3 h-3 text-pink-400" />
            <span>ARTE EXPERIMENTAL & SONIDO</span>
          </div>
        </div>

        {/* Main Identity Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-['Syne'] tracking-tight leading-[0.95] mb-6 text-white uppercase">
          STEPHANO <br />
          <span className="aurora-gradient-text drop-shadow-[0_10px_35px_rgba(224,36,195,0.35)]">
            VALDIVIA
          </span>
        </h1>

        {/* Subtitle / Role Statement */}
        <p className="text-xl sm:text-2xl text-zinc-200 font-medium max-w-3xl mb-4">
          Software Engineer & Arquitecto de Experiencias Interactivas
        </p>

        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed mb-8">
          Diseño sistemas distribuidos robustos, APIs REST escalables y microservicios orientados a eventos, 
          fusionados con la estética visceral, sincopada y texturizada del post-punk y el digicore experimental.
        </p>

        {/* Audio Spectrum Visualizer Bar in Hero */}
        <div className="mb-10">
          <AudioSpectrum barCount={36} className="shadow-lg shadow-pink-500/10" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={() => {
              sound.playClick();
              sound.playSubBass();
              onExploreProjects();
            }}
            onMouseEnter={() => sound.playHover()}
            className="group relative px-6 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 shadow-xl shadow-pink-600/25 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5"
          >
            <Play className="w-4 h-4 fill-white group-hover:translate-x-0.5 transition-transform" />
            <span>DISCOGRAFÍA DE CÓDIGO</span>
          </button>

          <a
            href="#sonic-dna"
            onClick={() => {
              sound.playClick();
              sound.playChord();
            }}
            onMouseEnter={() => sound.playHover()}
            className="px-6 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-zinc-200 glass-panel hover:bg-zinc-800/80 hover:text-white border-zinc-700/60 hover:border-purple-500/50 transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>MANIFIESTO & ADN SONORO</span>
          </a>

          <a
            href="#contact"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="px-5 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>CONTACTO // CV</span>
          </a>
        </div>

        {/* Technical Stack Strip */}
        <div className="w-full max-w-4xl pt-8 border-t border-zinc-850 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
            <div className="text-[10px] font-mono text-zinc-400 flex items-center gap-1.5 mb-1">
              <Cpu className="w-3.5 h-3.5 text-pink-400" /> BACKEND
            </div>
            <div className="text-xs font-semibold text-zinc-200">Spring Boot 3 • .NET 8 • Flask</div>
          </div>

          <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
            <div className="text-[10px] font-mono text-zinc-400 flex items-center gap-1.5 mb-1">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" /> FRONTEND
            </div>
            <div className="text-xs font-semibold text-zinc-200">React • TypeScript • Vue 3</div>
          </div>

          <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
            <div className="text-[10px] font-mono text-zinc-400 flex items-center gap-1.5 mb-1">
              <Layers className="w-3.5 h-3.5 text-purple-400" /> ARQUITECTURA
            </div>
            <div className="text-xs font-semibold text-zinc-200">RabbitMQ • C4 • Event Sourcing</div>
          </div>

          <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
            <div className="text-[10px] font-mono text-zinc-400 flex items-center gap-1.5 mb-1">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" /> DATOS & DEVOPS
            </div>
            <div className="text-xs font-semibold text-zinc-200">PostgreSQL • Redis • Docker</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#projects"
          onMouseEnter={() => sound.playHover()}
          onClick={() => sound.playClick()}
          className="mt-12 text-zinc-400 hover:text-pink-400 transition-colors flex flex-col items-center gap-1 font-mono text-[11px]"
        >
          <span>SCROLL DOWN</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-pink-400" />
        </a>
      </div>
    </section>
  );
};
