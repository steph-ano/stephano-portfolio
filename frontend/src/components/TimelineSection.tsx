import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { sound } from '../audio/SoundFX';

export const TimelineSection: React.FC = () => {
  return (
    <section id="trajectory" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>FORMACIÓN ACADÉMICA & CERTIFICACIONES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-['Syne'] text-white">
          TRAYECTORIA & <span className="cyan-gradient-text">ESTUDIOS</span>
        </h2>
        <p className="text-zinc-400 text-sm mt-3">
          Fundamentos rigurosos de ingeniería de software, arquitectura de sistemas y gestión estratégica.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education Card */}
        <div
          onMouseEnter={() => sound.playHover()}
          className="glass-panel rounded-3xl p-8 border border-zinc-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="mono-tag text-cyan-400 font-semibold">PREGRADO UNIVERSITARIO</span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                OCTAVO CICLO
              </span>
            </div>

            <h3 className="text-2xl font-bold font-['Syne'] text-white mb-2">
              Ingeniería de Software
            </h3>
            <h4 className="text-base text-zinc-300 font-medium mb-4">
              Universidad Peruana de Ciencias Aplicadas (UPC)
            </h4>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 mb-6 pb-6 border-b border-zinc-800">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                <span>Marzo 2023 – Actualidad</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>Campus Monterrico • Lima, Perú</span>
              </div>
            </div>

            <div className="space-y-2.5 text-sm text-zinc-400">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Sólida base en diseño centrado en el usuario (UX/UI), heurísticas y metodologías ágiles.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Arquitectura de software moderna: C4, Microservicios, Event Sourcing y patrones distribuidos.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Bases de datos con modelamiento avanzado hasta 5FN, triggers, procedimientos y almacenamiento NoSQL.</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>UPC MONTERRICO</span>
            <span className="text-cyan-400">PERFIL TÉCNICO VALIDADO</span>
          </div>
        </div>

        {/* Certifications Card */}
        <div
          onMouseEnter={() => sound.playHover()}
          className="glass-panel rounded-3xl p-8 border border-zinc-800 hover:border-purple-500/40 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="mono-tag text-purple-400 font-semibold">ACREDITACIONES & RECONOCIMIENTOS</span>
              <Award className="w-5 h-5 text-purple-400" />
            </div>

            <h3 className="text-2xl font-bold font-['Syne'] text-white mb-2">
              Certificaciones Profesionales
            </h3>
            <p className="text-sm text-zinc-400 mb-6 pb-6 border-b border-zinc-800">
              Complemento integral en negociación y liderazgo de proyectos de diseño y software.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-pink-400">CERTIFICACIÓN INTERNACIONAL</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <h4 className="text-base font-bold font-['Syne'] text-white">
                  Negotiation, Mediation and Conflict Resolution
                </h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Capacitación estratégica en mediación, comunicación asertiva, negociación colaborativa y resolución ágil de fricciones en equipos multidisciplinarios.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-cyan-400">GESTIÓN DE DISEÑO</span>
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <h4 className="text-base font-bold font-['Syne'] text-white">
                  Design and Project Management
                </h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Especialización en ciclo de vida de diseño de producto, planificación iterativa, control de hitos y metodologías de gestión de software.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>LIDERAZGO Y GESTIÓN</span>
            <span className="text-purple-400">HABILIDADES BLANDAS & RIGOR</span>
          </div>
        </div>
      </div>
    </section>
  );
};
