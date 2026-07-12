"use client";

import React, { useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";

export default function InstagramPosts() {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    "https://www.instagram.com/p/DX2364Tk3dg/",
    "https://www.instagram.com/p/C37xC32S65Y/",
    "https://www.instagram.com/p/DDY4R-vznhw/",
    "https://www.instagram.com/p/DX9p2fQzZZ8/",
  ];

  return (
    <section className="instagram-feed-section">
      <div className="container">
        {/* TOP SECTION */}
        <div className="instagram-top">
          <div className="instagram-profile">
            <div className="instagram-profile-image">
              <img src="/assets/images/logo1.jpg" alt="UNOSAFE" />
            </div>

            <div className="instagram-profile-content">
              <h2>unosafe_elevator</h2>

              <p>
                Elevate your lifestyle with elegance and comfort ✨ Premium
                Elevator • Modern Designs • Advanced Safety
              </p>

              <a
                href="https://www.instagram.com/unosafe_elevator/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Instagram →
              </a>
            </div>
          </div>
        </div>

        {/* POSTS GRID */}
        <div className="instagram-grid">
          {posts.map((post, index) => (
            <div
              key={index}
              className="instagram-embed-card"
              onClick={() => setSelectedPost(post)}
            >
              <InstagramEmbed url={post} width="100%" />
            </div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL */}
      {/* POPUP MODAL */}
      {selectedPost && (
        <div className="instagram-modal" onClick={() => setSelectedPost(null)}>
          <div
            className="instagram-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              className="instagram-close"
              onClick={() => setSelectedPost(null)}
            >
              ✕
            </button>

            {/* INSTAGRAM IFRAME */}
            <iframe
              src={`${selectedPost}embed`}
              width="100%"
              height="650"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
              allow="encrypted-media"
              className="instagram-iframe"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
