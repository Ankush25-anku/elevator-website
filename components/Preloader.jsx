"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="unosafe-preloader">
      <div className="unosafe-loader">

        {/* Rotating Circular Text */}
        <svg className="unosafe-circle" viewBox="0 0 200 200">
          <defs>
            <path
              id="circlePath"
              d="
                M 100, 100
                m -70, 0
                a 70,70 0 1,1 140,0
                a 70,70 0 1,1 -140,0
              "
            />
          </defs>

          <text fill="#ffffff" fontSize="12" letterSpacing="2">
            <textPath href="#circlePath" startOffset="0%">
              UNOSAFE ELEVATOR PVT LTD • UNOSAFE ELEVATOR PVT LTD •
            </textPath>
          </text>
        </svg>

        {/* Center Logo (not rotating) */}
        <div className="unosafe-logo">
          <img src="/assets/images/icons/logo-2.png" alt="UNOSAFE Logo" />
        </div>

      </div>
    </div>
  );
}