import React from 'react';
import { ArrowUp, Heart, Disc3 } from 'lucide-react';
import { sound } from '../audio/SoundFX';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/80 py-12 px-4 sm:px-6 max-w-7xl mx-auto relative z-10 text-zinc-500 text-xs font-mono">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-pink-400">
            <Disc3 className="w-4 h-4 animate-spin duration-3000" />
          </div>
          <div>
            <div className="text-zinc-300 font-bold font-['Syne'] text-sm">
              STEPHANO RENAN VALDIVIA QUISPE
            </div>
            <div className="text-[11px] text-zinc-500">
              Ingeniería de Software (UPC Monterrico) • Lima, Perú
            </div>
          </div>
        </div>

        <div className="text-center md:text-right">
          <div className="text-zinc-400 flex items-center justify-center md:justify-end gap-1.5 mb-1">
            <span>Diseñado con pasión por la música, el arte experimental y la arquitectura</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
          </div>
          <div className="text-[10px] text-zinc-600">
            STACK: REACT 18 • SPRING BOOT 3 • CAFFEINE CACHE • GITHUB API • WEB AUDIO API
          </div>
        </div>

        <button
          onClick={scrollToTop}
          onMouseEnter={() => sound.playHover()}
          className="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors flex items-center gap-1.5"
          title="Volver al inicio"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-pink-400" />
        </button>
      </div>
    </footer>
  );
};
