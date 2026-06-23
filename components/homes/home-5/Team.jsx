import { teamMembers3 } from "@/data/team";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Team() {
  return (
    <>
      <style>{`
        .pt-custom-teams {
          padding-top: 4rem;
        }
        @media (min-width: 768px) {
          .pt-custom-teams {
            padding-top: 6rem;
          }
        }
        @media (min-width: 1200px) {
          .pt-custom-teams {
            padding-top: 8rem;
          }
        }
      `}</style>
      <div
        id="team_members"
        className="team-members section panel overflow-hidden"
      >
        <div className="section-outer panel pt-custom-teams pb-4 md:pb-6 xl:pb-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack items-center gap-2 panel max-w-650px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <span className="fw-bold text-primary dark:text-secondary">
                  Our team
                </span>
                <h2 className="title h3 lg:h2 xl:h1 m-0 dark:text-white">
                  People you’ll be working with
                </h2>
                <p className="fs-6 xl:fs-5 dark:text-white text-opacity-70">
                  We’re a 100% remote team spread all across the world.
                </p>
              </div>
              <div className="content panel">
                <div
                  className={`row ${
                    teamMembers3.length === 1
                      ? 'justify-content-center'
                      : teamMembers3.length === 2
                      ? 'justify-content-center child-cols-12 sm:child-cols-6 lg:child-cols-6'
                      : 'child-cols-12 sm:child-cols-6 lg:child-cols-4'
                  } col-match gx-2 gy-4 xl:gx-4 xl:gy-6`}
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
                >
                  {teamMembers3.map((member, index) => (
                    <div key={index} className={teamMembers3.length === 1 ? 'col-12 col-sm-11 col-md-10 col-lg-8 col-xl-6' : ''}>
                      <Link href={`/team/${member.slug || '#'}`} className="panel vstack gap-2 xl:gap-3 group text-decoration-none">
                        <div className="overflow-hidden rounded-1 sm:rounded-1-5">
                          <Image
                            className="w-100 transition-transform duration-500 group-hover:scale-105"
                            style={{ objectFit: 'cover', aspectRatio: '560 / 592' }}
                            src={member.imgSrc}
                            width={560}
                            height={592}
                            alt={member.altText || member.name}
                          />
                        </div>
                        <div className="panel vstack gap-narrow" style={{ alignItems: 'center', textAlign: 'center' }}>
                          <h6 className="h6 xl:h5 m-0 dark:text-white group-hover:text-primary transition-colors">
                            {member.name}
                          </h6>
                          <span className="fs-6 xl:fs-5 opacity-70 dark:text-opacity-70 dark:text-white">
                            {member.title}
                          </span>
                          <div className="mt-1">
                            {member.website ? (
                              <div className="text-gray-900 dark:text-white opacity-70 hover:opacity-100 transition-opacity">
                                <i className="icon unicon-globe icon-2"></i>
                                <span className="sr-only" style={{ display: 'none' }}>Website</span>
                              </div>
                            ) : member.linkedin ? (
                              <div className="text-gray-900 dark:text-white opacity-70 hover:opacity-100 transition-opacity">
                                <i className="icon unicon-logo-linkedin icon-2"></i>
                                <span className="sr-only" style={{ display: 'none' }}>LinkedIn</span>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div
                className="vstack items-center gap-2 lg:gap-3 max-w-450px mx-auto text-center lg:mt-4"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <h2 className="h4 sm:h3 m-0">We’re hiring</h2>
                <p className="fs-6 sm:fs-5 lg:fs-4 text-dark dark:text-white text-opacity-70">
                  We are looking for people that share our vision. Are you
                  adaptable, driven, and friendly?&nbsp;
                </p>
                <Link
                  className="btn btn-md rounded-default bg-white dark:bg-gray-700 dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40 shadow-xs mt-1"
                  href={`/page-career`}
                >
                  <span>Submit application</span>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
