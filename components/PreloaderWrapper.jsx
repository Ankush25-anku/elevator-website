"use client";

import { useState } from "react";
import Preloader from "./Preloader";
import EnquiryPopup from "./EnquiryPopup";

export default function PreloaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Preloader */}
      {loading && <Preloader setLoading={setLoading} />}

      {/* Main Content */}
      {!loading && (
        <>
          {children}
          <EnquiryPopup />
        </>
      )}
    </>
  );
}
