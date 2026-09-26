import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { sound } from '../audio/SoundFX';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    sound.playChord();

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.75 },
        colors: ['#e024c3', '#8b5cf6', '#22d3ee', '#10b981', '#f43f5e']
      });
    } catch {
      // Confetti fallback
    }

    setSent(true);

    // Build mailto link
    const mailtoUrl = `mailto:stephrvq@gmail.com?subject=${encodeURIComponent(
      `Contacto Portafolio desde la Web - ${name}`
    )}&body=${encodeURIComponent(
      `Hola Stephano,\n\nMi nombre es ${name} (${email}).\n\nMensaje:\n${message}\n\nEnviado desde tu portafolio web.`
    )}`;

    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 border border-pink-500/25 relative overflow-hidden">
        {/* Glow ambient circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-500/15 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          {/* Contact Details & Bio */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/40 border border-pink-500/30 text-xs font-mono text-pink-300 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CONECTEMOS & CONSTRUYAMOS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-['Syne'] text-white mb-4">
                ¿TIENES UN PROYECTO O UNA <span className="aurora-gradient-text">PROPUESTA?</span>
              </h2>

              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Abierto a oportunidades como Software Engineer, proyectos de arquitectura distribuida, 
                microservicios con Spring Boot o .NET 8, y colaboraciones de tecnología creativa.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:stephrvq@gmail.com"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="flex items-center gap-3.5 text-sm text-zinc-300 hover:text-pink-400 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-pink-500/40">
                    <Mail className="w-4 h-4 text-pink-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500">CORREO DIRECTO</div>
                    <div className="font-semibold text-zinc-200">stephrvq@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+51923399455"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="flex items-center gap-3.5 text-sm text-zinc-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-cyan-500/40">
                    <Phone className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500">TELÉFONO // WHATSAPP</div>
                    <div className="font-semibold text-zinc-200">+51 923 399 455</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 text-sm text-zinc-300">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                    <MapPin className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500">UBICACIÓN</div>
                    <div className="font-semibold text-zinc-200">Lima, Perú</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Resume Links */}
            <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-3">
              <a
                href="https://linkedin.com/in/stephanovaldivia"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="px-4 py-2 rounded-xl text-xs font-mono bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/60 hover:border-pink-500/40 transition-colors flex items-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/stephanovaldivia"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="px-4 py-2 rounded-xl text-xs font-mono bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/60 hover:border-purple-500/40 transition-colors flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  window.print();
                }}
                onMouseEnter={() => sound.playHover()}
                className="px-4 py-2 rounded-xl text-xs font-mono bg-pink-950/60 hover:bg-pink-900/60 text-pink-300 border border-pink-500/40 transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Imprimir / PDF</span>
              </button>
            </div>
          </div>

          {/* Message Form */}
          <div className="lg:col-span-7 bg-zinc-950/80 rounded-2xl p-6 sm:p-8 border border-zinc-800">
            <h3 className="text-xl font-bold font-['Syne'] text-white mb-2">
              Envía un Mensaje Rápido
            </h3>
            <p className="text-xs text-zinc-400 mb-6 font-mono">
              Genera tu correo pre-redactado automáticamente con feedback sonoro interactivo.
            </p>

            {sent ? (
              <div className="p-6 rounded-xl bg-pink-950/40 border border-pink-500/40 text-center animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-pink-400 mx-auto mb-2" />
                <h4 className="text-base font-bold text-white mb-1">¡Mensaje Preparado!</h4>
                <p className="text-xs text-zinc-300">
                  Se ha generado el cliente de correo para enviar tu mensaje a <b>stephrvq@gmail.com</b>.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 px-4 py-1.5 rounded-lg text-xs font-mono bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1">TU NOMBRE</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Alex Vance"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1">TU CORREO ELECTRÓNICO</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nombre@empresa.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 mb-1">MENSAJE O PROPUESTA</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Cuéntame sobre el rol, proyecto o colaboración que tienes en mente..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  onMouseEnter={() => sound.playHover()}
                  className="w-full py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 hover:opacity-95 shadow-lg shadow-pink-600/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>DISPARAR MENSAJE & CONECTAR</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
