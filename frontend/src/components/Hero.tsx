import React from 'react';
import { ArrowDown, Mail, Phone, Disc3, Sparkles, Terminal, Activity, Play } from 'lucide-react';
import { sound } from '../audio/SoundFX';
import { AudioSpectrum } from './AudioSpectrum';

interface HeroProps {
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center px-4 sm:px-6 overflow-hidden">
      {/* Background: JPEGMAFIA "I Lay Down My Life For You" Wallpaper + Atmospheric Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/ildmlfy.jpg"
          alt="JPEGMAFIA I Lay Down My Life For You Background"
          className="w-full h-full object-cover object-center scale-105 opacity-35 filter brightness-[0.7] contrast-[1.15] saturate-[0.85]"
        />
        {/* Gradients to blend smoothly with obsidian background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090d]/80 via-[#08090d]/60 to-[#08090d]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090d]/85 via-transparent to-[#08090d]/85" />
      </div>

      {/* Main Drafting / Zine Frame inspired by reference1.jpg */}
      <div className="relative z-10 w-full max-w-5xl rounded-3xl border border-zinc-700/60 glass-panel shadow-2xl overflow-hidden p-6 sm:p-10 drafting-grid">
        {/* Corner Crosshairs (+) */}
        <div className="absolute top-3 left-3 text-xs font-mono text-zinc-600 select-none">+</div>
        <div className="absolute top-3 right-3 text-xs font-mono text-zinc-600 select-none">+</div>
        <div className="absolute bottom-3 left-3 text-xs font-mono text-zinc-600 select-none">+</div>
        <div className="absolute bottom-3 right-3 text-xs font-mono text-zinc-600 select-none">+</div>

        {/* Top Header Rule (Reference 1 style) */}
        <div className="flex flex-wrap items-center justify-between pb-6 border-b border-zinc-700/60 text-xs font-mono text-zinc-400 gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-widest text-zinc-200">SOFTWARE ENGINEER</span>
            <span className="text-zinc-600">•</span>
            <span className="text-[11px] text-cyan-400">UPC MONTERRICO</span>
          </div>

          <div className="text-center font-bold tracking-wider text-zinc-300">
            2024–2026 <span className="text-zinc-500 font-normal">// SELECTED WORKS</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-zinc-400 hidden sm:inline">LIMA, PERÚ [12°02'S 77°01'W]</span>
            <div className="flex items-center gap-1 text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-pink-500/80 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
            </div>
          </div>
        </div>

        {/* Center Display: Subtitle & Distressed Stencil Title */}
        <div className="py-12 sm:py-16 text-center flex flex-col items-center relative">
          {/* Subtitle with accent style from reference1 */}
          <div className="text-sm sm:text-base font-mono tracking-[0.25em] text-zinc-300 uppercase mb-3">
            STEPHANO RENAN <span className="font-bold text-white tracking-widest">VALDIVIA's</span>
          </div>

          {/* Giant Brush Typography with Ghost 3D stack */}
          <div className="relative mb-6 select-none">
            {/* Ghost background outlines */}
            <div
              className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-transparent font-['Syne'] uppercase opacity-20 absolute -top-3 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap"
              style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)' }}
            >
              PORTFOLIO
            </div>
            
            <div
              className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-transparent font-['Syne'] uppercase opacity-10 absolute -top-6 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap"
              style={{ WebkitTextStroke: '1px rgba(224, 36, 195, 0.5)' }}
            >
              PORTFOLIO
            </div>

            {/* Front Distressed Title */}
            <h1 className="relative text-6xl sm:text-8xl md:text-9xl font-brush tracking-wide text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.8)] leading-none uppercase">
              PORTFOLIO
            </h1>

            {/* Dry Brush Underline Bar */}
            <div className="w-48 sm:w-80 md:w-96 mx-auto mt-2 h-3.5 bg-gradient-to-r from-zinc-200 via-pink-400 to-cyan-400 dry-brush-line opacity-90 shadow-lg" />
          </div>

          {/* Architectural role & summary */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-300 leading-relaxed font-sans mb-8">
            Arquitecturas distribuidas con <b>Spring Boot 3</b>, <b>.NET 8</b> y pipelines orientados a eventos con <b>RabbitMQ</b>. 
            Diseño centrado en el usuario, modelado de redes y experiencias sensoriales de alta precisión.
          </p>

          {/* Realtime Telemetry Spectrum Bar */}
          <div className="mb-8">
            <AudioSpectrum barCount={36} className="bg-black/60 border-zinc-800 shadow-xl" />
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => {
                sound.playClick();
                sound.playSubBass();
                onExploreProjects();
              }}
              onMouseEnter={() => sound.playHover()}
              className="px-6 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-black" />
              <span>EXPLORAR SISTEMAS</span>
            </button>

            <a
              href="#signals"
              onClick={() => {
                sound.playClick();
                sound.playChord();
              }}
              onMouseEnter={() => sound.playHover()}
              className="px-5 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>CRITERIO & TELEMETRÍA</span>
            </a>

            <a
              href="#trajectory"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="px-5 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <Terminal className="w-3.5 h-3.5 text-pink-400" />
              <span>UPC // 8VO CICLO</span>
            </a>
          </div>
        </div>

        {/* Bottom Framing Bar (Reference 1 style) */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-zinc-700/60 text-xs font-mono text-zinc-400 gap-3">
          <a
            href="mailto:stephrvq@gmail.com"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="flex items-center gap-2 text-zinc-300 hover:text-cyan-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-zinc-400" />
            <span>STEPHRVQ@GMAIL.COM</span>
          </a>

          <div className="text-[11px] text-zinc-500 font-mono tracking-widest hidden md:inline">
            // RESILIENT ARCHITECTURES • SENSORY PRECISION //
          </div>

          <a
            href="tel:+51923399455"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="flex items-center gap-2 text-zinc-300 hover:text-pink-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-zinc-400" />
            <span>+51 923 399 455</span>
          </a>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#projects"
        onMouseEnter={() => sound.playHover()}
        onClick={() => sound.playClick()}
        className="mt-8 text-zinc-500 hover:text-cyan-400 transition-colors flex flex-col items-center gap-1 font-mono text-[10px] tracking-widest z-10"
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-cyan-400" />
      </a>
    </section>
  );
};
