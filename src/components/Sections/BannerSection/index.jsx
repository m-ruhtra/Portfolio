import imageBanner from "../../../assets/imgs/coding.png";
import styles from "./style.module.css";

export const BannerSection = () => {
    return(
        <section  className="container">
            <div className={styles.section_box}>
                <div className={styles.div_infos}>
                    <div>
                        <h2 className="title md">Olá, eu sou o <span className={styles.spanText}>Arthur Miguel :&#41;</span></h2>
                        <p className="paragraph">
                            Desenvolvedor Front-End criando experiências por meio da tecnologia.
                        </p>
                    </div>

                    <div className={styles.div_btns_section}>
                        <a 
                            className="text btn" 
                            href="#projectsSection"
                        >
                            Projetos
                        </a>
                        <a 
                            className="text btn" 
                            href="https://github.com/m-ruhtra" 
                            target="_blank"
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                <div className={styles.div_imageBanner}>
                    <img className={styles.imageBanner}src={imageBanner} alt="Animação" />
                </div>
            </div>
            
        </section>
    )
};
