import React from "react";
import Footer from "../../components/Footer";

import ContactInfoCards from "../../components/ContactInfoCards";
import Contacthome from "../../components/Contacthome1";
import ContactEnquiryForm from "../../components/ContactEnquiryForm";
import HeadOfficeMap from "../../components/HeadOfficeMap";
import OurBranches from "../../components/OurBranches";

const page = () => {
  return (
    <div>
      <Contacthome />
      <ContactInfoCards />
      <ContactEnquiryForm />
      <HeadOfficeMap />
      <OurBranches />
    </div>
  );
};

export default page;
