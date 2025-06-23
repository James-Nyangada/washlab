"use client";
import Link from "next/link";
import Image from "next/image";
import { openNewsletterModal } from "@/utlis/toggleNewsletterModal";
import { features, homeLinks, links } from "@/data/menu";
import { featuresMenu, services } from "@/data/services";
export default function Nav3() {
  return (
    <>
      <li>
        <Link href={`/about-us`}>About us</Link>
      </li>

      <li className="has-dd-menu" style={{ position: "relative" }}>
        <a href="/services" role="button" aria-haspopup="true">
          Services{" "}
          <span
            data-uc-navbar-parent-icon=""
            className="uc-icon uc-navbar-parent-icon"
          >
            <svg width={12} height={12} viewBox="0 0 12 12">
              <polyline
                fill="none"
                stroke="#000"
                strokeWidth="1.1"
                points="1 3.5 6 8.5 11 3.5"
              />
            </svg>
          </span>
        </a>
        <div className="uc-navbar-dropdown w-600px ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-0 overflow-hidden uc-drop fit-content-600">
          <div className="row child-cols-1 g-0 col-match">
            <div>
              <ul className="uc-nav uc-navbar-dropdown-nav p-2">
                {featuresMenu.map((feature, index) => (
                  <li key={index}>
                    <Link
                      className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                      href={feature.href}
                    >
                      <i
                        className={`icon-1 ${feature.iconClass} fw-bold text-primary dark:text-secondary`}
                      />
                      <span className="vstack gap-narrow mt-nnarrow">
                        <b className="fw-bold dark:text-white">
                          {feature.title}
                        </b>
                        <span className="fw-normal">{feature.description}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li>
        <Link href={`/projects`}>Project</Link>
      </li>
      <li>
        <Link href={`/insights`}>Insights</Link>
      </li>
    </>
  );
}
