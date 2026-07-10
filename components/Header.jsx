"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main-header">
      {/* header-lower */}
      <div className="header-lower">
        <div className="outer-container p_relative">
          {/* Mobile Toggle */}
          <div className="mobile-nav-toggler" onClick={() => setMenuOpen(true)}>
            <i className="fas fa-bars"></i>
          </div>

          <div className="outer-box">
            {/* logo + menu */}
            <div className="menu-column">
              <figure className="logo-box">
                <a href="/">
                  <img
                    src="/assets/images/logo12.png"
                    alt="UNOSAFE"
                    className="site-logo"
                  />
                </a>
              </figure>

              {/* Desktop Menu */}
              <div className="menu-area">
                <nav className="main-menu clearfix">
                  <ul className="navigation clearfix">
                    <li>
                      <a href="/">Home</a>
                    </li>

                    <li>
                      <a href="/about">About</a>
                    </li>

                    <li className="dropdown">
                      <a href="/projects">Products</a>
                      <ul>
                        <li>
                          <a href="/products/mr-geared-elevator">
                            Machine Room Elevators
                          </a>
                        </li>

                        <li>
                          <a href="/products/mr-gearlesselevators">
                            Machine Room Less Elevators
                          </a>
                        </li>

                        <li>
                          <a href="/products/hydraulicelevators">
                            Hydraulic Elevators
                          </a>
                        </li>

                        <li>
                          <a href="/products/medicalelevators">
                            Hospital / Stretcher Elevator
                          </a>
                        </li>

                        <li>
                          <a href="/products/capsuleelevators">
                            Capsule Elevator
                          </a>
                        </li>

                        <li>
                          <a href="/products/Goodselevator">Goods Elevator</a>
                        </li>

                        <li>
                          <a href="/products/villaelevators">Villa Elevators</a>
                        </li>

                        <li>
                          <a href="/products/escalator">Escalator</a>
                        </li>
                      </ul>
                    </li>

                    <li className="dropdown">
                      <a href="/homevariants">Variants</a>
                      <ul>
                        <li>
                          <a href="/unoclassics">UNO CLASSIC</a>
                        </li>
                        <li>
                          <a href="/Unomax">UNO MAX</a>
                        </li>
                        <li>
                          <a href="/uno-prime">UNO PRIME</a>
                        </li>
                        <li>
                          <a href="/uno-gold">UNO GOLD</a>
                        </li>
                        <li>
                          <a href="/uno-luxury">UNO LUXURY</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="/galleryone">Gallery</a>
                    </li>

                    <li>
                      <a href="/Blog">Blog</a>
                    </li>

                    <li>
                      <a href="/footer">Contact</a>
                    </li>

                    <li>
                      <a href="/Carrers">Careers</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
}
