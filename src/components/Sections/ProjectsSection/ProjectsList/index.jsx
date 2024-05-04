import styles from "./style.module.css";
import { projectsData } from "../../../../data/projectsData";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = () => {
    return(
        <ul className={styles.ul_box}>
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
