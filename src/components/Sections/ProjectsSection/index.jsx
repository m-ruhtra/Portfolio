import styles from "./style.module.css";
import { ProjectList } from "./ProjectsList";

export const ProjectsSection = () => {
    return(
        <section id="projectsSection" className="container">
            <div className={styles.section_box}>
                <h2 className="title sm">Projetos</h2>

                <ProjectList />
            </div>
        </section>
    )
};
