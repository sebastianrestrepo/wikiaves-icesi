import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link';
import authStore from '../stores/authStore';
import { observer } from 'mobx-react';
import NavBar from "../src/components/NavBar";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clickLogin, setClickLogin] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    authStore.login(email, password);
    setClickLogin(true);
    console.log('submit authstore, handlesubmit', authStore.isLogged)
    if (authStore.isLogged) {
      router.push('/editor');
      //setClickLogin(false);//////
      //////
    }
  }

  /*useEffect(() => {
      console.log('DENTRO DEL USEEFFECT', authStore.isLogged)
    if (authStore.isLogged) {
      router.push('/editor');
      //setClickLogin(false);//////
      //////
    }
  }, [clickLogin, authStore.isLogged])*/

  return (
    <div className="login">
      <NavBar></NavBar>
      <div className="loginWrapper">
      <h1>{authStore.isLogged + 'login'}</h1>
      <h2>Iniciar sesión</h2>
      {  !authStore.isLogged
          ? <form className="loginForm" onSubmit={handleSubmit}>
          <div className="textInputWrapper">
          <label>Correo</label>
          <input type="text" className="formTextInput" value={email} onChange={(e: any) => setEmail(e.target.value)}></input>
          </div>
          <div className="textInputWrapper">
          <label>Contraseña</label>
          <input type="text" className="formTextInput" value={password} onChange={(e: any) => setPassword(e.target.value)}></input>
          </div>
          {/*<Link href="/editor">*/}<input className="formButton" type="submit" value="Iniciar Sesión"></input>{/*</Link>*/}
        </form>
        : <div>Validando...</div>
      }
      </div>
    </div>
  );
}

export default observer(Login);