"use client";
import Link from "next/link";
import RelatedBlogs from "./RelatedBlogs";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function BlogDetails1({ blogItem }) {
  return (
    <>
      
      <article className="post type-post single-post py-4 lg:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="post-header">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-8 text-center">
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h2 lg:h1 xl:display-6">
                 Sustainable Water and Sanitation Systems, Built for Resilience.
                </h1>
                <p>Our engineering philosophy goes beyond conventional design. We create water and sanitation infrastructure that is not only efficient and sustainable but also explicitly engineered to withstand the increasing pressures of climate change. From initial geological assessments to the final commissioning of large-scale systems, our approach is defined by technical rigor, contextual adaptation, and a focus on long-term functionality.</p>
              </div>
              <figure className="featured-image m-0">
                <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden">
                  <Image
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt="Maximizing your reach with marketing strategies"
                    src="/assets/images/template/hero-about-01.jpeg"
                    width="1280"
                    height="853"
                  />
                </figure>
              </figure>
            </div>
          </div>
        </div>
        <div className="panel mt-4 lg:mt-6 xl:mt-9">
          <div className="container max-w-lg">
            <Gallery>
              <div
                className="post-content panel fs-6 md:fs-5"
                data-uc-lightbox="animation: scale"
              >
                <p>
                  We design, implement, and optimize sustainable water and sanitation
                  systems, including boreholes, pipelines, treatment units, and sanitation
                  infrastructure. Our engineering designs are built to withstand climate shocks
                  and tailored to the needs of each community.
                </p>
                <h6 className="text-center h4 mt-3">Key Services:</h6>
                <ul className="justify-center list-unstyled mt-2 mb-4">
                  <li className="font-bold">Feasibility, Siting, and Resource Mapping:</li><span>Every successful project begins with a deep understanding of the local context. We conduct comprehensive technical feasibility studies and hydrogeological surveys to identify and characterize viable water resources. Our expertise in geophysical investigations, as demonstrated in projects like the AIC Tangu Borehole assessment, allows us to delineate fractured and weathered rock zones, map aquifer potential, and select optimal drilling sites to maximize yield and sustainability.</span>
                  <li className="font-bold">Climate-Resilient Infrastructure Design:</li><span>We specialize in designing WASH systems that are resilient to climate shocks. Whether it's engineering borehole protection works to withstand major flood events, as proposed for the Baricho Well-field, or designing solar-powered networks that ensure water access during drought, our designs incorporate climate adaptation from the outset. This includes boreholes, pipelines, water pans, treatment units, and sanitation infrastructure tailored to specific environmental risks.</span>
                  <li className="font-bold">Implementation, Supervision, and Quality Assurance:</li><span>WASHLAB provides expert oversight throughout the construction and implementation phase. We supervise civil works, manage contracts, and enforce strict quality assurance protocols to ensure that all infrastructure is built to the highest engineering standards and aligns with project specifications and donor requirements.</span>
                  <li className="font-bold">Water Quality and Treatment: </li><span>nsuring water is not just available but also safe is paramount. We provide comprehensive water quality monitoring services and design appropriate treatment solutions, from automatic chlorination systems integrated into boreholes to larger-scale treatment units, to guarantee that communities receive water that meets WHO and national standards</span>
                  

                </ul>
                
                
                
                
              </div>
            </Gallery>
            
            
    
            
          </div>
        </div>
      </article>
    </>
  );
}
