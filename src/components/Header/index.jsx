import styles from "./style.module.css";
import iconMenu from "../../assets/icons/iconMenu.svg";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export const Header = () => {
    const ref = useRef(null)
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const handleOutClick = (event) => {
            if (!ref.current?.contains(event.target)) {
               setToggle(false);
            }
         }
  
        window.addEventListener("mousedown", handleOutClick);
  
        return () => {
           window.removeEventListener("mousedown", handleOutClick);
        }
     }, [])
  

    return(
        <header>
            <div className="container header">
                <div className={styles.header_box}>
                    <h1 className="title"><span>&lt;Arthur Miguel Rodrigues /&gt;</span></h1>
                    
                    
                    <nav className={styles.header_nav}>
                        <button className={styles.nav_button}>
                            {!toggle ? (
                                <img 
                                    src={iconMenu} 
                                    alt="Icone do Menu" 
                                    onClick={() => setToggle(true)}
                                />

                            ) : null}


                        </button>
                        
                        <ul className={styles.nav_box}>
                            <li>
                                <a className="title" href="#techsSection">./Habilidades</a>
                            </li>

                            <li>
                                <a className="title" href="#projectsSection">./Projetos</a>
                            </li>

                            <li>
                                <a className="title" href="#contactSection">./Contatos</a>
                            </li>
                        </ul>
                    </nav>

                    {toggle && (
                        <div ref={ref} className={styles.menu}>
                            <ul className={styles.nav_menu}>
                                <li>
                                    <a 
                                        className="title" 
                                        href="#techsSection"
                                        onClick={() => setToggle(false)}
                                    >
                                        ./Habilidades
                                    </a>
                                </li>

                                <li>
                                    <a 
                                        className="title" 
                                        href="#projectsSection"
                                        onClick={() => setToggle(false)}
                                    >
                                        ./Projetos
                                    </a>
                                </li>

                                <li>
                                    <a 
                                        className="title" 
                                        href="#contactSection"
                                        onClick={() => setToggle(false)}
                                    >
                                        ./Contatos
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
};
