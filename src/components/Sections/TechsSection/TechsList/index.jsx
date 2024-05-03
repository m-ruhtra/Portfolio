import { techsData } from "../../../../data/techsData";
import { TechCard } from "./TechCard";
import styles from "./style.module.css";

export const TechList = () => {
    return(
        <ul className={styles.ul_box}>
            {
                techsData.map((tech) => {
                    return(
                        <TechCard key={tech.id} tech={tech} />
                    )
                })
            }
        </ul>
    )
};
