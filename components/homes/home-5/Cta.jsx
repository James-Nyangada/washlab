"use client";
import { openContactModal } from "@/utlis/toggleContactModal";
import Link from "next/link";

export default function Cta() {
  return (
    <div id="pre_cta" className="pre-cta section panel mt-5 overflow-hidden">
      <div className="section-outer panel py-6 xl:pb-9 xl:pt-0">
        <div className="container max-w-xl">
          <div className="section-inner">
            <div
              className="vstack items-center gap-2 xl:gap-3 max-w-400px lg:max-w-750px mx-auto text-center"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h4 xl:h3 m-0">Unlock value.</h2>
              <p className="fs-6 sm:fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                Ready to turn water challenges into sustainable opportunities? We’re here to help you make it happen
              </p>
              <div className="hstack justify-center gap-1 lg:gap-2 mt-1">
              
                <Link
                  href={`/`}
                  className="btn btn-md btn-primary rounded-default text-white shadow-xs"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
