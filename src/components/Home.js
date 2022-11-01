import styles from "./Home.module.css";
import price from "../img/price-tag.png";
//import HomePage from "./Slots"
import HomePage from "./UseContent";
//import HomeBanner from "./UseContent";
//import { CroctProvider } from "@croct/plug-react";

function Home() {
    return(
        <section className={styles.home_container}>
            <HomePage />  
            <h1>Bem-vindo ao <span>Learning Center!</span> </h1>
            <p>O Centro de Estudos que você estava procurando para se especializar.</p>
            <a href="/Cursos">Adquira o curso agora mesmo!</a>
            <p>DIVERSOS CURSOS EM PROMOÇÃO</p>                
            <p>
                <button>Confira!</button>
            </p>
            <img src={price} alt="price-tag" />
        </section>
    )       
}

export default Home