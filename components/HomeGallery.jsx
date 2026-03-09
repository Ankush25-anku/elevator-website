"use client";
import React, { useState, useEffect } from "react";
import "../app/gallery/gallery.css";

export default function HomeGallery() {
  const [active, setActive] = useState("ALL");
  const [preview, setPreview] = useState(null);

  const items = [
    { img: "/assets/images/gallery/g1.jpg", cat: "UNO CLASSIC" },
    { img: "/assets/images/gallery/g2.jpg", cat: "UNO CLASSIC" },
    { img: "/assets/images/gallery/g3.jpg", cat: "UNO GOLD" },
    { img: "/assets/images/gallery/g4.jpg", cat: "UNO GOLD" },
    { img: "/assets/images/gallery/g5.jpg", cat: "UNO LUXURY" },
    { img: "/assets/images/gallery/g6.jpg", cat: "UNO MAX" },
    { img: "/assets/images/gallery/g7.jpg", cat: "UNO MAX" },
    { img: "/assets/images/gallery/g8.jpg", cat: "UNO PRIME" },
  ];

  const filters = [
    "ALL",
    "UNO CLASSIC",
    "UNO MAX",
    "UNO PRIME",
    "UNO GOLD",
    "UNO LUXURY",
  ];

  const filteredItems =
    active === "ALL" ? items : items.filter((item) => item.cat === active);

  // ESC key closes popup
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setPreview(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section  id="gallery" className="hg-section">
      <div className="hg-container">
        <h2 className="hg-title">
          <span>Our</span> Gallery
        </h2>

        {/* Filters */}
        <div className="hg-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`hg-filter ${active === f ? "active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="hg-grid">
          {filteredItems.map((item, i) => (
            <div className="hg-item" key={i}>
              <img src={item.img} alt="" />

              <div className="hg-overlay">
                <div
                  className="hg-plus"
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPreview(item.img);
                  }}
                >
                  +
                </div>

                <div className="hg-overlay-content">
                  <h4>{item.cat}</h4>
                  <p>UNOSAFE Elevator Pvt Ltd</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {/* Popup Modal */}
      {preview && (
        <div className="hg-modal" onClick={() => setPreview(null)}>
          <div className="hg-lightbox" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button className="hg-close" onClick={() => setPreview(null)}>
              ×
            </button>

            {/* Left Arrow */}
            <button className="hg-nav hg-prev">‹</button>

            {/* Image */}
            <div className="hg-lightbox-imgwrap">
              <img src={preview} alt="Preview" />
            </div>

            {/* Right Arrow */}
            <button className="hg-nav hg-next">›</button>

            {/* Caption */}
            <div className="hg-caption">
              <span>Uno Classic</span>
              <span>1 of 8</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
