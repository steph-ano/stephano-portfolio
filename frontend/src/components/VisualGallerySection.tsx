import React, { useState } from 'react';
import { Eye, Disc3, Sparkles, Image, Maximize2, Zap } from 'lucide-react';
import { sound } from '../audio/SoundFX';

export const VisualGallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="visual-gallery" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-zinc-800 pb-6 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ESTÉTICA & ARTEFACTOS VISUALES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-['Syne'] text-white">
            ATMÓSFERA & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-sky-400">PALETA VISUAL</span>
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-xl">
            Cuadros gráficos y fotografía cinematográfica que definen el lenguaje cromático del sitio: 
            tierra dorada, naranja monarca, azul desértico y tinta sumi-e.
          </p>
        </div>

        {/* Color Palette Swatches based on the images */}
        <div className="flex items-center gap-2 p-2 bg-zinc-950/80 rounded-2xl border border-zinc-800 self-start md:self-end">
          <div className="w-6 h-6 rounded-lg bg-[#5ba4e5]" title="Desert Sky Blue #5ba4e5" />
          <div className="w-6 h-6 rounded-lg bg-[#d99b43]" title="Sunlit Mountain Gold #d99b43" />
          <div className="w-6 h-6 rounded-lg bg-[#ea580c]" title="Monarch Butterfly Orange #ea580c" />
          <div className="w-6 h-6 rounded-lg bg-[#fef08a]" title="Light Beam Cream #fef08a" />
          <div className="w-6 h-6 rounded-lg bg-[#0c0d12] border border-zinc-700" title="Sumi Ink Obsidian #0c0d12" />
        </div>
      </div>

      {/* Two Large PPTA Graphic Plates */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Plate 1: ppta1.jpg (Monarch Wings) */}
        <div
          onClick={() => {
            sound.playClick();
            setSelectedImage('/assets/ppta1.jpg');
          }}
          onMouseEnter={() => sound.playHover()}
          className="group relative rounded-3xl overflow-hidden glass-panel border border-zinc-800 hover:border-amber-500/50 shadow-2xl transition-all cursor-pointer flex flex-col"
        >
          {/* Drafting border header */}
          <div className="px-5 py-3 border-b border-zinc-800/80 bg-zinc-950/70 flex items-center justify-between text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-zinc-200 font-bold">PLATE 01</span>
              <span>// PING PONG THE ANIMATION</span>
            </div>
            <span className="text-[11px] text-amber-400 font-mono">[FIG. A: MONARCH WINGS]</span>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden bg-black">
            <img
              src="/assets/ppta1.jpg"
              alt="Ping Pong The Animation - Monarch Butterfly Wing Scene"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.1] brightness-[0.95]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />
            <div className="absolute bottom-4 right-4 p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          <div className="p-5 bg-zinc-950/90 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="text-zinc-300 font-medium">COLORWAY: #EA580C MONARCH TANGERINE • #D99B43 GOLD</span>
            <span className="text-amber-400">EXPANDIR IMAGEN</span>
          </div>
        </div>

        {/* Plate 2: ppta2.jpg (Enter The Hero) */}
        <div
          onClick={() => {
            sound.playClick();
            sound.playChord();
            setSelectedImage('/assets/ppta2.jpg');
          }}
          onMouseEnter={() => sound.playHover()}
          className="group relative rounded-3xl overflow-hidden glass-panel border border-zinc-800 hover:border-sky-500/50 shadow-2xl transition-all cursor-pointer flex flex-col"
        >
          {/* Drafting border header */}
          <div className="px-5 py-3 border-b border-zinc-800/80 bg-zinc-950/70 flex items-center justify-between text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span className="text-zinc-200 font-bold">PLATE 02</span>
              <span>// PING PONG THE ANIMATION</span>
            </div>
            <span className="text-[11px] text-sky-400 font-mono">[FIG. B: THE HERO SILHOUETTE]</span>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden bg-black">
            <img
              src="/assets/ppta2.jpg"
              alt="Ping Pong The Animation - The Hero Silhouette"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.12] brightness-[0.98]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />
            <div className="absolute bottom-4 right-4 p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          <div className="p-5 bg-zinc-950/90 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="text-zinc-300 font-medium">COLORWAY: #FEF08A CREAM LIGHT • #0C0D12 SUMI INK</span>
            <span className="text-sky-400">EXPANDIR IMAGEN</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in cursor-zoom-out"
        >
          <div className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl">
            <img
              src={selectedImage}
              alt="Visual Artifact Preview"
              className="w-full h-full object-contain max-h-[85vh]"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-black/80 text-white font-mono text-xs border border-white/20"
            >
              CERRAR [ESC]
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
