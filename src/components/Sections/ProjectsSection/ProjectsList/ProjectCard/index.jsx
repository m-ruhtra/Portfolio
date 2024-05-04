import styles from "./style.module.css";

export const ProjectCard = ({ project }) => {
    return(
        <li className={styles.card}>
            <div className={styles.card_container}>
                <img className={styles.card_img} src={project.img} alt={project.altImg} />

                <div className={styles.card_infos}>
                    <h3 className="title xsm">{project.name}</h3>

                    <div className={styles.card_btns}>
                        <a 
                            id="btn_card"
                            className="text btn" 
                            href={project.hiperlink} 
                            target="blank"
                        >
                            Visitar
                        </a>

                        <a 
                            id="btn_card"
                            className="text btn" 
                            href={project.repository} 
                            target="blank"
                        >
                            &lt;code /&gt;
                        </a>
                    </div>
                </div>

            </div>
        </li>
    )
};
