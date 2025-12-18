import { useEffect, useRef, useState } from "react";
import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const LogoShowcase = () => {
  const marqueeRef = useRef(null);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(0);
  const contentWidthRef = useRef(0);

  const stateRef = useRef({
    offset: 0,
    velocity: 0,
    isDragging: false,
    pointerId: null,
    lastX: 0,
    lastMoveTime: 0,
  });

  const [, forceRender] = useState(0);
  const force = () => forceRender((x) => x + 1);

  const setOffset = (nextOffset) => {
    const w = contentWidthRef.current;
    if (w > 0) {
      let o = nextOffset % w;
      if (o > 0) o -= w;
      stateRef.current.offset = o;
    } else {
      stateRef.current.offset = nextOffset;
    }
    force();
  };

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const measure = () => {
      const total = el.scrollWidth;
      contentWidthRef.current = total / 2;
      setOffset(stateRef.current.offset);
    };

    measure();

    const ro = new ResizeObserver(() => {
      measure();
    });

    ro.observe(el);
    return () => {
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    const AUTO_SPEED_PX_PER_SEC = 60;
    const FRICTION_PER_SEC = 3.5;

    const tick = (t) => {
      const last = lastTimeRef.current || t;
      const dt = Math.min(0.05, (t - last) / 1000);
      lastTimeRef.current = t;

      const s = stateRef.current;

      if (!s.isDragging) {
        s.velocity *= Math.exp(-FRICTION_PER_SEC * dt);

        const v = Math.abs(s.velocity) < 5 ? 0 : s.velocity;
        const delta = -(AUTO_SPEED_PX_PER_SEC * dt) + v * dt;
        if (delta !== 0) setOffset(s.offset + delta);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const onPointerDown = (e) => {
    const el = marqueeRef.current;
    if (!el) return;

    const s = stateRef.current;
    s.isDragging = true;
    s.pointerId = e.pointerId;
    s.velocity = 0;
    s.lastX = e.clientX;
    s.lastMoveTime = performance.now();

    el.setPointerCapture(e.pointerId);
    force();
  };

  const onPointerMove = (e) => {
    const s = stateRef.current;
    if (!s.isDragging) return;
    if (s.pointerId !== e.pointerId) return;

    const now = performance.now();
    const dx = e.clientX - s.lastX;
    const dtMs = Math.max(1, now - s.lastMoveTime);
    const v = (dx / dtMs) * 1000;

    s.velocity = 0.8 * s.velocity + 0.2 * v;
    s.lastX = e.clientX;
    s.lastMoveTime = now;

    setOffset(s.offset + dx);
  };

  const endDrag = (e) => {
    const el = marqueeRef.current;
    const s = stateRef.current;
    if (!s.isDragging) return;
    if (s.pointerId !== e.pointerId) return;

    s.isDragging = false;
    s.pointerId = null;

    if (el && e.pointerId != null) {
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
    force();
  };

  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div
          ref={marqueeRef}
          className="marquee-box md:gap-12 gap-5"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          style={{
            transform: `translateX(${stateRef.current.offset}px)`,
            cursor: stateRef.current.isDragging ? "grabbing" : "grab",
            touchAction: "pan-y",
          }}
        >
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`a-${index}`} icon={icon} />
          ))}

          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`b-${index}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;
