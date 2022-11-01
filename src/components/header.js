import { Link } from "react-router-dom"
import Container from "./Container"
import styles from "./header.module.css"
import logo from "../img/open-book.png"

function Header() {
    return(
        <nav className={styles.header}>
            <Container>
                <Link to="/">
                    <img className={styles.image} src={logo} alt="LearningCenter" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/Cursos'>Cursos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/Contato'>Contato</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/Perfil'>Perfil</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Header