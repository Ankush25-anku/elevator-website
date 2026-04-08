import React from "react";
import About from "../../components/About";
import Readmoreabou from "../../components/Readmoreabou";
import FounderCard from "../../components/Founder";
import VicePresidentCard from "../../components/VicePresidentCard";
import Gm from "../../components/Gm";
import HomeVariants from "../../components/HomeVariants";
import Generalmanager from "../../components/Generalmanager";

import ChooseUs from "../../components/ChooseUs";
const page = () => {
  return (
    <div>
      <Readmoreabou />
      <About />
      <FounderCard />

      <VicePresidentCard />
      <Gm />
      <Generalmanager />

      <HomeVariants />
      <ChooseUs />
    </div>
  );
};

export default page;
