import React, { useState } from 'react';
import { Mail, Phone, MapPin, Sparkles, FileText, Check, Copy, ExternalLink, Briefcase, GraduationCap, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { sound } from '../audio/SoundFX';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText('stephrvq@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    sound.playClick();
    navigator.clipboard.writeText('+51923399455');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="section-editorial-bar flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-amber-400 mb-2 flex-wrap">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>FICHA DE CONTACTO // INFORMACIÓN PROFESIONAL & RECLUTAMIENTO</span>
          </div>
          <h2 className="text-[clamp(1.5rem,6.2vw,3rem)] font-black font-['Syne'] text-white leading-tight break-words tracking-tight">
            CONTACTO & <span className="desert-gold-gradient">PERFIL PROFESIONAL</span>
          </h2>
          <p className="text-zinc-300 text-sm mt-2 max-w-xl leading-relaxed">
            Canales directos para reclutadores, líderes técnicos y equipos de ingeniería.
            Información de contacto oficial para evaluación de perfil técnico y procesos de selección.
          </p>
        </div>

        <div className="text-xs font-mono text-amber-300/80 px-3.5 py-1.5 rounded-lg zine-panel border border-amber-500/30 self-start md:self-end">
          ESTADO: <span className="text-white font-bold">DISPONIBLE PARA OPORTUNIDADES LABORALES</span>
        </div>
      </div>

      {/* Main Recruiter Dossier Panel */}
      <div className="zine-panel corner-crosshairs rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-amber-500/25 relative overflow-hidden shadow-2xl">
        {/* Subtle Desert Atmosphere Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/15 via-orange-500/10 to-sky-500/10 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 relative z-10">
          {/* Left Column: Candidate Overview & Summary */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="tech-stamp-sky">
                  CANDIDATO // SOFTWARE ENGINEER
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-zinc-400">UPC MONTERRICO</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-bold font-['Syne'] text-white mb-2">
                Stephano Renan Valdivia Quispe
              </h3>
              <p className="text-xs sm:text-sm font-mono text-amber-400 font-semibold mb-5 sm:mb-6">
                Ingeniería de Software • 8vo Ciclo • Especialización Backend & Sistemas Distribuidos
              </p>

              <div className="space-y-3 text-xs font-mono text-zinc-300 bg-zinc-950/70 p-4 sm:p-5 rounded-2xl border border-zinc-800/90 mb-6 sm:mb-8">
                <div className="flex items-start sm:items-center gap-3">
                  <Briefcase className="w-4 h-4 text-sky-400 shrink-0 mt-0.5 sm:mt-0" />
                  <div>
                    <span className="text-zinc-500">ROL OBJETIVO:</span>{' '}
                    <span className="text-zinc-100 font-semibold">Software Engineer / Backend Developer / Full Stack</span>
                  </div>
                </div>

                <div className="flex items-start sm:items-center gap-3">
                  <Code2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
                  <div>
                    <span className="text-zinc-500">CORE STACK:</span>{' '}
                    <span className="text-zinc-100 font-semibold">Go (Golang), Spring Boot 3, C# .NET 8, TypeScript, PostgreSQL</span>
                  </div>
                </div>

                <div className="flex items-start sm:items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-orange-400 shrink-0 mt-0.5 sm:mt-0" />
                  <div>
                    <span className="text-zinc-500">FORMACIÓN:</span>{' '}
                    <span className="text-zinc-100 font-semibold">Universidad Peruana de Ciencias Aplicadas (UPC) — 2023–2026</span>
                  </div>
                </div>

                <div className="flex items-start sm:items-center gap-3">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5 sm:mt-0" />
                  <div>
                    <span className="text-zinc-500">UBICACIÓN:</span>{' '}
                    <span className="text-zinc-100 font-semibold">Lima, Perú • Presencial, Híbrido o Remoto</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Print / Action Buttons */}
            <div className="pt-4 sm:pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  window.print();
                }}
                onMouseEnter={() => sound.playHover()}
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-mono text-xs font-bold bg-amber-400 hover:bg-amber-300 text-black shadow-lg shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-black" />
                <span>IMPRIMIR FICHA / GUARDAR PDF</span>
              </button>

              <a
                href="mailto:stephrvq@gmail.com"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-mono text-xs font-bold zine-panel text-zinc-200 hover:text-white hover:border-amber-400 transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>ENVIAR CORREO DIRECTO</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Contact Cards with Copy Support */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/80 border border-amber-500/20 hover:border-amber-500/40 transition-colors flex flex-col xs:flex-row xs:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-amber-400 shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">CORREO ELECTRÓNICO</div>
                    <a
                      href="mailto:stephrvq@gmail.com"
                      className="text-sm sm:text-base font-bold text-white hover:text-amber-300 transition-colors font-mono truncate block"
                    >
                      stephrvq@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={() => sound.playHover()}
                  className="self-end xs:self-center px-3 py-1.5 rounded-lg zine-panel text-xs font-mono text-zinc-300 hover:text-white hover:border-amber-400 flex items-center gap-1.5 shrink-0 cursor-pointer"
                  title="Copiar correo"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-amber-400">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/80 border border-sky-500/20 hover:border-sky-500/40 transition-colors flex flex-col xs:flex-row xs:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sky-400 shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">TELÉFONO // WHATSAPP</div>
                    <a
                      href="tel:+51923399455"
                      className="text-sm sm:text-base font-bold text-white hover:text-sky-300 transition-colors font-mono truncate block"
                    >
                      +51 923 399 455
                    </a>
                  </div>
                </div>

                <div className="self-end xs:self-center flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={handleCopyPhone}
                    onMouseEnter={() => sound.playHover()}
                    className="px-3 py-1.5 rounded-lg zine-panel text-xs font-mono text-zinc-300 hover:text-white hover:border-sky-400 flex items-center gap-1.5 cursor-pointer"
                    title="Copiar teléfono"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-sky-400" />
                        <span className="text-sky-400">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>

                  <a
                    href="https://wa.me/51923399455"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playClick()}
                    onMouseEnter={() => sound.playHover()}
                    className="p-2 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30 transition-colors"
                    title="Abrir WhatsApp"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* LinkedIn & GitHub Direct Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/stephanovaldivia"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playClick()}
                  onMouseEnter={() => sound.playHover()}
                  className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-sky-400/50 transition-all flex flex-col justify-between group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <LinkedinIcon className="w-5 h-5 text-sky-400" />
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-sky-400 transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500">RED PROFESIONAL</div>
                    <div className="text-sm font-bold text-white font-mono group-hover:text-sky-300 transition-colors">
                      in/stephanovaldivia
                    </div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/steph-ano"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playClick()}
                  onMouseEnter={() => sound.playHover()}
                  className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-amber-400/50 transition-all flex flex-col justify-between group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <GithubIcon className="w-5 h-5 text-amber-400" />
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500">CÓDIGO & REPOSITORIOS</div>
                    <div className="text-sm font-bold text-white font-mono group-hover:text-amber-300 transition-colors">
                      github/steph-ano
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
              <span>CANALES AUDITADOS Y VERIFICADOS</span>
              <span className="text-amber-400 font-semibold">RESPUESTA INMEDIATA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
