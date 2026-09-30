import React from 'react';
import { ArrowUp, Disc3, Sparkles } from 'lucide-react';
import { sound } from '../audio/SoundFX';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-amber-500/20 pt-12 pb-32 sm:pb-28 px-4 sm:px-6 max-w-7xl mx-auto relative z-10 text-zinc-400 text-xs font-mono">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3">
          <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <Disc3 className="w-4 h-4 animate-spin duration-3000" />
          </div>
          <div>
            <div className="text-zinc-200 font-bold font-['Syne'] text-sm tracking-wide">
              STEPHANO RENAN VALDIVIA QUISPE
            </div>
            <div className="text-[11px] text-zinc-400">
              Ingeniería de Software (UPC Monterrico) • Lima, Perú [12°02'S 77°01'W]
            </div>
          </div>
        </div>

        <div className="text-center md:text-right">
          <div className="text-zinc-300 flex items-center justify-center md:justify-end gap-1.5 mb-1">
            <span>Diseñado con textura cinematográfica, arquitectura distribuida y rigor técnico</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="text-[10px] text-zinc-500">
            SPRING BOOT 3 • CAFFEINE CACHE • .NET 8 • RABBITMQ • REACT 18 • DRAFTING SYSTEM
          </div>
        </div>

        <button
          onClick={scrollToTop}
          onMouseEnter={() => sound.playHover()}
          className="p-3 rounded-xl zine-panel hover:border-amber-400 text-zinc-300 hover:text-white transition-all flex items-center gap-2 cursor-pointer shadow-lg"
          title="Volver al inicio"
        >
          <span className="font-bold text-xs">TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
        </button>
      </div>
    </footer>
  );
};
