import { benefitsData } from "@/data/career";
import React from "react";

export default function CareerBenefits() {
  return (
    <div
      id="career_benefits"
      className="career-benefits section panel pb-6 xl:pb-9 overflow-hidden"
      data-anime="onview: -100; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
    >
      <div className="section-outer panel">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack max-w-850px mx-auto"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <p className="fs-5 xl:fs-3 text-dark dark:text-white text-opacity-70">
                We believe in our people. We foster a culture of excellence, continuous learning, and collaboration. We work hard to solve complex problems, and we believe in the importance of celebrating our wins, big and small. We are proud to offer a supportive environment that values a healthy work-life balance and provides perks that help our team thrive both at work and at home. 
              </p>
              <div className="panel mt-4 xl:mt-6">
                <div className="row child-cols-6 lg:child-cols-4 col-match g-3">
                  {benefitsData.map((benefit, index) => (
                    <div key={index}>
                      <div className="panel hstack gap-1">
                        <i className="icon icon-2 unicon-checkmark text-primary" />
                        <span className="fs-6 sm:fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                          {benefit}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
