import React from "react";
import { Link } from "react-router-dom";

import styles from '../../style/authentication/login.scss';

/**
 * Login
 */
class Login extends React.Component {
    render() {
        return (
            <div className={`teal darken-3 ${styles.login}`}>
                <div className="container">
                    <div className="row valign-wrapper">
                        <div className={`col l4 s12 offset-l4 m6 offset-m3 valign`}>
                            <div className={`card-panel hoverable center ${styles.card}`}>
                                <h1 className={styles.title}>Inicia sesión</h1>
                                <form action="/login" method="post">
                                    <div className="input-field">
                                        <input id="email" type="email" name="email" className="validate" />
                                        <label htmlFor="email">E-mail</label>
                                    </div>
                                    <div className="input-field">
                                        <input id="password" type="password" name="password" className="validate" />
                                        <label htmlFor="password">Contrasenya</label>
                                    </div>
                                    <button className="btn waves-effect waves-light" type="submit" name="action">
                                        Iniciar sessión
                                    </button>
                                </form>
                                <div className="left-align">
                                    <p className={`${styles.text} ${styles.link}`}>
                                        <label>
                                            <input type="checkbox" className="filled-in"/>
                                            <span>Recordar contraseña</span>
                                        </label>
                                    </p>
                                    <p><a className={`${styles.text} ${styles.link}`}>
                                        ¿Has olvidado la contraseña?
                                    </a></p>
                                    <p className={`${styles.text}`}>
                                        ¿No tienes cuenta? <Link to={'/register'} className={styles.link}>
                                        <span>Únete ahora</span></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
