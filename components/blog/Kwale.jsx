"use client";
import Link from "next/link";
import RelatedBlogs from "./RelatedBlogs";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function Kwale({ blogItem }) {
  return (
    <>
      
      <article className="post type-post single-post py-4 lg:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="post-header">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-8 text-center">
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h2 lg:h1 xl:display-6">
                 From Vulnerability to Agency: Co-Creating Climate Resilience in Coastal Kenya
                </h1>
                <div className="gap-1 d-flex justify-content-center">
                  <span className="bg-primary text-white py-narrow px-1 rounded">Kwale and Kilifi</span>
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
                <h4>Project Overview:</h4>
                <ul className="justify-center list-unstyled mt-2 mb-4">
                  <li className="font-bold">Location:</li><span>Kwale and Kilifi Counties, Kenya</span>
                  <li className="font-bold">Partners:</li><span>VPlan International Kenya</span>
                  <li className="font-bold">Core Challenge:</li><span>Acute climate vulnerability (sea-level rise, floods, droughts) compounded by deep-rooted gender and social inequitiesAcute climate vulnerability (sea-level rise, floods, droughts) compounded by deep-rooted gender and social inequities</span>
                  <li className="font-bold">WASHLAB Solution:</li><span> A deeply participatory, gender-responsive process to co-create community-owned climate adaptation plans.A deeply participatory, gender-responsive process to co-create community-owned climate adaptation plans.</span>
                  <li className="font-bold">Impact:</li><span>Development of nine ward-level Gender-Responsive Adaptation and Preparedness Plans (GRAPPs) and two county-level policy briefs, translating grassroots knowledge into systemic change.</span>
                  
                  

                </ul>
                <h4>Overview</h4>
                <ul className="justify-center list-unstyled mt-2 mb-4">
                  <li className="font-bold">A Compounded Crisis:</li><span> Climate and Inequality on the Coast The coastal counties of Kwale and Kilifi are on the front lines of the climate crisis in Kenya. Communities reliant on fragile marine and coastal ecosystems face escalating threats from rising sea levels, recurrent floods and droughts, and increased cyclonic activity. These environmental stressors are not experienced uniformly; they are significantly compounded by pervasive social inequities. Climate change acts as a threat multiplier, deepening economic inequalities and disproportionately affecting women and marginalized groups, who often face pre-existing barriers in accessing resources, services, and decision-making platforms.</span>
                  <li className="font-bold">Our Process:</li><span>A Commitment to Participatory, Gender-Responsive ActionIn partnership with Plan International's COSME project, WASHLAB was tasked with facilitating a process to empower these communities to build their own resilience. Our approach was founded on the principle that the most effective and sustainable solutions are co-created. We implemented a rigorous six-phase methodology:
	•	Collaborative Scoping: We worked with Plan International and local stakeholders to identify the most vulnerable communities across nine wards.
	•	Empowering a Core Team: We established and trained a diverse participatory analysis team, ensuring strong representation of women and minority groups to lead the process.
	•	Rigorous Vulnerability Analysis: Using a suite of Participatory Vulnerability Assessment (PVA) tools like seasonal calendars and community mapping, we facilitated a community-led analysis of climate threats and vulnerabilities.
	•	Identifying Root Causes: We moved beyond symptoms to help communities analyze the systemic drivers of their vulnerability, including social, economic, and governance factors.
	•	Assessing Local Capacities: We documented and validated existing community strengths, including traditional ecological knowledge and local adaptation strategies, as a foundation to build upon.
	•	Co-Creating Action Plans: Through highly participatory ward-level workshops, we facilitated the co-creation of Gender-Responsive Adaptation and Preparedness Plans (GRAPPs), prioritizing locally relevant and feasible interventions.
A non-negotiable element of this process was our focus on Gender Equality and Social Inclusion (GESI). Led by a dedicated GESI specialist, we used gender-sensitive tools and held women-only focus groups to ensure that the specific vulnerabilities, capacities, and priorities of women were central to the entire analysis and planning process. </span>
                  <li className="font-bold">The impact: </li><span>TFrom Grassroots Plans to Systemic Influence The primary outcome of this intensive collaboration was the development of nine distinct, community-owned, ward-level GRAPPs. These plans are not top-down documents; they are actionable roadmaps for resilience, built on local knowledge and priorities.Furthermore, by synthesizing the findings from the grassroots level, we developed two comprehensive county-level policy briefs for Kwale and Kilifi. This critical step translates local insights into evidence-based recommendations for county-level planning, policy formulation, and resource allocation. The project also produced a concept for an integrated early warning system and a mapping of climate finance mechanisms to link the community plans with viable funding pathways. </span>
                  
                  
                  

                </ul>
                
                
                
                
                
              </div>
            </Gallery>
            
            
    
            
          </div>
        </div>
      </article>
    </>
  );
}
