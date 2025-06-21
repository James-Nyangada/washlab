import Brands from "@/components/common/Brands";
import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import Facts from "@/components/homes/home-4/Facts";
import Facts1 from "@/components/homes/home-1/Facts";
import Blog from "@/components/homes/home-5/Blog";
import Cta from "@/components/homes/home-5/Cta";
import Faq from "@/components/homes/home-5/Faq";
import Features from "@/components/homes/home-5/Features";
import Features3 from "@/components/homes/home-3/Features";
import Hero from "@/components/homes/home-5/Hero";
import Howworks from "@/components/homes/home-5/Howworks";
import Pricing from "@/components/homes/home-5/Pricing";
import Support from "@/components/homes/home-5/Support";
import Team from "@/components/homes/home-5/Team";
import Testimonials from "@/components/homes/home-5/Testimonials";
import Link from "next/link";
import React from "react";
export const metadata = {
  title:
    "Washlabs - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "washlabs - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function HomePage5() {
  return (
    <>
      <div className=" page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
        <Header4 />
        <div id="wrapper" className="wrap">
          <Hero />
          
          <Features />
          <Facts1/>
          <hr className="w-100 m-0 d-block lg:d-none" />
          <Facts/>
          <Features3 />
          
          {/* <Howworks /> */}
          {/* <Pricing /> */}
          <Testimonials />
          <Brands />
          {/* <Faq /> */}
          {/* <Support /> */}
          
          
          {/* <Team /> */}
          {/* <Blog /> */}
          
          <Cta />
        </div>
        <Footer4 />
      </div>
    </>
  );
}
