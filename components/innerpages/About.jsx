import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        <div
          className="position-absolute  rotate-45"
          style={{ top: "20%", left: "18%" }}
        >
          <Image
            className="w-24px text-gray-900 dark:text-white"
            width={193}
            height={216}
            alt="star-1"
            data-uc-svg=""
            src="/assets/images/template/star-1.svg"
          />
        </div>
        <div
          className="position-absolute  rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
          <Image
            className="w-32px text-gray-900 dark:text-white"
            width={69}
            height={95}
            alt="star-2"
            data-uc-svg=""
            src="/assets/images/template/star-2.svg"
          />
        </div>
      </div>
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="vstack items-center gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-850px mx-auto text-center">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                An African-Born Vision for a Water-Secure Future
              </h1>
              <span className="fw-bold py-narrow px-2 border rounded-pill text-primary dark:text-secondary">
                The Why
              </span>
              <p className="fs-6 md:fs-5 text-dark dark:text-white text-opacity-70">
                WASHLAB Consult was born from an urgent need to bridge the critical gaps in water, sanitation, and hygiene services across Africa. Our founders—engineers, data scientists, and community specialists—saw communities grappling with unreliable water supplies, the growing threats of climate change, and siloed development efforts that lacked local ownership. In response, WASHLAB was established not just as a consultancy, but as a living laboratory for innovation—a space where science, technology, and community insight converge to solve the continent's most pressing WASH challenges. 
              </p>
              <span className="fw-bold py-narrow px-2 border rounded-pill text-primary dark:text-secondary">
                The How
              </span>
              <p className="fs-6 md:fs-5 text-dark dark:text-white text-opacity-70">
                From this foundation, we have grown into a trusted partner for governments and international organizations seeking to deliver sustainable, high-impact WASH programmes. Every project we undertake is guided by a simple, powerful idea: to turn water challenges into opportunities for community transformation, public health, and climate resilience.
              </p>

            </div>
            <div className="panel row child-cols-12 col-match g-1 sm:g-2">
              <div className="col-4">
                <figure className="featured-image m-0 rounded ratio ratio-2x3 sm:rounded-2 uc-transition-toggle overflow-hidden">
                  <Image
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt="About image"
                    src="/assets/images/template/hero-about-01.jpeg"
                    width="1000"
                    height="1500"
                  />
                </figure>
                
              </div>
              <div className="col-8">
                <div className="h-100">
                  <figure className="panel h-100 m-0 rounded sm:rounded-2 overflow-hidden">
                    <canvas className="h-100 w-100" />
                    <Image
                      className="media-cover image"
                      alt="About image"
                      src="/assets/images/template/hero-about-02.jpeg"
                      width="1000"
                      height="667"
                    />
                  </figure>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
