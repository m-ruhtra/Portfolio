import styles from "./style.module.css";

export const BannerSection = () => {
    return(
        <section  className="container">
            <div className={styles.section_box}>
                <div>
                    <h2 className="title md">Olá, eu sou o <span>Arthur Miguel :&#41;</span></h2>
                    <p className="paragraph">
                        Desenvolvedor Front-End criando experiências por meio da tecnologia
                    </p>
                </div>

                <div className={styles.div_btns_section}>
                    <a className="text btn" href="#">Projetos</a>
                    <a className="text btn" href="#">GitHub</a>
                </div>
            </div>
            
        </section>
    )
};
