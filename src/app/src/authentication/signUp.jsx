import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";

import styles from '../../style/authentication/signUp.scss';

/**
 * Register
 */
class SignUp extends React.Component {
    /**
     * Render
     * @returns {*} JSX
     */
    render() {
        return (
            <div className={`teal darken-3 ${styles.signUp}`}>
                <div className="container">
                    <div className="row valign-wrapper">
                        <div className={`col l4 s12 offset-l4 m6 offset-m3 valign`}>
                            <div className={`card-panel hoverable center ${styles.card}`}>
                                <h1 className={styles.title}>Registro</h1>
                                <form action="/signup" method="post" className={styles.form}>
                                    <div className="input-field">
                                        <input id="firstName" type="text" name="firstName" className="validate" required />
                                        <label htmlFor="firstName">Nombre</label>
                                    </div>
                                    <div className="input-field">
                                        <input id="lastName" type="text" name="lastName" className="validate" required />
                                        <label htmlFor="lastName">Apellidos</label>
                                    </div>
                                    <div className="input-field">
                                        <input id="email" type="email" name="email" className="validate" autoComplete="email" required />
                                        <label htmlFor="email">E-mail</label>
                                    </div>
                                    <div className="input-field">
                                        <input id="password" type="password" name="password" className="validate" autoComplete="new-password" required />
                                        <label htmlFor="password">Contraseña</label>
                                    </div>
                                    <div className="input-field">
                                        <input id="repeat-password" type="password" className="validate" autoComplete="new-password" required />
                                        <label htmlFor="repeat-password">Repite la contraseña</label>
                                    </div>
                                    <button className="btn waves-effect waves-light" name="action" type="submit">
                                        Crear cuenta
                                    </button>
                                </form>
                                <div className="left-align">
                                    <p className={styles.text}>
                                        <label>
                                            Al crearte una cuenta, aceptas la <a className={styles.link}>Política de privacidad</a> y los <a className={styles.link}>Términos de uso</a> de TermUAB.
                                        </label>
                                    </p>
                                    <p className={styles.text}>
                                        ¿Ya tienes cuenta? <Link to="/login" className={styles.link}>Inicia sesión</Link>
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

export default SignUp;
