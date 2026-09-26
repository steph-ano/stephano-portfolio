import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Disc3, Radio } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { sound } from '../audio/SoundFX';

export const Navbar: React.FC = () => {
  const [muted, setMuted] = useState(sound.isMuted());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsub = sound.subscribe((m) => setMuted(m));
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      unsub();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleSound = () => {
    sound.toggleMute();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass-panel shadow-2xl bg-black/70 backdrop-blur-xl' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onMouseEnter={() => sound.playHover()}
          onClick={() => sound.playClick()}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-500 via-orange-600 to-sky-400 p-[1.5px] transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-black/90 rounded-[7px] flex items-center justify-center">
              <Disc3 className="w-5 h-5 text-amber-400 group-hover:rotate-180 transition-transform duration-700" />
            </div>
          </div>
          <div>
            <div className="font-bold tracking-tight text-white font-['Syne'] text-base flex items-center gap-1.5">
              STEPHANO <span className="text-amber-400 font-mono text-xs px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">DEV</span>
            </div>
            <div className="text-[11px] text-zinc-400 font-mono flex items-center gap-1">
              <Radio className="w-3 h-3 text-sky-400 animate-pulse" />
              <span>UPC • 8VO CICLO</span>
            </div>
          </div>
        </a>

        {/* Navigation Anchors */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wider">
          <a
            href="#visual-gallery"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="text-zinc-300 hover:text-amber-400 transition-colors"
          >
            // GALERÍA VISUAL
          </a>
          <a
            href="#projects"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="text-zinc-300 hover:text-sky-400 transition-colors"
          >
            // SISTEMAS
          </a>
          <a
            href="#skills"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="text-zinc-300 hover:text-orange-400 transition-colors"
          >
            // ARQUITECTURA
          </a>
          <a
            href="#trajectory"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="text-zinc-300 hover:text-amber-400 transition-colors"
          >
            // TRAYECTORIA
          </a>
          <a
            href="#contact"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            // CONTACTO
          </a>
        </nav>

        {/* Action Controls: Sound FX Toggle + External Links */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Hardware Monitor Sound Toggle */}
          <button
            onClick={handleToggleSound}
            onMouseEnter={() => sound.playHover()}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
              muted
                ? 'bg-zinc-900/60 text-zinc-500 border-zinc-800'
                : 'bg-zinc-900/90 text-sky-300 border-sky-500/40 shadow-sm shadow-sky-500/10'
            }`}
            title={muted ? 'Activar feedback sonoro (Web Audio)' : 'Silenciar feedback sonoro'}
          >
            {muted ? (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">MUTE</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-sky-400" />
                <span className="hidden sm:inline">AUDIO ON</span>
              </>
            )}
          </button>

          {/* Social Links */}
          <a
            href="https://github.com/stephanovaldivia"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="p-2 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
            title="GitHub de Stephano Valdivia"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://linkedin.com/in/stephanovaldivia"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="p-2 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
            title="LinkedIn de Stephano Valdivia"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};
