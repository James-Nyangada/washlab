"use client";
import Link from "next/link";
import RelatedBlogs from "./RelatedBlogs";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function Community({ blogItem }) {
  return (
    <>
      
      <article className="post type-post single-post py-4 lg:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="post-header">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-8 text-center">
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h2 lg:h1 xl:display-6">
                 Empowering People and Partnerships for Lasting Impact.
                </h1>
                <p> At WASHLAB, we hold a core conviction: technology and infrastructure can only succeed when they are embraced and owned by the community. A solution is only truly sustainable if it is socially sustainable. Our approach is therefore deeply rooted in partnership, co-creation, and empowerment, ensuring that every solution is designed with, not for, the community it serves. This embeds sustainability from the ground up and transforms projects into lasting community assets.</p>
              </div>
              <figure className="featured-image m-0">
                <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden">
                  <Image
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt="Maximizing your reach with marketing strategies"
                    src="/assets/images/template/hero-about-03.webp"
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
                  <li className="font-bold">A Rigorous Participatory Process:</li><span>We employ a structured, six-phase participatory methodology that guides our engagement from start to finish. As detailed in our work with partners like Plan International, this process moves systematically from collaborative scoping and situation analysis to the co-creation of actionable plans. We utilize a suite of Participatory Vulnerability Assessment PVA tools to ensure community voices, knowledge, and priorities are the driving force behind the design of all interventions.</span>
                  <li className="font-bold">Gender-Responsive and Socially Inclusive (GESI) Planning</li><span>We recognize that climate and water challenges have differentiated impacts. GESI is not an add-on; it is central to our methodology. We integrate dedicated GESI specialists into our teams, utilize gender-sensitive data collection tools, and create safe, inclusive spaces for women, youth, and marginalized groups to articulate their unique needs and capacities. This ensures that the solutions we co-create are equitable and actively promote women's agency and leadership in WASH governance and climate adaptation.</span>
                  <li className="font-bold">Capacity Building for Local Institutions:</li><span>Our goal is to build lasting local capacity. We design and deliver targeted training for community water committees, local technicians, and government partners. This empowerment covers technical operations and maintenance, financial management, and inclusive governance, strengthening the local institutions required to manage WASH infrastructure effectively and equitably long after our direct involvement ends</span>
                  <li className="font-bold">Policy Advisory and Advocacy: </li><span>We bridge the gap between grassroots realities and policy frameworks. By synthesizing findings from our community-level assessments, we develop evidence-based policy briefs and provide strategic advice to county and national governments. This work helps to create a more enabling policy environment for inclusive, community-led WASH governance and climate action.</span>
                  
                  

                </ul>
                
                
                
                
              </div>
            </Gallery>
            
            
    
            
          </div>
        </div>
      </article>
    </>
  );
}
