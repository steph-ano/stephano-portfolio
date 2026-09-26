import React, { useEffect, useRef, useState } from 'react';
import { Activity, Play, Pause } from 'lucide-react';
import { sound } from '../audio/SoundFX';

interface AudioSpectrumProps {
  barCount?: number;
  className?: string;
  interactive?: boolean;
}

export const AudioSpectrum: React.FC<AudioSpectrumProps> = ({
  barCount = 32,
  className = '',
  interactive = true,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const toggleVisualizer = () => {
    if (!interactive) return;
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    sound.playClick();
    if (nextState) {
      sound.playChord();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let step = 0;

    const render = () => {
      step += isPlaying ? 0.05 : 0.01;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      const barWidth = width / barCount;

      for (let i = 0; i < barCount; i++) {
        // Generate simulated dynamic frequencies with harmonic peaks
        const freq1 = Math.sin(step * 1.8 + i * 0.25);
        const freq2 = Math.cos(step * 0.9 - i * 0.15);
        const freq3 = Math.sin(step * 2.5 + i * 0.4);

        let intensity = (freq1 + freq2 + freq3 + 3) / 6; // 0 to 1
        if (!isPlaying) {
          intensity *= 0.15; // idle low pulse
        }

        const barHeight = Math.max(4, intensity * (height - 8));
        const x = i * barWidth;
        const y = height - barHeight;

        // Gradient from magenta to cyan
        const grad = ctx.createLinearGradient(0, height, 0, 0);
        grad.addColorStop(0, '#e024c3');
        grad.addColorStop(0.5, '#8b5cf6');
        grad.addColorStop(1, '#22d3ee');

        ctx.fillStyle = grad;
        ctx.fillRect(x + 1, y, barWidth - 2, barHeight);

        // Peak cap highlight
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x + 1, y - 2, barWidth - 2, 2);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [barCount, isPlaying]);

  return (
    <div
      onClick={toggleVisualizer}
      onMouseEnter={() => sound.playHover()}
      className={`relative inline-flex items-center gap-3 px-3 py-2 rounded-xl glass-panel cursor-pointer hover:border-pink-500/40 transition-all ${className}`}
      title={interactive ? 'Click para alternar pulso sonoro reactivo' : ''}
    >
      <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
        <Activity className={`w-3.5 h-3.5 ${isPlaying ? 'text-cyan-400 animate-pulse' : 'text-zinc-500'}`} />
        <span className="hidden sm:inline">SIGNAL // 44.1 kHz</span>
      </div>

      <canvas
        ref={canvasRef}
        width={180}
        height={32}
        className="rounded"
      />

      {interactive && (
        <button
          type="button"
          className="text-zinc-400 hover:text-white transition-colors p-1"
          aria-label={isPlaying ? 'Pause visualizer' : 'Play visualizer'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
      )}
    </div>
  );
};
