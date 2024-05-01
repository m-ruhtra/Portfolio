import styles from "./style.module.css";

export const Header = () => {
    return(
        <header>
            <div className="container header">
                <div className={styles.header_box}>
                    <h1 className="title"><span>&lt;Arthur Miguel Rodrigues /&gt;</span></h1>
                    <nav className={styles.header_nav}>
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
                </div>
            </div>
        </header>
    )
};
