"use client";
import React, { useEffect, useRef } from "react";
import "../app/Awards/Awards.css";

export default function HomeAwards() {
  const trackRef = useRef(null);

  useEffect(() => {
    const slider = trackRef.current;

    let isDown = false;
    let startX;
    let scrollLeft;

    let animationFrame;
    let lastTime = 0;

    let velocity = 0;
    let momentumID;

    let activeCard = null;

    const speed = 0.04;

    // ✅ AUTO SCROLL (NEVER STOP)
    const autoScroll = (time) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      // auto movement + manual influence
      slider.scrollLeft += delta * speed + velocity * 0.02;

      // seamless loop
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft -= slider.scrollWidth / 2;
      }
      if (slider.scrollLeft < 0) {
        slider.scrollLeft += slider.scrollWidth / 2;
      }

      // decay velocity
      velocity *= 0.95;

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    // 🖱️ DRAG START
    const onMouseDown = (e) => {
      isDown = true;
      slider.classList.add("dragging");

      startX = e.pageX;
      scrollLeft = slider.scrollLeft;

      const card = e.target.closest(".aw3d-card");
      if (card) {
        activeCard = card;
        activeCard.classList.add("active-card");
      }
    };

    // 🖱️ DRAG MOVE
    const onMouseMove = (e) => {
      if (!isDown) return;

      const x = e.pageX;
      const walk = x - startX;

      slider.scrollLeft = scrollLeft - walk;
      velocity = walk;

      // 🔥 TRUE 3D POP OUT
      if (activeCard) {
        const rect = activeCard.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;

        activeCard.style.transform = `
        translateX(${offsetX * 0.6}px)
        rotateY(${offsetX * 0.1}deg)
        scale(1.1)
        translateZ(120px)
      `;
        activeCard.style.opacity = "0.9";
      }
    };

    // 🖱️ DRAG END
    const endDrag = () => {
      isDown = false;
      slider.classList.remove("dragging");

      if (activeCard) {
        activeCard.style.transform =
          "translateX(0) rotateY(0) scale(1) translateZ(0)";
        activeCard.style.opacity = "1";
        activeCard.classList.remove("active-card");
        activeCard = null;
      }
    };

    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mousemove", onMouseMove);
    slider.addEventListener("mouseup", endDrag);
    slider.addEventListener("mouseleave", endDrag);

    // 📱 TOUCH
    slider.addEventListener("touchstart", (e) => {
      startX = e.touches[0].pageX;
      scrollLeft = slider.scrollLeft;

      const card = e.target.closest(".aw3d-card");
      if (card) {
        activeCard = card;
        activeCard.classList.add("active-card");
      }
    });

    slider.addEventListener("touchmove", (e) => {
      const x = e.touches[0].pageX;
      const walk = x - startX;

      slider.scrollLeft = scrollLeft - walk;
      velocity = walk;

      if (activeCard) {
        const rect = activeCard.getBoundingClientRect();
        const offsetX = x - rect.left - rect.width / 2;

        activeCard.style.transform = `
        translateX(${offsetX * 0.6}px)
        rotateY(${offsetX * 0.1}deg)
        scale(1.1)
        translateZ(120px)
      `;
        activeCard.style.opacity = "0.9";
      }
    });

    slider.addEventListener("touchend", () => {
      if (activeCard) {
        activeCard.style.transform =
          "translateX(0) rotateY(0) scale(1) translateZ(0)";
        activeCard.style.opacity = "1";
        activeCard.classList.remove("active-card");
        activeCard = null;
      }
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);
  // 🔥 DATA
  const awardsData = [
    "/assets/images/awards/img1103.jpg",
    "/assets/images/awards/img1104.jpg",
    "/assets/images/awards/img1105.jpg",
    "/assets/images/awards/img1106.jpg",
    "/assets/images/awards/img1107.jpg",
    "/assets/images/awards/img1108.jpg",
    "/assets/images/awards/img1109.jpg",
    "/assets/images/awards/img1110.jpg",
  ];

  // 🔁 DUPLICATE FOR LOOP
  const awards = [...awardsData, ...awardsData];

  return (
    <section className="aw3d-section">
      <div className="aw3d-container">
        <div className="aw3d-header">
          <span>Awards & Recognition</span>
          <h2>Moments of Honor</h2>
        </div>

        <div className="aw3d-slider" ref={trackRef}>
          <div className="aw3d-track">
            {awards.map((img, i) => (
              <div className="aw3d-card" key={i}>
                <img src={img} alt="award" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
