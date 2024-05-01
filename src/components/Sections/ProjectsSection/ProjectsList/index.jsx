import { projectsData } from "../../../../data/projectsData";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = () => {
    return(
        <ul>
            {
                projectsData.map((project) => {
                    return(
                        <ProjectCard key={project.id} project={project} />
                    )
                })
            }
        </ul>
    )
};
