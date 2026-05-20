"use client";
import { useEffect } from "react";

export default function Preloader({ setLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="unosafe-preloader">
      <div className="unosafe-loader">
        {/* Rotating Ring */}
        <div className="loader-ring"></div>

        {/* Logo */}
        <div className="unosafe-logo">
          <img
            src="/assets/images/logo.png"
            alt="UNOSAFE Logo"
            className="main-logo"
          />
        </div>
      </div>
    </div>
  );
}
