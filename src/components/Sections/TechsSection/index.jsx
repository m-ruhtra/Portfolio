import { TechList } from "./TechsList";
import styles from "./style.module.css";

export const TechSection = () => {
    return(
        <section id="techsSection" className="container">
            <div className={styles.section_box}>
                <h2 className="title sm">Habilidades</h2>

                <TechList className={styles.ul_box}/>
            </div>
        </section>
    )
};
