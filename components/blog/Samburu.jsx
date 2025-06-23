"use client";
import Link from "next/link";
import RelatedBlogs from "./RelatedBlogs";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function Samburu({ blogItem }) {
  return (
    <>
      
      <article className="post type-post single-post py-4 lg:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="post-header">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-8 text-center">
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h2 lg:h1 xl:display-6">
                 Samburu Solar Water Network
                </h1>
                <div className="gap-1 d-flex justify-content-center">
                  <span className="bg-primary text-white py-narrow px-1 rounded">Samburu</span>
                  <span className="bg-primary text-white py-narrow px-1 rounded">2024</span>
                  <span className="bg-primary text-white py-narrow px-1 rounded">Water and Technology</span>
                </div>
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
                  In Samburu County, Kenya, WASHLAB deployed a solar-powered water
                  supply system with remote IoT monitoring. Serving over 3,000 people, this
                  climate-smart solution now ensures uninterrupted safe water access—even
                  in the dry season. Equally important, community members were trained to
                  maintain the system, guaranteeing local ownership and long-term impact.
                </p>
                
                
                
                
                
              </div>
            </Gallery>
            
            
    
            
          </div>
        </div>
      </article>
    </>
  );
}
