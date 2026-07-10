"use client";

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div className={`mobile-menu ${menuOpen ? "mobile-menu-visible" : ""}`}>
      <div className="menu-backdrop" onClick={() => setMenuOpen(false)}></div>

      <div className="close-btn" onClick={() => setMenuOpen(false)}>
        <i className="fas fa-times"></i>
      </div>

      <nav className="menu-box">
        <div className="nav-logo">
          <a href="/">
            <img src="/assets/images/logo.png" alt="" />
          </a>
        </div>

        <div className="menu-outer">
          <ul className="navigation clearfix">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/projects">Products</a>
            </li>
            <li>
              <a href="/homevariants">Variants</a>
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
        </div>
      </nav>
    </div>
  );
}
