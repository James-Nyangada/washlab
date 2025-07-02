import Header2 from "@/components/headers/Header2";
import Newsletter from "@/components/blog/Newsletter";
import Footer1 from "@/components/footers/Footer1";
import BlogDetails1 from "@/components/blog/BlogDetails1";
import { allBlogs } from "@/data/blogs";
import Header4 from "@/components/headers/Header4";
import Footer4 from "@/components/footers/Footer4";
import Technology from "@/components/blog/Technology";
export const metadata = {
  title:
    "Blog Details || washlab - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "washlab - Full-featured, professional-looking software, saas and startup nextjs template.",
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
          <Technology blogItem={blogItem} />
          <Newsletter />
        </div>
        <Footer4 />
      </div>
    </>
  );
}
