import Introduction from "./introduction";
import Profile from "./profile";
import Projects from "./projects";
import Skills from "./skills";

export default function Resume() {
  return (
    <div className="container-fluid w-50 pt-5 d-flex flex-column gap-3">
      <Profile />
      <Introduction />
      <Skills />
      <Projects />
    </div>
  );
}
