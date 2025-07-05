import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import About from "@/components/innerpages/About";
import Brands from "@/components/common/Brands2";
import About2 from "@/components/innerpages/About2";
import AboutValues from "@/components/innerpages/AboutValues";
import Feedback from "@/components/homes/home-2/Feedback";
import Timeline from "@/components/homes/home-1/Timeline";
import Team from "@/components/homes/home-1/Team";
import Cta from "@/components/innerpages/Cta";
import Header4 from "@/components/headers/Header4";
import Footer4 from "@/components/footers/Footer4";
import Facts from "@/components/homes/home-5/Facts";
import Features from "@/components/homes/home-8/Features";
export const metadata = {
  title:
    "About WASHLAB Consult | Empowering WASH Innovation in Africa.",
  description:
    "Learn the story of WASHLAB Consult—born from passion, grown through partnerships. Discover our mission, values, and vision for transforming WASH systems with technology and inclusion.",
    Keywords:
"WASHLAB company background, Water and sanitation innovation, Community WASH impact, Inclusive water governance, African WASH leadership"
};
export default function AboutPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap">
          <About />
          <Features/>
          {/* <Facts/> */}
          <AboutValues />
          <About2/>
          <Brands />
          {/* <Team /> */}
          {/* <Feedback /> */}
          <Timeline />
          
          {/* <Cta /> */}
        </div>
        <Footer4 />
      </div>
    </>
  );
}
