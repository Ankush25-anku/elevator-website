"use client";
import { useEffect, useRef, useState, useCallback } from "react";

export default function HeroScrollSequence() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [images, setImages] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const frameCount = 240;

  /* ============================= */
  /* Viewport Size */
  /* ============================= */
  useEffect(() => {
    const updateSize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  /* ============================= */
  /* Preload Images */
  /* ============================= */
  useEffect(() => {
    const loaded = [];
    let count = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const num = String(i).padStart(3, "0");
      img.src = `/ezgif-588e1100c70b50cd-jpg/ezgif-frame-${num}.jpg`;

      img.onload = () => {
        count++;
        if (count === frameCount) {
          setImages(loaded);
        }
      };

      loaded.push(img);
    }
  }, []);

  /* ============================= */
  /* Scroll Progress (smooth) */
  /* ============================= */
  useEffect(() => {
    const updateScroll = () => {
      if (!containerRef.current) return;

      const el = containerRef.current;
      const scrollY = window.scrollY;
      const offsetTop = el.offsetTop;
      const scrollable = el.clientHeight - window.innerHeight;

      let progress = (scrollY - offsetTop) / scrollable;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* ============================= */
  /* Draw Frame */
  /* ============================= */
  const drawFrame = useCallback(
    (progress) => {
      if (!canvasRef.current || images.length === 0) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const dpr = window.devicePixelRatio || 1;
      const w = dimensions.width;
      const h = dimensions.height;

      if (w === 0 || h === 0) return;

      // Proper canvas scaling
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Frame index
      const index = Math.min(
        frameCount - 1,
        Math.floor(progress * (frameCount - 1)),
      );

      const img = images[index];
      if (!img) return;

      // Cover fit
      const ratio = Math.max(w / img.width, h / img.height);
      const x = (w - img.width * ratio) / 2;
      const y = (h - img.height * ratio) / 2;

      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        x,
        y,
        img.width * ratio,
        img.height * ratio,
      );
    },
    [images, dimensions],
  );

  /* ============================= */
  /* Render Frame */
  /* ============================= */
  useEffect(() => {
    if (images.length) drawFrame(scrollProgress);
  }, [scrollProgress, images, drawFrame]);

  /* Draw first frame immediately (no black flash) */
  useEffect(() => {
    if (images.length) drawFrame(0);
  }, [images, drawFrame]);

  /* ============================= */
  /* Text Helpers */
  /* ============================= */
  const getOpacity = (start, peak, end) => {
    if (scrollProgress < start || scrollProgress > end) return 0;
    if (scrollProgress <= peak) {
      return (scrollProgress - start) / (peak - start);
    }
    return 1 - (scrollProgress - peak) / (end - peak);
  };

  const getTranslate = (start, end) => {
    if (scrollProgress < start) return 20;
    if (scrollProgress > end) return -20;
    const pct = (scrollProgress - start) / (end - start);
    return 20 - pct * 40;
  };

  /* ============================= */
  /* UI */
  /* ============================= */
  return (
    <div
      ref={containerRef}
      className="relative w-full h-[220vh] bg-black" // ✅ fixed height
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Loading Spinner */}
        {images.length < frameCount && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-0">
            <div className="w-8 h-8 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-10"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 z-20 pointer-events-none" />

        {/* Bottom fade to avoid hard cut */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-20" />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30">
          {/* Text 1 */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
            style={{
              opacity: getOpacity(0.06, 0.15, 0.25),
              transform: `translateY(${getTranslate(0.06, 0.25)}px)`,
            }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Welcome to the Future
            </h1>
            <p className="text-lg md:text-2xl text-orange-400 max-w-2xl">
              Experience next-generation vertical mobility with revolutionary
              design and unmatched safety.
            </p>
          </div>

          {/* Text 2 */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
            style={{
              opacity: getOpacity(0.4, 0.5, 0.58),
              transform: `translateY(${getTranslate(0.4, 0.58)}px)`,
            }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Uncompromising Excellence
            </h1>
            <p className="text-lg md:text-2xl text-orange-400 max-w-2xl">
              Every UNOSAFE elevator is precision-engineered to exceed the
              highest global standards.
            </p>
          </div>

          {/* Text 3 */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
            style={{
              opacity: getOpacity(0.73, 0.85, 0.91),
              transform: `translateY(${getTranslate(0.73, 0.91)}px)`,
            }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              UNOSAFE ELEVATORS
            </h1>
            <p className="text-lg md:text-2xl text-white max-w-2xl">
              Your vertical journey, elevated to new heights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
