"use client";
import { useEffect, useRef, useState, useCallback } from "react";

export default function HeroScrollSequence() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [images, setImages] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const frameCount = 240;

  // Initialize dimensions and handle resize
  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Preload Images
  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;

    // Create an array of 240 length
    for (let i = 1; i <= frameCount; i++) {
      const img = new globalThis.Image();
      const frameStr = String(i).padStart(3, "0");
      img.src = `/ezgif-588e1100c70b50cd-jpg/ezgif-frame-${frameStr}.jpg`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          // Initial draw after all images load just to be safe
          if (canvasRef.current && dimensions.width > 0) {
            drawFrame(0);
          }
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Track Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const el = containerRef.current;
      const scrollY = window.scrollY;
      const offsetTop = el.offsetTop;
      // Scrollable height is total height minus one viewport
      const scrollableHeight = el.clientHeight - window.innerHeight;

      let progress = (scrollY - offsetTop) / scrollableHeight;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Draw Frame function
  const drawFrame = useCallback(
    (progress) => {
      if (!canvasRef.current || images.length === 0 || dimensions.width === 0)
        return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // Map 0-1 to 1-240
      const frameIndex = Math.min(
        frameCount,
        Math.max(1, Math.floor(progress * frameCount) + 1),
      );

      const img = images[frameIndex - 1]; // 1-based index
      if (!img || !img.complete) return;

      if (
        canvas.width !== dimensions.width ||
        canvas.height !== dimensions.height
      ) {
        canvas.width = dimensions.width;
        canvas.height = dimensions.height;
      }

      // Draw image covering the canvas (object-fit: cover equivalent)
      const ratio = Math.max(
        canvas.width / img.width,
        canvas.height / img.height,
      );
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio,
      );
    },
    [images, dimensions, frameCount],
  );

  // Frame Rendering Effect
  useEffect(() => {
    drawFrame(scrollProgress);
  }, [scrollProgress, drawFrame]);

  // Helper to calculate opacity for text based on progress range
  const getOpacity = (start, peak, end) => {
    if (scrollProgress < start) return 0;
    if (scrollProgress > end) return 0;
    if (scrollProgress <= peak) {
      return (scrollProgress - start) / (peak - start);
    } else {
      return 1 - (scrollProgress - peak) / (end - peak);
    }
  };

  // Helper to calculate translate for subtle movement
  const getTranslate = (start, end) => {
    if (scrollProgress < start) return 20; // start 20px down
    if (scrollProgress > end) return -20; // end 20px up

    const pct = (scrollProgress - start) / (end - start);
    // lerp from 20 to -20
    return 20 - pct * 40;
  };

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-black">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Loading State fallback */}
        {images.length < frameCount && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-0">
            <div className="w-8 h-8 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
          </div>
        )}

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-10"
        />

        {/* Overlay Black gradient to make text legible */}
        <div className="absolute inset-0 bg-black/30 z-20 pointer-events-none" />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30">
          {/* Header 1 (e.g. at 20% scroll) */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
            style={{
              opacity: getOpacity(0.06, 0.15, 0.25),
              transform: `translateY(${getTranslate(0.06, 0.25)}px)`,
              willChange: "opacity, transform",
            }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-xl mb-4 tracking-tight">
              Welcome to the Future
            </h1>
            <p style={{ color: "orange" }} className="text-lg md:text-2xl text-[var(--background)] drop-shadow-lg font-light max-w-2xl">
              Experience next-generation vertical mobility with revolutionary
              design and unmatched safety.
            </p>
          </div>

          {/* Header 2 (e.g. at 50% scroll) */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
            style={{
              opacity: getOpacity(0.40, 0.50, 0.58),
              transform: `translateY(${getTranslate(0.40, 0.58)}px)`,
              willChange: "opacity, transform",
            }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-xl mb-4 tracking-tight">
              Uncompromising Excellence
            </h1>
            <p style={{ color: "orange" }} className="text-lg md:text-2xl text-[var(--background)] drop-shadow-lg font-light max-w-2xl">
              Every UNOSAFE elevator is precision-engineered to exceed the
              highest global standards.
            </p>
          </div>

          {/* Header 3 (e.g. at 85% scroll) */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
            style={{
              opacity: getOpacity(0.73, 0.85, 0.91),
              transform: `translateY(${getTranslate(0.73, 0.91)}px)`,
              willChange: "opacity, transform",
            }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-xl mb-4 tracking-tight">
              UNOSAFE   ELEVATORS
            </h1>
            <p style={{ color: "white" }} className="text-lg md:text-2xl text-[var(--background)] drop-shadow-lg font-light max-w-2xl">
              Your vertical journey, elevated to new heights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
