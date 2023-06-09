import { useStore } from "@nanostores/react";

import { currentSection } from "../navbarStore";

export default function Navbar() {
  const $currentSection = useStore(currentSection);

  const disableNav =
    "cursor-pointer hover:text-[#e2620c] py-[0.3rem] px-[0.7rem] sm:px-3  rounded-lg whitespace-nowrap ";
  const enableNav =
    "cursor-pointer  py-[0.3rem] px-[0.7rem] sm:px-3  rounded-lg bg-[#ff3e17]/10 text-[#ff3e17] whitespace-nowrap";

  return (
    <header className="">
      <nav className="w-full h-52 flex items-center justify-center mb-10">
        <ul className=" font-bold rounded-lg flex flex-nowrap sm:gap-3 bg-slate-300/50">
          <li
            tabIndex={0}
            onClick={() => currentSection.set("about")}
            className={$currentSection === "about" ? enableNav : disableNav}
          >
            about me
          </li>
          <li
            tabIndex={0}
            onClick={() => currentSection.set("skills")}
            className={$currentSection === "skills" ? enableNav : disableNav}
          >
            skills
          </li>
          <li
            tabIndex={0}
            onClick={() => currentSection.set("projects")}
            className={$currentSection === "projects" ? enableNav : disableNav}
          >
            projects
          </li>

          <li
            tabIndex={0}
            onClick={() => currentSection.set("contact")}
            className={$currentSection === "contact" ? enableNav : disableNav}
          >
            contact me
          </li>
        </ul>
      </nav>
    </header>
  );
}
