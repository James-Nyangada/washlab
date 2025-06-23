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
                <p>Use the detailed descriptions from the website content document, covering the full lifecycle of WASH systems, climate-resilient designs, and sustainable management models. List key services in bullet points</p>
              </div>
              <figure className="featured-image m-0">
                <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden">
                  <Image
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt="Maximizing your reach with marketing strategies"
                    src="/assets/images/blog/post-full.jpg"
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
                  <li>WASH system design and planning</li>
                  <li>Technical consultancy and feasibility studies</li>
                  <li>Water quality monitoring</li>
                  <li>Climate adaptation and resilience engineering</li>
                  

                </ul>
                
                
                
                
              </div>
            </Gallery>
            
            
    
            
          </div>
        </div>
      </article>
    </>
  );
}
