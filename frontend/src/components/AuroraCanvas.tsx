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

    // Floating luminous particles
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.5 + 1.2,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      hue: Math.random() * 60 + 280, // Magenta to purple to cyan
      alpha: Math.random() * 0.5 + 0.2,
    }));

    let time = 0;

    const render = () => {
      time += 0.008;

      // Easing mouse
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Aurora Gradient Blob 1 (Purple/Magenta)
      const grad1 = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        Math.max(width * 0.4, 350)
      );
      grad1.addColorStop(0, 'rgba(224, 36, 195, 0.12)');
      grad1.addColorStop(0.5, 'rgba(139, 92, 246, 0.06)');
      grad1.addColorStop(1, 'rgba(8, 9, 13, 0)');

      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Aurora Gradient Blob 2 (Cyan/Acid Lime - drifts opposite)
      const blob2X = width - mouse.x * 0.6 + Math.sin(time) * 120;
      const blob2Y = height * 0.3 + Math.cos(time * 0.8) * 90;
      const grad2 = ctx.createRadialGradient(
        blob2X,
        blob2Y,
        0,
        blob2X,
        blob2Y,
        Math.max(width * 0.35, 300)
      );
      grad2.addColorStop(0, 'rgba(34, 211, 238, 0.09)');
      grad2.addColorStop(0.6, 'rgba(16, 185, 129, 0.04)');
      grad2.addColorStop(1, 'rgba(8, 9, 13, 0)');

      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Render Floating Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Repel or attract slightly towards mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          p.x += (dx / dist) * 0.8;
          p.y += (dy / dist) * 0.8;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue + Math.sin(time) * 30}, 85%, 65%, ${p.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsla(${p.hue}, 90%, 60%, 0.8)`;
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
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
