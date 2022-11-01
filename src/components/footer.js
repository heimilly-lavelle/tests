import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import styles from './footer.module.css';

function Footer() {
    return(
        <footer className={styles.footer}>
            <ul className={styles.social}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p className={styles.copyright}>
                <span>Learning Center</span> &copy; 2022. Todos os direitos reservados.
            </p>
        </footer>
    )
}

export default Footer