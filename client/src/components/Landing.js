import React, {Component} from 'react';
import '../assets/css/Landing.css';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
    render() {
        return(
            <React.Fragment>
            <main role="main">
            <div className="container-fluid">
                    <div className="search-form">
                        <nav>
                            <form className="form-group has-search ml-auto">
                            <span className="fa fa-search form-control-feedback">
                            </span>
                            <input type="text" 
                                   className="form-control mr-sm-2" 
                                   placeholder="Busca" 
                                   id="searchInput">
                            </input>
                            </form>   
                        </nav>
                    </div>
            </div>
            <div className="container-fluid mt-3"> 
                <div className="card-group">                 
                <div className="card1 col-md-6 col-lg-4 col-xl-3 mb-4">
                    {/*<img src="/img/derechos-laborales.jpg" alt="derechos-laborales" 
                        className="img-thumbnail rounded-lg float-center">
                    </img>*/}
                <div className="card-body">
                    <h3>Derechos Laborales</h3>
                    <p className="card-text">Box1:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><Link className="btn btn-secondary" to="/derechos-laborales" role="button">Derechos Laborales»</Link></p>
                </div>             
            </div>
                <div className="card2 col-md-6 col-lg-4 col-xl-3 mb-4">
                    {/*<img src="/img/tramites-legales.jpg" alt="tramites-legales" 
                        className="img-thumbnail rounded-lg float-center">
                    </img>*/}
                <div className="card-body">
                    <h3>Tramites Legales</h3>
                    <p className="card-text">Box2:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><Link className="btn btn-secondary" to="/tramites-legales" role="button">Tramites Legales»</Link></p>
                </div>             
            </div>
                <div className="card3 col-md-6 col-lg-4 col-xl-3 mb-4">
                    {/*<img src="/img/seguridad-social.jpg" alt="seguridad-social" 
                        className="img-thumbnail rounded-lg float-center">
                    </img>*/}
                <div className="card-body">
                    <h3>Seguridad Social</h3>
                    <p className="card-text">Box3:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><Link className="btn btn-secondary" to="/seguridad-social" role="button">Seguridad Social»</Link></p>
                </div>             
            </div>     
                <div className="card4 col-md-6 col-lg-4 col-xl-3 mb-4">
                    {/*<img src="/img/extranjer%C3%ADa.jpg" alt="extranjer%C3%ADa" 
                        className="img-thumbnail rounded-lg float-center">
                    </img>*/}
                <div className="card-body">
                    <h3>Extranjería</h3>
                    <p className="card-text">Box4:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><Link className="btn btn-secondary" to="/extranjer%C3%ADa" role="button">Extranjería»</Link></p>
                </div>             
            </div>
            <div className="card5 col-md-6 col-lg-4 col-xl-3 mb-4">
                    {/*<img src="/img/centros-de-suporte.jgp" alt="centros-de-suporte" 
                        className="img-thumbnail rounded-lg float-center">
                    </img>*/}
                <div className="card-body">
                    <h3>Centros de Suporte</h3>
                    <p className="card-text">Box5:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><Link className="btn btn-secondary" to="/centros-de-suporte" role="button">Centros de Suporte»</Link></p>
                </div>             
            </div> 
            <div className="card6 col-md-6 col-lg-4 col-xl-3 mb-4">
                    {/*<img img/cuidado-de-dependientes.jpg" alt="cuidado-de-dependientes" 
                        className="img-thumbnail rounded-lg float-center">
                    </img>*/}
                <div className="card-body">
                    <h3>Cuidado de Dependientes</h3>
                    <p className="card-text">Box6:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><Link className="btn btn-secondary" to="/cuidado-de-dependientes" role="button">Cuidado de Dependientes»</Link></p>
                </div>             
            </div> 
            <div className="card7 col-md-6 col-lg-4 col-xl-3 mb-4">
                    {/*<img src="/img/cuidado-de-mayores.jpg" alt="cuidado-de-mayores" 
                        className="img-thumbnail rounded-lg float-center">
                    </img>*/}
                <div className="card-body">
                    <h3>Cuidado de Mayores</h3>
                    <p className="card-text">Box7:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><Link className="btn btn-secondary" to="/cuidado-de-mayores" role="button">Cuidado de Mayores»</Link></p>
                </div>             
            </div> 
            <div className="card8 col-md-6 col-lg-4 col-xl-3 mb-4">
                    {/*<img src="/img/canguros.jpg" alt="canguros" 
                        className="img-thumbnail rounded-lg float-center">
                    </img>*/}
                <div className="card-body">
                    <h3>Canguros</h3>
                    <p className="card-text">Box8:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><Link className="btn btn-secondary" to="/canguros" role="button">Canguros»</Link></p>
                </div>             
            </div>  
            <div className="card9 col-md-6 col-lg-4 col-xl-3 mb-4">
                    {/*<img src="/img/consejos-de-limpieza.jpg" alt="consejos-de-limpieza" 
                        className="img-thumbnail rounded-lg float-center">
                    </img>*/}
                <div className="card-body">
                    <h3>Consejos de Limpieza</h3>
                    <p className="card-text">Box9:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><Link className="btn btn-secondary" to="/consejos-de-limpieza" role="button">Consejos de Limpieza»</Link></p>
                </div>             
            </div>
            <div className="card10 col-md-6 col-lg-4 col-xl-3 mb-4">
                    {/*<img src="/img/ayudas-pr%C3%A1cticas.jpg" alt="ayudas-pr%C3%A1cticas" 
                        className="img-thumbnail rounded-lg float-center">
                    </img>*/}
                <div className="card-body">
                    <h3>Ayudas Prácticas</h3>
                    <p className="card-text">Box10:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><Link className="btn btn-secondary" to="/ayudas-pr%C3%A1cticas" role="button">Ayudas Prácticas»</Link></p>
                </div>             
            </div>
            <div className="card11 col-md-6 col-lg-4 col-xl-3 mb-4">
                    {/*<img src="/img/recursos-de-barcelona.jpg" alt="recursos-de-barcelona" 
                        className="img-thumbnail rounded-lg float-center">
                    </img>*/}
                <div className="card-body">
                    <h3>Recursos de Barcelona</h3>
                    <p className="card-text">Box11:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><Link className="btn btn-secondary" to="/recursos-de-barcelona" role="button">Recursos de Barcelona»</Link></p>
                </div>             
            </div>
            <div className="card12 col-md-6 col-lg-4 col-xl-3 mb-4">
                    {/*<img src="/img/otros.jpg" alt="otros" 
                        className="img-thumbnail rounded-lg float-center">
                    </img>*/}
                <div className="card-body">
                    <h3>Otros</h3>
                    <p className="card-text">Box12:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><Link className="btn btn-secondary" to="/otros" role="button">Otros»</Link></p>
                </div>             
            </div>                        
                <hr></hr>
                </div>
            </div>
            </main>
            <section className="footer-container">
                <p>© iCuida 2019</p>
                <ul>
                    <li ><Link to="/legal" id="" rel="nofollow">Legal &amp; Privacy</Link></li>
                    <li><Link to="/terms&conditions" id="" rel="nofollow">Terms &amp; Conditions</Link></li>
                    <li><Link to="/sitemap" id="" rel="nofollow">Sitemap</Link></li>
                </ul>
            </section>
        </React.Fragment>   
        )
    }
}              

   