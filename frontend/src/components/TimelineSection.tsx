import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, Sparkles, Terminal } from 'lucide-react';
import { sound } from '../audio/SoundFX';

export const TimelineSection: React.FC = () => {
  return (
    <section id="trajectory" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Editorial Section Header */}
      <div className="section-editorial-bar flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
            <span>FORMACIÓN ACADÉMICA // EXPEDIENTE TÉCNICO & CERTIFICACIONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-['Syne'] text-white">
            TRAYECTORIA & <span className="desert-gold-gradient">ESTUDIOS</span>
          </h2>
          <p className="text-zinc-300 text-sm mt-2 max-w-xl leading-relaxed">
            Fundamentos rigurosos de ingeniería de software, arquitectura de sistemas distribuidos y 
            certificaciones internacionales en negociación colaborativa y gestión de proyectos.
          </p>
        </div>

        <div className="text-xs font-mono text-zinc-400 flex items-center gap-2 self-start md:self-end">
          <Terminal className="w-4 h-4 text-sky-400" />
          <span>UPC MONTERRICO // 2023 - 2026</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education Card */}
        <div
          onMouseEnter={() => sound.playHover()}
          className="group zine-panel corner-crosshairs rounded-3xl p-8 border border-amber-500/25 hover:border-amber-500/60 hover:shadow-2xl hover:shadow-amber-500/10 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="tech-stamp-sky">
                EXPEDIENTE 01 // PREGRADO
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-400/10 text-amber-300 border border-amber-400/30 font-semibold">
                OCTAVO CICLO // 8VO
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-['Syne'] text-white mb-2 group-hover:text-amber-200 transition-colors">
              Ingeniería de Software
            </h3>
            <h4 className="text-base text-zinc-300 font-medium mb-5">
              Universidad Peruana de Ciencias Aplicadas (UPC)
            </h4>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 mb-6 pb-6 border-b border-zinc-800">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-zinc-300">Marzo 2023 – Actualidad</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-zinc-300">Campus Monterrico • Lima, Perú</span>
              </div>
            </div>

            <div className="space-y-3.5 text-sm text-zinc-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Arquitectura de software moderna: C4 Model, microservicios, Event Sourcing y patrones distribuidos.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Bases de datos avanzadas: normalización hasta 5FN, triggers, stored procedures y almacenamiento políglota con PostgreSQL y Redis.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Diseño centrado en el usuario (UX/UI), análisis heurístico, prototipado y metodologías ágiles escaladas (SAFe, LeSS).</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="text-zinc-500">FACULTAD DE INGENIERÍA</span>
            <span className="text-amber-400 font-semibold">PERFIL TÉCNICO VALIDADO</span>
          </div>
        </div>

        {/* Certifications Card */}
        <div
          onMouseEnter={() => sound.playHover()}
          className="group zine-panel corner-crosshairs rounded-3xl p-8 border border-amber-500/25 hover:border-amber-500/60 hover:shadow-2xl hover:shadow-amber-500/10 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="tech-stamp-monarch">
                EXPEDIENTE 02 // ACREDITACIONES
              </span>
              <Award className="w-5 h-5 text-amber-400" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-['Syne'] text-white mb-2 group-hover:text-amber-200 transition-colors">
              Certificaciones Profesionales
            </h3>
            <p className="text-sm text-zinc-300 mb-6 pb-6 border-b border-zinc-800 leading-relaxed">
              Especializaciones complementarias en resolución estratégica de conflictos, negociación colaborativa y liderazgo de proyectos de software.
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-zinc-900/90 border border-amber-500/20 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-amber-400 font-semibold">CERTIFICACIÓN INTERNACIONAL</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <h4 className="text-base font-bold font-['Syne'] text-white">
                  Negotiation, Mediation and Conflict Resolution
                </h4>
                <p className="text-xs text-zinc-300 mt-1.5 leading-relaxed">
                  Capacitación estratégica en mediación, comunicación asertiva, negociación colaborativa basada en intereses y resolución ágil de fricciones en equipos multidisciplinarios.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/90 border border-sky-500/20 hover:border-sky-500/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-sky-400 font-semibold">GESTIÓN DE PROYECTO</span>
                  <Award className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <h4 className="text-base font-bold font-['Syne'] text-white">
                  Design and Project Management
                </h4>
                <p className="text-xs text-zinc-300 mt-1.5 leading-relaxed">
                  Especialización en ciclo de vida de diseño de producto, planificación iterativa, control de hitos, gobernanza ágil y entrega continua de valor.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="text-zinc-500">LIDERAZGO Y NEGOCIACIÓN</span>
            <span className="text-sky-400 font-semibold">ESTÁNDAR PROFESIONAL</span>
          </div>
        </div>
      </div>
    </section>
  );
};
