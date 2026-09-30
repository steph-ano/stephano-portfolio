import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Disc3, Radio, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { sound } from '../audio/SoundFX';

export const Navbar: React.FC = () => {
  const [muted, setMuted] = useState(sound.isMuted());
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { href: '#visual-gallery', label: '// GALERÍA VISUAL', color: 'hover:text-amber-400' },
    { href: '#projects', label: '// SISTEMAS', color: 'hover:text-sky-400' },
    { href: '#skills', label: '// ARQUITECTURA', color: 'hover:text-orange-400' },
    { href: '#trajectory', label: '// TRAYECTORIA', color: 'hover:text-amber-400' },
    { href: '#contact', label: '// CONTACTO', color: 'hover:text-white' },
  ];

  const handleNavClick = () => {
    sound.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'py-2.5 sm:py-3 glass-panel shadow-2xl bg-[#090b10]/90 backdrop-blur-xl border-b border-amber-500/20' : 'py-4 sm:py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onMouseEnter={() => sound.playHover()}
          onClick={() => {
            sound.playClick();
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-tr from-amber-500 via-orange-600 to-sky-400 p-[1.5px] transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-black/90 rounded-[7px] flex items-center justify-center">
              <Disc3 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 group-hover:rotate-180 transition-transform duration-700" />
            </div>
          </div>
          <div>
            <div className="font-bold tracking-tight text-white font-['Syne'] text-sm sm:text-base flex items-center gap-1.5">
              STEPHANO <span className="text-amber-400 font-mono text-[10px] sm:text-xs px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">DEV</span>
            </div>
            <div className="text-[10px] sm:text-[11px] text-zinc-400 font-mono flex items-center gap-1">
              <Radio className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-sky-400 animate-pulse" />
              <span>UPC • 8VO CICLO</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Anchors */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className={`text-zinc-300 ${link.color} transition-colors`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: Sound FX Toggle + External Links + Mobile Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Hardware Monitor Sound Toggle */}
          <button
            onClick={handleToggleSound}
            onMouseEnter={() => sound.playHover()}
            className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg border text-[11px] sm:text-xs font-mono transition-all cursor-pointer ${
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
            href="https://github.com/steph-ano"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="p-1.5 sm:p-2 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
            title="GitHub de Stephano Valdivia"
          >
            <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>

          <a
            href="https://linkedin.com/in/stephanovaldivia"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="p-1.5 sm:p-2 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
            title="LinkedIn de Stephano Valdivia"
          >
            <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            onMouseEnter={() => sound.playHover()}
            className="md:hidden p-2 rounded-lg bg-zinc-900/90 border border-amber-500/30 text-amber-300 hover:text-white transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5 text-amber-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#0c0e16]/95 border-b border-amber-500/30 backdrop-blur-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-2 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="px-3.5 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-200 hover:text-white hover:border-amber-400/50 hover:bg-amber-500/10 flex items-center justify-between transition-all"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span className="text-amber-400">// STEPHANO VALDIVIA</span>
            <span>LIMA, PERÚ</span>
          </div>
        </div>
      )}
    </header>
  );
};
