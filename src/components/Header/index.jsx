import styles from "./style.module.css";
import iconMenu from "../../assets/icons/iconMenu.svg";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Menu = () => (
        <nav className={styles.header_nav}>                       
            <ul className={styles.nav_menu}>
                <li>
                    <a className="title" href="./Projetos">./Habilidades</a>
                </li>

                <li>
                    <a className="title" href="./Projetos">./Projetos</a>
                </li>

                <li>
                    <a className="title" href="./Contatos">./Contatos</a>
                </li>
            </ul>
        </nav>
)

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
                                <a className="title" href="#">./Habilidades</a>
                            </li>

                            <li>
                                <a className="title" href="#">./Projetos</a>
                            </li>

                            <li>
                                <a className="title" href="#">./Contatos</a>
                            </li>
                        </ul>
                    </nav>

                    {toggle && (
                        <div ref={ref} className={styles.menu}>
                            <Menu />
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
};
