import React from "react";
// import Preloader1 from "../../components/Preloader1";
import MainHeader from "../../components/MainHeader";
import MobileMenu1 from "../../components/MobileMenu1";
import PageTitle from "../../components/PageTitle";
import ProjectPageSection from "../../components/ProjectPageSection";
import CtaSection from "../../components/CtaSection";

const page = () => {
  return (
    <div>
      {/* <Preloader1 /> */}
      <MainHeader />
      <MobileMenu1 />
      <PageTitle />
      <ProjectPageSection />

      <CtaSection />
    </div>
  );
};

export default page;
