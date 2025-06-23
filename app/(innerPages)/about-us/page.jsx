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
export const metadata = {
  title:
    "About Us || washlabs - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "washlabs - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function AboutPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap">
          <About />
          <Facts/>
          <AboutValues />
          <About2/>
          <Team />
          {/* <Feedback /> */}
          <Timeline />
          
          {/* <Cta /> */}
        </div>
        <Footer4 />
      </div>
    </>
  );
}
