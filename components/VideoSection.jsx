"use client";

import { useEffect } from "react";
import "glightbox/dist/css/glightbox.css";

export default function VideoSection() {
  useEffect(() => {
    import("glightbox").then((GLightbox) => {
      GLightbox.default({
        selector: ".glightbox",
      });
    });
  }, []);

  return (
    <section className="video-section centred">
      <div
        className="bg-layer parallax-bg"
        style={{
          backgroundImage: "url(/assets/images/img1054.jpg)",
        }}
      ></div>

      <div className="auto-container">
        <div className="video-btn">
          <a
            href="https://www.youtube.com/embed/-gmnn6AYRdc?autoplay=1"
            className="glightbox"
          >
            <i className="icon-7"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
