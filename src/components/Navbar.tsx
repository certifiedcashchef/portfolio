import { useStore } from "@nanostores/react";

import { currentSection } from "../navbarStore";

export default function Navbar() {
  const $currentSection = useStore(currentSection);

  const disableNav =
    "cursor-pointer hover:text-[#e2620c] py-[0.3rem] px-3  rounded-lg ";
  const enableNav =
    "cursor-pointer  py-[0.3rem] px-3  rounded-lg bg-[#ff3e17]/10 text-[#ff3e17]";

  return (
    <header className=" w-full h-52 flex items-center justify-center mb-10 ">
      <nav className="">
        <ul className=" font-bold  rounded-lg flex items-center justify-center gap-1 sm:gap-3  bg-slate-300/50">
          <li 
		  onClick={() => currentSection.set("about")}
		  className={$currentSection === "about" ? enableNav : disableNav}>
            about me
          </li>
          <li
            onClick={() => currentSection.set("skills")}
            className={$currentSection === "skills" ? enableNav : disableNav}
          >
            skills
          </li>
          <li
		  		  onClick={() => currentSection.set("projects")}

            className={$currentSection === "projects" ? enableNav : disableNav}
          >
            projects
          </li>

          <li
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
