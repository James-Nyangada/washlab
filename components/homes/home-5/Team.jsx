import { teamMembers3 } from "@/data/team";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Team() {
  return (
    <>
      <style>{`
        .custom-team-overlay-wrapper {
          position: relative;
          overflow: hidden;
          width: 100%;
          border-radius: 0.5rem; /* similar to rounded-1 */
        }
        @media (min-width: 576px) {
          .custom-team-overlay-wrapper {
            border-radius: 0.75rem; /* similar to rounded-1-5 */
          }
        }
        .custom-team-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.95); /* Deep dark blue overlay */
          color: #fff;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          overflow-y: auto;
          z-index: 10;
        }
        .custom-team-overlay-wrapper:hover .custom-team-overlay {
          opacity: 1;
        }
        .custom-team-overlay::-webkit-scrollbar {
            width: 4px;
        }
        .custom-team-overlay::-webkit-scrollbar-thumb {
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 4px;
        }
        .custom-team-bio {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 15px;
          color: rgba(255, 255, 255, 0.9);
        }
        .custom-team-expertise-title {
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 8px;
          color: #ffffff;
        }
        .custom-team-expertise-list {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
          padding-left: 1rem;
          margin-bottom: 15px;
        }
        .custom-team-expertise-list li {
          margin-bottom: 4px;
          list-style-type: disc;
        }
        .custom-team-linkedin {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          color: #fff;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .custom-team-linkedin:hover {
          opacity: 0.7;
        }
        .custom-team-linkedin i {
          font-size: 24px;
        }
        .pt-custom-teams {
          padding-top: 4rem;
        }
        @media (min-width: 768px) {
          .pt-custom-teams {
            padding-top: 6rem;
          }
          .custom-team-overlay {
            padding: 2rem;
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
                  className={`row ${teamMembers3.length === 1 ? 'justify-content-center' : 'child-cols-12 sm:child-cols-6 lg:child-cols-4'} col-match gx-2 gy-4 xl:gx-4 xl:gy-6`}
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
                >
                  {teamMembers3.map((member, index) => (
                    <div key={index} className={teamMembers3.length === 1 ? 'col-12 col-sm-11 col-md-10 col-lg-8 col-xl-6' : ''}>
                      <div className="panel vstack gap-2 xl:gap-3 group">
                        <div className="custom-team-overlay-wrapper">
                          <Image
                            className="w-100"
                            style={{ objectFit: 'cover' }}
                            src={member.imgSrc}
                            width={560}
                            height={592}
                            alt={member.altText || member.name}
                          />
                          <div className="custom-team-overlay">
                            {member.bio && (
                              <p className="custom-team-bio">
                                {member.bio}
                              </p>
                            )}
                            {member.keyExpertise && (
                              <div style={{ marginTop: 'auto', width: '100%', textAlign: 'left' }}>
                                <h6 className="custom-team-expertise-title">Key Expertise</h6>
                                <ul className="custom-team-expertise-list">
                                  {member.keyExpertise.map((exp, i) => (
                                    <li key={i}>{exp}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {member.linkedin && (
                              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-start' }}>
                                <Link href={member.linkedin} target="_blank" className="custom-team-linkedin">
                                  <i className="icon unicon-logo-linkedin icon-2"></i>
                                  <span className="sr-only" style={{ display: 'none' }}>LinkedIn</span>
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="panel vstack gap-narrow" style={{ alignItems: 'center', textAlign: 'center' }}>
                          <h6 className="h6 xl:h5 m-0 dark:text-white">
                            {member.name}
                          </h6>
                          <span className="fs-6 xl:fs-5 opacity-70">
                            {member.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
