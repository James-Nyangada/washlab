"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TeamMemberDetail({ member }) {
  return (
    <article className="post type-post single-post py-4 lg:py-6 xl:py-9">
      <div className="container max-w-xl">
        <div className="post-header mt-8 lg:mt-9">
          <div className="panel vstack gap-4 md:gap-6 xl:gap-8 text-center pt-8">
            <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3">
              <h1 className="h4 sm:h2 lg:h1 xl:display-6 m-0">
                {member.name}
              </h1>
              <span className="fs-5 text-primary fw-bold text-uppercase tracking-wider">
                {member.title}
              </span>
            </div>
            
            <figure className="featured-image m-0 mx-auto w-100" style={{ maxWidth: '600px' }}>
              <div className="overflow-hidden rounded-2 xl:rounded-3 shadow-md">
                <Image
                  className="w-100"
                  style={{ objectFit: 'cover' }}
                  alt={member.altText || member.name}
                  src={member.imgSrc}
                  width={600}
                  height={600}
                  priority
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
      
      <div className="panel mt-4 lg:mt-6 xl:mt-9">
        <div className="container max-w-lg">
          <div className="post-content panel fs-5 md:fs-4 lh-lg text-dark dark:text-white dark:text-opacity-80">
            {/* Biography */}
            <div 
              className="team-member-bio mb-6"
              dangerouslySetInnerHTML={{ __html: member.bio }} 
            />

            {/* Key Expertise */}
            {member.keyExpertise && member.keyExpertise.length > 0 && (
              <div className="panel p-4 md:p-5 mt-6 bg-gray-25 dark:bg-gray-800 rounded-2">
                <h4 className="h5 mb-3 text-primary">Key Expertise</h4>
                <ul className="fs-6 list-unstyled vstack gap-2 m-0">
                  {member.keyExpertise.map((exp, i) => (
                    <li key={i} className="hstack items-start gap-2">
                      <i className="icon unicon-checkmark text-primary mt-1"></i>
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="post-footer panel vstack sm:hstack gap-3 justify-between justifybetween border-top py-4 mt-6 xl:py-8 xl:mt-8">
            <Link href="/#team_members" className="btn btn-md btn-outline-primary rounded-default">
              <i className="unicon-arrow-left icon-1 me-1"></i>
              Back to Team
            </Link>

            <ul className="post-share-icons nav-x gap-narrow">
              {member.website && (
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-40px h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle transition-all"
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Website"
                  >
                    <i className="unicon-globe icon-1" />
                  </a>
                </li>
              )}
              {member.linkedin && (
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-40px h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle transition-all"
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                  >
                    <i className="unicon-logo-linkedin icon-1" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
