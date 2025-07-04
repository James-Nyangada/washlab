import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import CareerHero from "@/components/innerpages/CareerHero";
import CareerBenefits from "@/components/innerpages/CareerBenefits";
import CareerOpenings from "@/components/innerpages/CareerOpenings";
import Feedback from "@/components/homes/home-2/Feedback";
import Brands from "@/components/innerpages/Brands";
import Blogs from "@/components/homes/home-2/Blogs";
import Header4 from "@/components/headers/Header4";
import Footer4 from "@/components/footers/Footer4";
export const metadata = {
  title:
    "WASHLAB Consult | Careers - Africa's #1 Climate-Smart WASH Solutions Provider",
  description:
    "Discover how WASHLAB Consult transforms water, sanitation, and hygiene across Africa through innovative, climate-resilient, community-led solutions. Empowering 30+ communities and 50,000+ lives.",
    Keywords:
"Climate-resilient WASH solutions, Innovative water and sanitation consultancy, African WASH experts, Smart water infrastructure, Community-based WASH projects"
};
export default function CareerPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap">
          <CareerHero />
          <CareerBenefits />
          <CareerOpenings />
          
        </div>
        <Footer4 />
      </div>
    </>
  );
}
