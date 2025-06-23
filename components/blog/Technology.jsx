"use client";
import Link from "next/link";
import RelatedBlogs from "./RelatedBlogs";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function Technology({ blogItem }) {
  return (
    <>
      
      <article className="post type-post single-post py-4 lg:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="post-header">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-8 text-center">
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h2 lg:h1 xl:display-6">
                 Data-Driven Innovation for Smarter WASH Management.
                </h1>
                <p>Use the detailed descriptions from the website content document, focusing on IoT integration, data analytics, and digital M&E tools. Itemize key technology services in a bulleted list.</p>
              </div>
              <figure className="featured-image m-0">
                <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden">
                  <Image
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt="Maximizing your reach with marketing strategies"
                    src="/assets/images/template/hero-05.jpeg"
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
                  Our approach ensures every solution is community-owned. We engage, train,
                  and empower local institutions to manage WASH infrastructure effectively
                  and equitably, embedding sustainability from the ground up.
                </p>
                <h6 className="text-center h4 mt-3">Key Services:</h6>
                <ul className="justify-center list-unstyled mt-2 mb-4">
                  <li>Community engagement and co-creation</li>
                  <li>Training of water committees and technicians</li>
                  <li>Policy advisory on inclusive WASH governance</li>
                  <li>Social inclusion and behavior change campaigns</li>
                  <li>GIS mapping for WASH asset management</li>
                  

                </ul>
                
                
                
                
              </div>
            </Gallery>
            
            
    
            
          </div>
        </div>
      </article>
    </>
  );
}
