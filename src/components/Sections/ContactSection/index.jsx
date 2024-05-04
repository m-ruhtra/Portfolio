import styles from "./style.module.css";
import iconWhatsapp from "../../../assets/icons/iconWhatsapp.svg";
import iconLinkedin from "../../../assets/icons/iconLinkedin.svg";
import iconGithub from "../../../assets/icons/iconGithub.svg";
import iconEmail from "../../../assets/icons/iconEmail.svg";

export const ContactSection = () => {
    return(
        <section id="contactSection" className="container">
            <div className={styles.section_box}>
                <h3 className="title sm">Contatos</h3>

                <nav className={styles.contact_nav}>
                    <div className={styles.div_link}>
                        <a href="mailto:amrrodrigues4@gmail.com" target="_blank">
                            <img 
                                className={styles.icon_nav}
                                src={iconEmail} 
                                alt="Icon Email" 
                            />
                        </a>

                        <h2 className="title xsm">E-mail</h2>
                        <p className="paragraph">amrrodrigues4@gmail.com</p>
                    </div>

                    <div className={styles.div_link}>
                        <a href="https://wa.link/mydclk" target="_blank">
                            <img 
                                className={styles.icon_nav}
                                src={iconWhatsapp} 
                                alt="Icon WhatsApp" 
                            />
                        </a>

                        <h2 className="title xsm">Telefone</h2>
                        <p className="paragraph">&#40;41&#41; 99752-3226</p>
                    </div>

                    <div className={styles.div_link}>
                        <a href="https://www.linkedin.com/in/arthur-miguel-rodrigues/" target="_blank">
                            <img 
                                className={styles.icon_nav}
                                src={iconLinkedin} 
                                alt="Icon LinkedIn" 
                            />
                        </a>

                        <h2 className="title xsm">LinkedIn</h2>
                        <p className="paragraph">Arthur Miguel Rodrigues</p>
                        <p className="paragraph sm">Vamos nos conextar?</p>
                    </div>

                    <div className={styles.div_link}>
                        <a href="https://github.com/m-ruhtra" target="_blank">
                            <img 
                                className={styles.icon_nav}
                                src={iconGithub} 
                                alt="Icon GitHub" 
                            />
                        </a>

                        <h2 className="title xsm">GitHub</h2>
                        <p className="paragraph">@m-ruhtra</p>
                        <p className="paragraph sm">Conheça mais minha forma de codar!</p>
                    </div>
                </nav>
            </div>
        </section>
    )
};
