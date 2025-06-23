import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Breadcumb from "@/components/otherPages/Breadcumb";
import Privacy from "@/components/otherPages/Privacy";
import Header4 from "@/components/headers/Header4";
import Footer4 from "@/components/footers/Footer4";
export const metadata = {
  title:
    "Privacy and Policy.",
  description:
    "",
};
export default function PrivacyPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap">
          {/* <Breadcumb /> */}
          <Privacy />
        </div>
        <Footer4 />
      </div>
    </>
  );
}
