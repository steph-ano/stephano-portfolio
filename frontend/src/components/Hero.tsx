import React from 'react';
import { ArrowDown, Mail, Phone, Play, Sparkles, Terminal, Activity, Layers } from 'lucide-react';
import { sound } from '../audio/SoundFX';
import { AudioSpectrum } from './AudioSpectrum';

interface HeroProps {
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects }) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-24 pb-8 px-4 sm:px-8 lg:px-12 overflow-hidden">
      {/* Background: JPEGMAFIA "I Lay Down My Life For You" Wallpaper with High Brightness & Clarity */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/ildmlfy.jpg"
          alt="JPEGMAFIA I Lay Down My Life For You Desert Landscape"
          className="w-full h-full object-cover object-[center_35%] filter brightness-[0.95] contrast-[1.08] saturate-[1.15]"
        />
        {/* Subtle, delicate atmospheric scrim so text stays readable while the mountains and cross pop */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-transparent to-[#0c0d12]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d12]/70 via-transparent to-[#0c0d12]/70" />
        <div className="absolute inset-0 drafting-grid opacity-35" />
      </div>

      {/* Top Editorial Rule & Framing Header (Reference 1 Style) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-4 pb-4 border-b border-white/20 flex flex-wrap items-center justify-between text-xs font-mono text-zinc-200 gap-4 backdrop-blur-[2px]">
        <div className="flex items-center gap-3">
          <span className="font-bold tracking-widest text-white uppercase text-sm">SOFTWARE ENGINEER</span>
          <span className="text-amber-400 font-bold">•</span>
          <span className="text-zinc-300">UPC MONTERRICO</span>
        </div>

        <div className="text-center font-bold tracking-widest text-white/90">
          2024–2026 <span className="text-amber-400/90 font-normal">// SELECTED WORKS</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[11px] text-zinc-300 hidden sm:inline">LIMA, PERÚ [12°02'S 77°01'W]</span>
          <div className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-sky-400" />
          </div>
        </div>
      </div>

      {/* Main Center Area: Distressed Brush Stencil & Ghosted Typography integrated into Landscape */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-8 sm:py-12 flex flex-col items-center text-center">
        {/* Subtitle style from Reference 1 */}
        <div className="text-sm sm:text-base font-mono tracking-[0.3em] text-amber-200/95 uppercase mb-3 drop-shadow-md">
          STEPHANO RENAN <span className="font-black text-white tracking-widest">VALDIVIA's</span>
        </div>

        {/* Giant Brush Title with 3D Ghost Outline Layers */}
        <div className="relative mb-6 select-none w-full">
          {/* Ghost outline 1 */}
          <div
            aria-hidden="true"
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-black tracking-tight text-transparent font-['Syne'] uppercase opacity-25 absolute -top-4 sm:-top-7 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap"
            style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.45)' }}
          >
            PORTFOLIO
          </div>

          {/* Ghost outline 2 */}
          <div
            aria-hidden="true"
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-black tracking-tight text-transparent font-['Syne'] uppercase opacity-15 absolute -top-8 sm:-top-12 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap"
            style={{ WebkitTextStroke: '1.5px rgba(245, 158, 11, 0.6)' }}
          >
            PORTFOLIO
          </div>

          {/* Foreground Title with Permanent Marker dry-brush typography */}
          <h1 className="relative text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-brush tracking-wide text-white drop-shadow-[0_15px_45px_rgba(0,0,0,0.9)] leading-none uppercase">
            PORTFOLIO
          </h1>

          {/* Dry Brush Underline Bar in Monarch Amber & Desert Gold */}
          <div className="w-56 sm:w-96 md:w-[32rem] mx-auto mt-3 h-4 bg-gradient-to-r from-amber-400 via-orange-500 to-sky-400 dry-brush-line opacity-95 shadow-2xl" />
        </div>

        {/* Crisp Sub-Statement */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-100 font-sans leading-relaxed mb-8 drop-shadow-md bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
          Sistemas distribuidos en <b>Spring Boot 3</b> y <b>.NET 8</b>, pipelines de analítica en tiempo real con <b>RabbitMQ</b>, 
          modelamiento relacional y experiencias web interactivas con textura y carácter.
        </p>

        {/* Realtime Telemetry Signal */}
        <div className="mb-8">
          <AudioSpectrum barCount={36} className="bg-black/70 backdrop-blur-md border-white/20 shadow-2xl" />
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              sound.playClick();
              sound.playSubBass();
              onExploreProjects();
            }}
            onMouseEnter={() => sound.playHover()}
            className="px-7 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-amber-100 shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-black" />
            <span>EXPLORAR SISTEMAS</span>
          </button>

          <a
            href="#visual-gallery"
            onClick={() => {
              sound.playClick();
              sound.playChord();
            }}
            onMouseEnter={() => sound.playHover()}
            className="px-6 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-white bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/25 hover:border-amber-400/60 shadow-xl transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>GALERÍA VISUAL & ARTEFACTOS</span>
          </a>

          <a
            href="#contact"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="px-5 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white bg-black/40 backdrop-blur-sm border border-white/10 transition-colors flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-sky-400" />
            <span>CONTACTO // CV</span>
          </a>
        </div>
      </div>

      {/* Bottom Framing Bar (Reference 1 Style) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-4 pb-2 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-200 gap-3 backdrop-blur-[2px]">
        <a
          href="mailto:stephrvq@gmail.com"
          onMouseEnter={() => sound.playHover()}
          onClick={() => sound.playClick()}
          className="flex items-center gap-2 text-zinc-100 hover:text-amber-400 transition-colors"
        >
          <Mail className="w-4 h-4 text-amber-400" />
          <span>STEPHRVQ@GMAIL.COM</span>
        </a>

        <div className="text-[11px] text-zinc-300 font-mono tracking-widest hidden md:inline">
          // RESILIENT ARCHITECTURES • SENSORY PRECISION //
        </div>

        <a
          href="tel:+51923399455"
          onMouseEnter={() => sound.playHover()}
          onClick={() => sound.playClick()}
          className="flex items-center gap-2 text-zinc-100 hover:text-sky-400 transition-colors"
        >
          <Phone className="w-4 h-4 text-sky-400" />
          <span>+51 923 399 455</span>
        </a>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#projects"
        onMouseEnter={() => sound.playHover()}
        onClick={() => sound.playClick()}
        className="relative z-10 mx-auto mt-4 text-zinc-400 hover:text-amber-400 transition-colors flex flex-col items-center gap-1 font-mono text-[10px] tracking-widest"
      >
        <span>SCROLL DOWN</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-amber-400" />
      </a>
    </section>
  );
};
