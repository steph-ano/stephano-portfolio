import React, { useState } from 'react';
import { Sparkles, Radio, Disc3, Headphones, Zap, Music2 } from 'lucide-react';
import { sound } from '../audio/SoundFX';

interface ArtistInfluence {
  name: string;
  genre: string;
  vibe: string;
  color: string;
}

export const ArtMusicSection: React.FC = () => {
  const [activePad, setActivePad] = useState<number | null>(null);

  const artists: ArtistInfluence[] = [
    { name: "JPEGMAFIA", genre: "Experimental Hip Hop / Glitch", vibe: "Sampling agresivo, texturas distorsionadas, cortes rítmicos impredecibles", color: "border-pink-500/40 text-pink-400" },
    { name: "Genesis Owusu", genre: "Avant-Funk / Post-Punk", vibe: "Groove cinético, teatralidad vocal, energía catártica en vivo", color: "border-purple-500/40 text-purple-400" },
    { name: "Jane Remover", genre: "Digicore / Shoegaze", vibe: "Muros sónicos de distorsión digital fusionados con melodía emotiva", color: "border-cyan-500/40 text-cyan-400" },
    { name: "Geordie Greep", genre: "Avant-Prog / Math Rock", vibe: "Síncopa frenética, virtuosismo narrativo, quiebres milimétricos", color: "border-amber-500/40 text-amber-400" },
    { name: "Nujabes", genre: "Lo-Fi Jazz Hip Hop", vibe: "Calidez analógica, sampling de piano nostálgico, armonía zen", color: "border-emerald-500/40 text-emerald-400" },
    { name: "Xiu Xiu", genre: "Noise Pop / Industrial", vibe: "Vulnerabilidad cruda, percusiones atípicas, tensión visceral", color: "border-rose-500/40 text-rose-400" },
    { name: "Viagra Boys", genre: "Post-Punk / Dance Punk", vibe: "Líneas de bajo ácidas y motorik, sarcasmo punzante y groove sucio", color: "border-lime-500/40 text-lime-400" },
    { name: "Model/Actriz", genre: "Dance-Punk / Noise Rock", vibe: "Pulso industrial implacable, feedback cortante y éxtasis sonoro", color: "border-indigo-500/40 text-indigo-400" },
    { name: "Maruja", genre: "Jazz Punk / Spoken Word", vibe: "Metales abrasivos, crescendos épicos y poesía existencial", color: "border-fuchsia-500/40 text-fuchsia-400" }
  ];

  const pads = [
    { id: 1, label: "SUB 808", soundFn: () => sound.playSubBass(), desc: "Bajo profundo" },
    { id: 2, label: "GLITCH", soundFn: () => sound.playGlitch(), desc: "Ruido digicore" },
    { id: 3, label: "JAZZ CHORD", soundFn: () => sound.playChord(), desc: "Acorde Nujabes" },
    { id: 4, label: "PAD CLICK", soundFn: () => sound.playClick(), desc: "Pulsador SP-404" },
    { id: 5, label: "HIGH SINE", soundFn: () => sound.playHover(), desc: "Chirp sinusoidal" },
    { id: 6, label: "WARP PULSE", soundFn: () => { sound.playSubBass(); sound.playGlitch(); }, desc: "Textura combinada" }
  ];

  const handleTriggerPad = (pad: typeof pads[0]) => {
    setActivePad(pad.id);
    pad.soundFn();
    setTimeout(() => setActivePad(null), 180);
  };

  return (
    <section id="sonic-dna" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Background ambient decorative aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-pink-600/10 via-purple-600/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/40 border border-pink-500/30 text-xs font-mono text-pink-300 mb-3">
          <Disc3 className="w-3.5 h-3.5 animate-spin duration-3000" />
          <span>ESENCIA & ADN ARTÍSTICO</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-['Syne'] text-white">
          INFLUENCIAS & <span className="aurora-gradient-text">FILOSOFÍA SONORA</span>
        </h2>
        <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
          Para mí, el código y el sonido comparten el mismo impulso creativo: la tensión entre estructura y caos. 
          Aquí conviven las texturas que inspiran mi ritmo de trabajo y mi visión como ingeniero y creador.
        </p>
      </div>

      {/* Manifesto Box */}
      <div className="glass-panel-glow rounded-3xl p-8 sm:p-10 mb-16 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-zinc-800">
          <div>
            <span className="mono-tag text-pink-400">MANIFIESTO // CODIFICAR COMO COMPONER</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-['Syne'] text-white mt-1">
              "El software es una composición viva, no un artefacto estático"
            </h3>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/90 border border-zinc-700/60 font-mono text-xs text-zinc-300 shrink-0">
            <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>FRECUENCIA EXPERIMENTAL</span>
          </div>
        </div>

        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mt-6 max-w-4xl">
          Así como el post-punk y el jazz punk construyen urgencia mediante síncopas y líneas de bajo implacables, 
          los microservicios construyen resiliencia mediante colas asíncronas y eventos distribuidos. 
          No concibo el desarrollo como un proceso aséptico de oficina: cada proyecto es una declaración de intenciones, 
          con atención maníaca a la interacción humana, al diseño visual y a la arquitectura interna.
        </p>
      </div>

      {/* Interactive Soundboard / Micro Sampler Pad */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 mb-16 border border-pink-500/20 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <Headphones className="w-4 h-4" />
              <span>WEB AUDIO SYNTH SAMPLER</span>
            </div>
            <h4 className="text-xl font-bold font-['Syne'] text-white">
              Pad de Síntesis Interactiva
            </h4>
            <p className="text-zinc-400 text-xs mt-0.5">
              Presiona los pads para disparar tonos y texturas generadas en tiempo real por el sintetizador web.
            </p>
          </div>
          <div className="font-mono text-xs text-zinc-400 flex items-center gap-1.5 self-start sm:self-center">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>0 LIBRERÍAS DE AUDIO PESADAS • NATIVE DSP</span>
          </div>
        </div>

        {/* 6-Pad Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {pads.map((pad) => {
            const isActive = activePad === pad.id;
            return (
              <button
                key={pad.id}
                onClick={() => handleTriggerPad(pad)}
                onMouseEnter={() => sound.playHover()}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between h-28 ${
                  isActive
                    ? 'bg-pink-600 border-white scale-95 shadow-lg shadow-pink-500/50'
                    : 'bg-zinc-900/80 hover:bg-zinc-800/90 border-zinc-700/60 hover:border-pink-500/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-400">PAD 0{pad.id}</span>
                  <Music2 className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-zinc-400'}`} />
                </div>
                <div>
                  <div className="font-bold font-['Syne'] text-sm text-white">{pad.label}</div>
                  <div className="text-[10px] text-zinc-400 font-mono mt-0.5">{pad.desc}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Artists & Musical Influences Grid */}
      <div>
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-zinc-800">
          <h4 className="text-xl font-bold font-['Syne'] text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-pink-400" />
            <span>Artistas & Texturas de Referencia</span>
          </h4>
          <span className="font-mono text-xs text-zinc-400">9 REFERENTES CLAVE</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {artists.map((artist) => (
            <div
              key={artist.name}
              onMouseEnter={() => sound.playHover()}
              className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/90 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-bold font-['Syne'] text-base text-white group-hover:text-pink-300 transition-colors">
                    {artist.name}
                  </h5>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${artist.color}`}>
                    {artist.genre}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {artist.vibe}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
