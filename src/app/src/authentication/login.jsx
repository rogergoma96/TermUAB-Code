import React from "react";
import { Link } from "react-router-dom";

import styles from '../../style/authentication/login.scss';

/**
 * Login
 */
class Login extends React.Component {
    /**
     * Render
     * @returns {*} JSX
     */
    render() {
        return (
            <div className={`container col s10 offset-s2 ${styles.container}`}>
                <div className="row">
                    <div className="col l6 s12 offset-l3 m6 offset-m3">
                        <div className={`card-panel hoverable center teal darken-3 ${styles.card}`}>
                            <h1 className={styles.title}>Inicia sesión</h1>
                            <form action="/login" method="post">
                                <div className={`${styles.input} input-field`}>
                                    <input id="email" type="email" name="email" className="validate" autoComplete="email"/>
                                    <label htmlFor="email">E-mail</label>
                                </div>
                                <div className={`${styles.input} input-field`}>
                                    <input id="password" type="password" name="password" className="validate" autoComplete="current-password" />
                                    <label htmlFor="password">Contrasenya</label>
                                </div>
                                <button className="orange accent-3 btn waves-effect waves-light" type="submit" name="action">
                                    Iniciar sessión
                                </button>
                            </form>
                            <div className="left-align">
                                <p className={`${styles.text} ${styles.link}`}>
                                    <label>
                                        <input type="checkbox" className="filled-in checkbox-orange-white" />
                                        <span>Recordar contraseña</span>
                                    </label>
                                </p>
                                <p><a className={`${styles.text} ${styles.link}`}>
                                    ¿Has olvidado la contraseña?
                                </a></p>
                                <p className={`${styles.text}`}>
                                    ¿No tienes cuenta? <Link to={'/signup'} className={styles.link}>
                                    <span>Únete ahora</span></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
