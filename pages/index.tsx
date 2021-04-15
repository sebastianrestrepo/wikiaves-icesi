import Head from 'next/head';
//import styles from './../styles/Home.module.css';
import Link from 'next/link';
import NavBar from '../src/components/NavBar';

export default function Home() {

  return (
    <div>
      <div className="mainBoxWrapper">
          <NavBar/>
        <div className="welcomeBoxWrapper">
          <h1>¡Bienvenido/a a la plataforma que reúne a todas <br></br> y todos los amantes de las aves colombianas!</h1>
          <h2>Tenemos información de más de 1900 aves colombianas con contenido <br></br> curado por expertos de la Universidad Icesi</h2>
          <h3>Comienza buscando una especie ya sea por su nombre científico o nombre común</h3>
          <div><input placeholder="Busca por nombre común o científico"></input><button>BUSCAR</button></div>
       </div>
    </div>
    <div className="contentBoxWrapper">
    <div className="leftWrapper">
    <h3 className="yellowTitle">RECOMENDADA DEL DÍA</h3>
    <h3 className="blackTitle">APRENDE ALGO NUEVO</h3>
    </div>
    <div className="rightWrapper">
    <h3 className="greenTitle">DESCUBRE ALGUNAS ESPECIES</h3>
    </div>
    </div>
      <footer>
        <p>¿Quieres iniciar sesión?</p>
        <Link href="/login"><button>INICIAR SESIÓN</button></Link>
      </footer>
    </div>
  )
}
