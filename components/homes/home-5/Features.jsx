import { featureItems2 } from "@/data/features";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Features() {
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 sm:max-w-600px lg:max-w-700px xl:max-w-800px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fw-bold py-narrow px-2 border rounded-pill text-primary dark:text-secondary">
                About us
              </span>
              <h2 className="h3 sm:h2 lg:h1 xl:display-6 m-0">
                Who we are
              </h2>
              <p className="fs-7 sm:fs-6 lg:fs-5 xl:fs-4 text-opacity-70">
                WASHLAB Consult is an African-born consultancy transforming water and sanitation services through innovation and community partnership. We deliver climate-resilient WASH solutions to underserved communities by blending expert insight, advanced technology, and on-the-ground engagement. Our approach is innovative, impactful, and community-focused, ensuring sustainable outcomes in every project
              </p>

              <Link href={"/about-us"} className="btn btn-md btn-primary rounded-default text-white">Learn More</Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
