import Header4 from "@/components/headers/Header4";
import Footer4 from "@/components/footers/Footer4";
import { teamMembers3 } from "@/data/team";
import TeamMemberDetail from "@/components/team/TeamMemberDetail";

export const metadata = {
  title: "Team Member || WASHLAB Consult",
  description: "Learn more about our dedicated professionals working to advance sustainable WASH solutions.",
};

export default async function TeamMemberPage(props) {
  const params = await props.params;
  const slug = params.slug;
  const member = teamMembers3.find((elm) => elm.slug === slug);

  if (!member) {
    return (
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md dom-ready bp-xxl-max bp-lg bp-xl">
        <Header4 />
        <div id="wrapper" className="wrap py-9 text-center">
          <div className="container">
            <h2>Team member not found</h2>
          </div>
        </div>
        <Footer4 />
      </div>
    );
  }

  return (
    <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md dom-ready bp-xxl-max bp-lg bp-xl">
      <Header4 />
      <div id="wrapper" className="wrap">
        <TeamMemberDetail member={member} />
      </div>
      <Footer4 />
    </div>
  );
}
