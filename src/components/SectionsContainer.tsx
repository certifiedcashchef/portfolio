import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import { useStore } from "@nanostores/react";

import { currentSection } from "../navbarStore";



export default function SectionsContainer() {
    const $currentSection = useStore(currentSection);

    return (
        <main className="w-full flex flex-col justify-center items-center">


{
    $currentSection === "about" && (

<About />
    )
}

{
    $currentSection === "skills" && (

<Skills />
    )
}



{
    $currentSection === "projects" && (

<Projects />
    )
}

{
    $currentSection === "contact" && (

<Contact />
    )
}

        </main>
    )
}