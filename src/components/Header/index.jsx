import styles from "./style.module.css";
import iconMenu from "../../assets/icons/iconMenu.svg";
import { useState } from "react";
import { useRef } from "react";

export const Header = () => {
    const dropdownRef = useRef(null);

    const [active, setActive] = useState(false);

    
    return(
        <header>
            <div className="container header">
                <div className={styles.header_box}>
                    <h1 className="title"><span>&lt;Arthur Miguel Rodrigues /&gt;</span></h1>

                    <div className={styles.container_menu}>
                        <button 
                            className={styles.menu_trigger} 
                            onClick={() => setActive(!active)}
                        >
                            <img 
                                src={iconMenu} 
                                alt="Icone do Menu" 
                            />
                        </button>

                        <nav className={styles.menu_nav}>
                            <ul className={styles.menu_links}>
                                <li>
                                    <a className="title xsm" href="#techsSection">./Habilidades</a>
                                </li>

                                <li>
                                    <a className="title xsm" href="#projectsSection">./Projetos</a>
                                </li>

                                <li>
                                    <a className="title xsm" href="#contactSection">./Contatos</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="dropdown">
                            <nav 
                                id="menu_nav"
                                ref={dropdownRef}
                                className={`menu ${active ? "active" : "inactive"}`}
                            >
                                <ul className={styles.menu_links}>
                                    <li>
                                        <a className="title linkMenu" href="#techsSection">./Habilidades</a>
                                    </li>

                                    <li>
                                        <a className="title linkMenu" href="#projectsSection">./Projetos</a>
                                    </li>

                                    <li>
                                        <a className="title linkMenu" href="#contactSection">./Contatos</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};
