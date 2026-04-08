"use client";
import { useEffect } from "react";

export default function Preloader({ setLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // 🔥 THIS CONTROLS EVERYTHING
    }, 1500);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="unosafe-preloader">
      <div className="unosafe-loader">
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

        <div className="unosafe-logo">
          <img src="/assets/images/icons/logo-2.png" alt="UNOSAFE Logo" />
        </div>
      </div>
    </div>
  );
}
