import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Newsletter from "@/components/blog/Newsletter";
import BreadCumb from "@/components/blog/BreadCumb";
import Blogs6 from "@/components/blog/Blogs6";
export const metadata = {
  title:
    "WASHLAB Consult | Africa's #1 Climate-Smart WASH Solutions Provider",
  description:
    "Discover how WASHLAB Consult transforms water, sanitation, and hygiene across Africa through innovative, climate-resilient, community-led solutions. Empowering 30+ communities and 50,000+ lives.",
    Keywords:
"Climate-resilient WASH solutions, Innovative water and sanitation consultancy, African WASH experts, Smart water infrastructure, Community-based WASH projects"
};
export default function Blog3ColsPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <BreadCumb />
          <Blogs6 />
          <Newsletter />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
