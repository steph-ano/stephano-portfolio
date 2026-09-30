import React from 'react';
import { ArrowDown, Mail, Phone, Play, Sparkles, Terminal, Activity, Layers } from 'lucide-react';
import { sound } from '../audio/SoundFX';

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

      {/* Top Editorial Rule & Framing Header */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-3 sm:pt-4 pb-3 sm:pb-4 border-b border-white/20 flex flex-wrap items-center justify-between text-[11px] sm:text-xs font-mono text-zinc-200 gap-2 sm:gap-4 backdrop-blur-[2px]">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="font-bold tracking-widest text-white uppercase text-xs sm:text-sm">SOFTWARE ENGINEER</span>
          <span className="text-amber-400 font-bold">•</span>
          <span className="text-zinc-300 text-[11px] sm:text-xs">UPC MONTERRICO</span>
        </div>

        <div className="text-center font-bold tracking-widest text-white/90 text-[11px] sm:text-xs">
          2024–2026 <span className="text-amber-400/90 font-normal">// SELECTED WORKS</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-[10px] sm:text-[11px] text-zinc-300 hidden xs:inline">LIMA, PERÚ [12°02'S 77°01'W]</span>
          <div className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-sky-400" />
          </div>
        </div>
      </div>

      {/* Main Center Area: Distressed Brush Stencil & Ghosted Typography integrated into Landscape */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-6 sm:py-12 flex flex-col items-center text-center px-2">
        {/* Subtitle style */}
        <div className="text-xs sm:text-base font-mono tracking-[0.25em] sm:tracking-[0.3em] text-amber-200/95 uppercase mb-2 sm:mb-3 drop-shadow-md">
          STEPHANO <span className="font-black text-white tracking-widest">VALDIVIA's</span>
        </div>

        {/* Giant Brush Title with 3D Ghost Outline Layers using fluid clamp */}
        <div className="relative mb-4 sm:mb-6 select-none w-full max-w-full overflow-hidden sm:overflow-visible">
          {/* Ghost outline 1 */}
          <div
            aria-hidden="true"
            className="text-[clamp(3.1rem,13vw,10.5rem)] font-black tracking-tight text-transparent font-['Syne'] uppercase opacity-25 absolute -top-3 sm:-top-7 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap"
            style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.45)' }}
          >
            PORTFOLIO
          </div>

          {/* Ghost outline 2 */}
          <div
            aria-hidden="true"
            className="text-[clamp(3.1rem,13vw,10.5rem)] font-black tracking-tight text-transparent font-['Syne'] uppercase opacity-15 absolute -top-6 sm:-top-12 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap"
            style={{ WebkitTextStroke: '1.5px rgba(245, 158, 11, 0.6)' }}
          >
            PORTFOLIO
          </div>

          {/* Foreground Title with Permanent Marker dry-brush typography */}
          <h1 className="relative text-[clamp(3.1rem,13vw,10.5rem)] font-brush tracking-wide text-white drop-shadow-[0_15px_45px_rgba(0,0,0,0.9)] leading-none uppercase">
            PORTFOLIO
          </h1>

          {/* Dry Brush Underline Bar in Monarch Amber & Desert Gold */}
          <div className="w-40 sm:w-96 md:w-[32rem] mx-auto mt-2 sm:mt-3 h-2.5 sm:h-4 bg-gradient-to-r from-amber-400 via-orange-500 to-sky-400 dry-brush-line opacity-95 shadow-2xl" />
        </div>

        {/* Action Controls - Stacked full-width on mobile, flex-row on desktop */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6 w-full max-w-md sm:max-w-none">
          <button
            onClick={() => {
              sound.playClick();
              sound.playSubBass();
              onExploreProjects();
            }}
            onMouseEnter={() => sound.playHover()}
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-amber-100 shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
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
            className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-white bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/25 hover:border-amber-400/60 shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>GALERÍA VISUAL</span>
          </a>

          <a
            href="#contact"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="w-full sm:w-auto px-5 py-3 sm:py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white bg-black/40 backdrop-blur-sm border border-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <Terminal className="w-4 h-4 text-sky-400" />
            <span>CONTACTO // CV</span>
          </a>
        </div>
      </div>

      {/* Bottom Framing Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-3 sm:pt-4 pb-2 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs font-mono text-zinc-200 gap-2 sm:gap-3 backdrop-blur-[2px]">
        <a
          href="mailto:stephrvq@gmail.com"
          onMouseEnter={() => sound.playHover()}
          onClick={() => sound.playClick()}
          className="flex items-center gap-2 text-zinc-100 hover:text-amber-400 transition-colors"
        >
          <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
          <span>STEPHRVQ@GMAIL.COM</span>
        </a>

        <div className="text-[10px] sm:text-[11px] text-zinc-300 font-mono tracking-widest hidden md:inline">
          // RESILIENT ARCHITECTURES • SENSORY PRECISION //
        </div>

        <a
          href="tel:+51923399455"
          onMouseEnter={() => sound.playHover()}
          onClick={() => sound.playClick()}
          className="flex items-center gap-2 text-zinc-100 hover:text-sky-400 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400" />
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
