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
    "WASHLAB Consult | Africa's #1 Climate-Smart WASH Solutions Provider",
  description:
    "Discover how WASHLAB Consult transforms water, sanitation, and hygiene across Africa through innovative, climate-resilient, community-led solutions. Empowering 30+ communities and 50,000+ lives.",
    Keywords:
"Climate-resilient WASH solutions, Innovative water and sanitation consultancy, African WASH experts, Smart water infrastructure, Community-based WASH projects"
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
          {/* <Testimonials /> */}
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
