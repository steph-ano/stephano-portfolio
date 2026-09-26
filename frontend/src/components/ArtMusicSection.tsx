import React, { useState } from 'react';
import { Radio, Headphones, Sliders, Activity, Disc3, ShieldCheck, Cpu } from 'lucide-react';
import { sound } from '../audio/SoundFX';

interface SignalProfile {
  code: string;
  ref: string;
  attribute: string;
  telemetry: string;
  accent: string;
}

export const ArtMusicSection: React.FC = () => {
  const [activePad, setActivePad] = useState<number | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<number>(0);

  // Hidden in plain sight: Album / sonic signatures disguised as hardware DSP profiles
  const profiles: SignalProfile[] = [
    { code: "SIG-01", ref: "LP! / OFFLINE", attribute: "Saturación Dinámica & Clipping Controlado", telemetry: "High-transient digital distortion, aggressive sidechaining, unfiltered sampling", accent: "text-pink-400 border-pink-500/30" },
    { code: "SIG-02", ref: "Smiling with No Teeth", attribute: "Pulso Cinético & Disonancia Post-Funk", telemetry: "Motorik syncopated groove, sharp theatrical breaks, heavy low-end drive", accent: "text-purple-400 border-purple-500/30" },
    { code: "SIG-03", ref: "Frailty / Census", attribute: "Muros de Ruido & Texturas Shoegaze", telemetry: "Bitcrushed artifacts, saturated synth walls, delicate emotional harmonics", accent: "text-cyan-400 border-cyan-500/30" },
    { code: "SIG-04", ref: "The New Sound", attribute: "Síncopa Polirrítmica & Tensión Matemática", telemetry: "Complex time signatures, tight jazz-rock breaks, erratic velocity", accent: "text-amber-400 border-amber-500/30" },
    { code: "SIG-05", ref: "Modal Soul", attribute: "Armonía Modal & Calidez Analógica", telemetry: "Warm tape hiss, vinyl dust resonance, gentle minor 9th chords", accent: "text-emerald-400 border-emerald-500/30" },
    { code: "SIG-06", ref: "Fabulous Muscles", attribute: "Vulnerabilidad Acústica & Ruido Industrial", telemetry: "Extreme dynamic range, metallic percussion, visceral analog tension", accent: "text-rose-400 border-rose-500/30" },
    { code: "SIG-07", ref: "Cave World", attribute: "Líneas de Bajo Ácidas & Repetición Motorik", telemetry: "Driving bassline overdrive, punchy mechanical drums, caustic irony", accent: "text-lime-400 border-lime-500/30" },
    { code: "SIG-08", ref: "Dogsbody", attribute: "Latido Industrial & Catarsis Rítmica", telemetry: "Relentless metronomic pulse, distorted industrial scrapes, high tension release", accent: "text-indigo-400 border-indigo-500/30" },
    { code: "SIG-09", ref: "The Vault", attribute: "Crescendo Expansivo & Metales Abrasivos", telemetry: "Heavy sax harmonics, building sonic velocity, dark jazz-punk atmosphere", accent: "text-fuchsia-400 border-fuchsia-500/30" }
  ];

  // Hardware tactile test triggers
  const tactilePads = [
    { id: 1, label: "808 SUB", soundFn: () => sound.playSubBass(), telemetry: "45Hz Drop" },
    { id: 2, label: "GLITCH", soundFn: () => sound.playGlitch(), telemetry: "Bandpass 1.4k" },
    { id: 3, label: "MODAL", soundFn: () => sound.playChord(), telemetry: "Em9 Triad" },
    { id: 4, label: "RELAY", soundFn: () => sound.playClick(), telemetry: "Analog Pulse" },
    { id: 5, label: "CHIRP", soundFn: () => sound.playHover(), telemetry: "High Sine" },
    { id: 6, label: "WARP", soundFn: () => { sound.playSubBass(); sound.playGlitch(); }, telemetry: "Transient Sat" }
  ];

  const handleTriggerPad = (pad: typeof tactilePads[0]) => {
    setActivePad(pad.id);
    pad.soundFn();
    setTimeout(() => setActivePad(null), 150);
  };

  return (
    <section id="signals" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Background subtle telemetry aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-zinc-800 pb-6 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>CRITERIO DE DISEÑO // FRECUENCIAS & TELEMETRÍA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-['Syne'] text-white">
            SEÑALES & <span className="cyan-gradient-text">CRITERIO SENSORIAL</span>
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-xl">
            Principios de balance entre arquitectura formal y energía expresiva. 
            El software concebido con la misma precisión dinámica, rango armónico y resistencia al ruido que una señal de audio de alta fidelidad.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-900 px-3.5 py-2 rounded-xl border border-zinc-800 self-start md:self-end">
          <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>SAMPLING: 44.1 kHz • 24-BIT</span>
        </div>
      </div>

      {/* Philosophy Card - Architecture as Dynamic System */}
      <div className="glass-panel rounded-3xl p-8 sm:p-10 mb-12 border border-zinc-800 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="mono-tag text-zinc-400 flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>SISTEMAS DISTRIBUIDOS & DINÁMICA DE SEÑAL</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-['Syne'] text-white mb-4">
              "El software debe responder con peso táctil, consistencia y carácter"
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed mb-4">
              Un sistema distribuido es análogo a una consola de procesamiento en vivo: si las colas de mensajería (RabbitMQ) 
              carecen de balance de carga, se saturan; si la capa de persistencia (SQL/NoSQL) no está normalizada con rigor, 
              introduce ruido en el flujo. La arquitectura elegante no es fría: posee ritmo, sincronía y una respuesta instantánea al usuario.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-400 pt-2 border-t border-zinc-800/80">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> C4 Context & Container</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> Resiliencia ante Fallos</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-pink-400" /> Latencia Sub-Percibida</span>
            </div>
          </div>

          {/* Minimalist Tactile Pad Module */}
          <div className="lg:col-span-4 bg-zinc-950 p-5 rounded-2xl border border-zinc-800/80">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                <span>HARDWARE PAD</span>
              </div>
              <span className="text-[10px] text-zinc-400">TACTILE DSP</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {tactilePads.map((pad) => {
                const isActive = activePad === pad.id;
                return (
                  <button
                    key={pad.id}
                    onClick={() => handleTriggerPad(pad)}
                    onMouseEnter={() => sound.playHover()}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center h-16 ${
                      isActive
                        ? 'bg-cyan-500 border-white scale-95 shadow-md shadow-cyan-500/50'
                        : 'bg-zinc-900/90 hover:bg-zinc-800 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    <span className="text-xs font-bold font-mono text-white">{pad.label}</span>
                    <span className="text-[9px] text-zinc-400 font-mono mt-0.5">{pad.telemetry}</span>
                  </button>
                );
              })}
            </div>
            <div className="text-[10px] text-zinc-400 font-mono text-center mt-2.5">
              PULSA PARA COMPROBAR RESPUESTA EN TIEMPO REAL
            </div>
          </div>
        </div>
      </div>

      {/* Discrete Presets / Easter Eggs Matrix */}
      <div>
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-zinc-800 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <Headphones className="w-3.5 h-3.5 text-cyan-400" />
            <span>PERFILES DE TEXTURA & REFERENTES CONCEPTUALES</span>
          </div>
          <span className="text-zinc-400 text-[11px] hidden sm:inline">IF YOU KNOW, YOU KNOW</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {profiles.map((p, idx) => {
            const isSelected = selectedProfile === idx;
            return (
              <div
                key={p.code}
                onClick={() => {
                  sound.playClick();
                  setSelectedProfile(idx);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-900 border-cyan-500/50 shadow-sm shadow-cyan-500/10'
                    : 'bg-zinc-950/60 border-zinc-850 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono text-zinc-400">{p.code}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${p.accent}`}>
                    {p.ref}
                  </span>
                </div>
                <div className="text-xs font-bold text-zinc-200 font-['Syne'] mb-1">
                  {p.attribute}
                </div>
                <div className="text-[11px] text-zinc-400 font-mono leading-relaxed">
                  {p.telemetry}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
