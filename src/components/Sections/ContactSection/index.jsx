import iconWhatsapp from "../../../assets/icons/iconWhatsapp.svg";
import iconLinkedin from "../../../assets/icons/iconLinkedin.svg";
import iconGithub from "../../../assets/icons/iconGithub.svg";

export const ContactSection = () => {
    return(
        <section id="contactSection">
            <div className="container">
                <h3 className="title sm">Contatos</h3>

                <nav>
                    <a href="https://wa.link/mydclk" target="_blank">
                        <img 
                            src={iconWhatsapp} 
                            alt="Icon WhatsApp" 
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/arthur-miguel-rodrigues/" target="_blank">
                        <img 
                            src={iconLinkedin} 
                            alt="Icon LinkedIn" 
                        />
                    </a>

                    <a href="https://github.com/m-ruhtra" target="_blank">
                        <img 
                            src={iconGithub} 
                            alt="Icon GitHub" 
                        />
                    </a>
                </nav>
            </div>
        </section>
    )
};
