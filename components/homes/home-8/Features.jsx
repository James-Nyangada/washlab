import { features8 } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden mb-5"
    >
      <div className="section-outer panel pt-6 md:pt-8 xl:pt-10">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fw-bold py-narrow px-2 border rounded-pill text-primary dark:text-secondary">
                Guiding purpose
              </span>
              <h2 className="h3 lg:h2 m-0">
                Mission & Vision
                
              </h2>
              
            </div>
            <div
              className="row child-cols-12 md:child-cols-6 lg:child-cols-4 col-match g-2 lg:g-4"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              
              <div className="md:col-6">
                <div className="panel overflow-hidden bg-primary-300 text-gray-900 rounded-2 lg:rounded-3">
                  <div className="panel vstack items-center text-center gap-2 p-3 lg:p-4 xl:p-6">
                    <h4 className="h4 m-0 text-inherit">
                      Mission
                    </h4>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                      Maximize your productivity by connecting our SaaS solution
                      to the other business apps you rely on, creating a
                      frictionless workflow.
                    </p>
                  </div>
                  <div className="panel px-3 lg:px-4 xl:px-6 mb-2 lg:mb-5">
                    <Image
                      alt="builder-tools"
                      src="/assets/images/template/hero-05.webp"
                      width={800}
                      height={800}
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-6">
                <div className="panel overflow-hidden bg-primary-300 text-gray-900 rounded-2 lg:rounded-3">
                  <div className="panel vstack items-center text-center gap-2 p-3 lg:p-4 xl:p-6">
                    <h4 className="h4 m-0 text-inherit">
                      Vision
                    </h4>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                      To become a globally recognised, African-born leader in transforming WASH systems through innovation, technology, and community empowerment.
                    </p>
                  </div>
                  <div className="panel px-3 lg:px-4 xl:px-6 mb-2 lg:mb-5">
                    <Image
                      alt="builder-tools"
                      src="/assets/images/template/hero-about-02.webp"
                      width={800}
                      height={800}
                    />
                  </div>
                </div>
              </div>
         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
