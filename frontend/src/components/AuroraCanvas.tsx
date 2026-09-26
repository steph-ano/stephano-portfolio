import React, { useEffect, useRef } from 'react';

export const AuroraCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates with smoothing
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Floating luminous particles in desert gold, monarch orange, and sky blue hues
    const particleCount = 40;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 1.0,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      // Hues: 25 to 45 (Golden Amber / Tangerine) and 195 to 215 (Desert Sky Blue)
      hue: Math.random() > 0.4 ? Math.random() * 25 + 25 : Math.random() * 25 + 195,
      alpha: Math.random() * 0.45 + 0.2,
    }));

    let time = 0;

    const render = () => {
      time += 0.007;

      // Easing mouse
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Gradient 1: Monarch Amber / Warm Desert Ochre (follows mouse)
      const grad1 = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        Math.max(width * 0.38, 320)
      );
      grad1.addColorStop(0, 'rgba(245, 158, 11, 0.10)'); // Amber
      grad1.addColorStop(0.5, 'rgba(234, 88, 12, 0.05)'); // Tangerine
      grad1.addColorStop(1, 'rgba(12, 13, 18, 0)');

      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Gradient 2: Cerulean Desert Sky Blue (drifts smoothly)
      const blob2X = width - mouse.x * 0.5 + Math.sin(time) * 100;
      const blob2Y = height * 0.25 + Math.cos(time * 0.7) * 80;
      const grad2 = ctx.createRadialGradient(
        blob2X,
        blob2Y,
        0,
        blob2X,
        blob2Y,
        Math.max(width * 0.32, 280)
      );
      grad2.addColorStop(0, 'rgba(14, 165, 233, 0.09)'); // Sky blue
      grad2.addColorStop(0.6, 'rgba(56, 189, 248, 0.03)');
      grad2.addColorStop(1, 'rgba(12, 13, 18, 0)');

      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Render Floating Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          p.x += (dx / dist) * 0.7;
          p.y += (dy / dist) * 0.7;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 65%, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${p.hue}, 90%, 60%, 0.7)`;
        ctx.fill();
      });
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-85"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
