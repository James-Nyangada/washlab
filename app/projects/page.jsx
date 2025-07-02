import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Newsletter from "@/components/blog/Newsletter";
import BreadCumb from "@/components/blog/BreadCumb";
import Blogs2 from "@/components/blog/Blogs2";
import Header4 from "@/components/headers/Header4";
import Footer4 from "@/components/footers/Footer4";
export const metadata = {
  title:
    "Our Projects | Sustainable WASH Innovations by WASHLAB Consult",
  description:
    "Explore WASHLAB Consult’s groundbreaking projects—like the Samburu Solar Water Network—that bring smart, sustainable water systems to underserved African communities.",
    Keywords:
"Climate-smart water projects, Samburu solar water system, IoT water monitoring Africa, Sustainable sanitation projects, African WASH success stories"
};
export default function BlogClassicPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap">
          {/* <BreadCumb /> */}
          <Blogs2 />
          <Newsletter />
        </div>
        <Footer4 />
      </div>
    </>
  );
}
