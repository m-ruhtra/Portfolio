import styles from "./style.module.css";

export const TechCard = ({ tech }) => {
    return(
        <li>
            <div className={styles.card}>
                <img className={styles.icon} src={tech.img} alt={tech.altImg} />
                <h3 className="title xsm">{tech.name}</h3>
            </div>
        </li>
    )
};
