import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../assets/css/Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="Footer py-3 mt-auto">
                <p className="footer-company-info text-white">iCuida © iCuida 2019 | Todos los derechos reservados.</p>
                <p className="footer-links">
                    <span><Link to="https://icuida.barcelona/legal" id="" rel="nofollow">Términos y Condiciones</Link></span>
                    {" - "}
                    <span><Link to="https://icuida.barcelona/terms&conditions" id="" rel="nofollow">Política de privacidad</Link></span>
                    {" - "}
                    <span><Link to="https://icuida.barcelona/sitemap" id="" rel="nofollow">Politica de cookies</Link></span>
                </p>

            </footer>
        )
    }
}