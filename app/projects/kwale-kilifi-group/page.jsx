import Header2 from "@/components/headers/Header2";
import Newsletter from "@/components/blog/Newsletter";
import Footer1 from "@/components/footers/Footer1";
import BlogDetails1 from "@/components/blog/BlogDetails1";
import { allBlogs } from "@/data/blogs";
import Header4 from "@/components/headers/Header4";
import Footer4 from "@/components/footers/Footer4";
import Technology from "@/components/blog/Technology";
import Samburu from "@/components/blog/Samburu";
import Brands from "@/components/homes/home-3/Brands";
import Facts from "@/components/homes/home-4/Facts";
import AboutValues from "@/components/innerpages/AboutValues";
import Kwale from "@/components/blog/Kwale";
export const metadata = {
  title:
    "WASHLAB Consult | Kwale Kilifi Group - Climate-Smart WASH Solutions",
  description:
    "Discover how WASHLAB Consult transforms water, sanitation, and hygiene across Africa through innovative, climate-resilient, community-led solutions. Empowering 30+ communities and 50,000+ lives.",
    Keywords:
"Climate-resilient WASH solutions, Innovative water and sanitation consultancy, African WASH experts, Smart water infrastructure, Community-based WASH projects"
};
export default async function BlogDetailsPage1(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap mt-5">
          <Kwale blogItem={blogItem} />
          <Facts/>
          <Brands/>
          <AboutValues/>
          <Newsletter />
        </div>
        <Footer4 />
      </div>
    </>
  );
}
