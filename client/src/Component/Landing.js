import React, {Component} from 'react';
import '../assets/css/Landing.css';

export default class Landing extends Component {
    render() {
        return(
            <React.Fragment>
            <main role="main">
            <div className="container-fluid">
                    <div className="jumbotron mt-5">
                        <div className="search-form">
                            <nav>
                                <form className="form-inline">
                                <div className="input-group"> </div>
                                <input type="text" className="form-control" placeholder="Search"></input>
                                <div className="input-group-append"></div>
                                </form>
                            </nav>
                        </div>
                    </div>
            </div>
            <div className="container-fluid mt-3"> 
                <div className="row">  
                    <div className="col-lg-4 col-md-6 col-xl-3"> 
                        <h2>Derechos Laborales</h2>
                        <p>Box1:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src="..." alt="..." className="img-thumbnail rounded-lg float-center"></img>
                        <p><a className="btn btn-secondary" href="#Button1" role="button">Derechos Laborales»</a></p>
                    </div>
                <div className="row">  
                    <div className="col-lg-4"> 
                        <h2>Tramites Legales</h2>
                        <p>Box2:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src="..." alt="..." className="img-thumbnail rounded-lg float-center"></img>
                        <p><a className="btn btn-secondary" href="#Button1" role="button">Tramites Legales»</a></p>
                    </div>
                </div>
                <div className="row">  
                    <div className="col-lg-4"> 
                        <h2>Seguridad Social</h2>
                        <p>Box3:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src="..." alt="..." className="img-thumbnail rounded-lg float-center"></img>
                        <p><a className="btn btn-secondary" href="#Button1" role="button">Seguridad Social»</a></p>
                    </div>
                </div>      
                <div className="row">  
                    <div className="col-lg-4"> 
                        <h2>Extranjería</h2>
                        <p>Box4:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src="..." alt="..." className="img-thumbnail rounded-lg float-center"></img>
                        <p><a className="btn btn-secondary" href="#Button1" role="button">Extranjería»</a></p>
                    </div>
                </div>   
                <div className="row">  
                    <div className="col-lg-4"> 
                        <h2>Centros de Suporte</h2>
                        <p>Box5:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src="..." alt="..." className="img-thumbnail rounded-lg float-center"></img>
                        <p><a className="btn btn-secondary" href="#Button1" role="button">Centros de Suporte»</a></p>
                    </div>
                </div>   
                <div className="row">  
                    <div className="col-lg-4"> 
                        <h2>Cuidado de Dependientes</h2>
                        <p>Box6:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src="..." alt="..." className="img-thumbnail rounded-lg float-center"></img>
                        <p><a className="btn btn-secondary" href="#Button1" role="button">Cuidado de Dependientes»</a></p>
                    </div>
                </div>  
                <div className="row">  
                    <div className="col-lg-4"> 
                        <h2>Cuidado de Mayores </h2>
                        <p>Box7:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src="..." alt="..." className="img-thumbnail rounded-lg float-center"></img>
                        <p><a className="btn btn-secondary" href="#Button1" role="button">Cuidado de Mayores»</a></p>
                    </div>
                </div>  
                <div className="row">  
                    <div className="col-lg-4"> 
                        <h2>Canguros</h2>
                        <p>Box8:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src="..." alt="..." className="img-thumbnail rounded-lg float-center"></img>
                        <p><a className="btn btn-secondary" href="#Button1" role="button">Canguros»</a></p>
                    </div>
                </div> 
                <div className="row">  
                    <div className="col-lg-4"> 
                        <h2>Consejos de Limpieza </h2>
                        <p>Box9:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src="..." alt="..." className="img-thumbnail rounded-lg float-center"></img>
                        <p><a className="btn btn-secondary" href="#Button1" role="button">Consejos de Limpieza»</a></p>
                    </div>
                </div>   
                <div className="row">  
                    <div className="col-lg-4"> 
                        <h2>Ayudas Prácticas</h2>
                        <p>Box10:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src="..." alt="..." className="img-thumbnail rounded-lg float-center"></img>
                        <p><a className="btn btn-secondary" href="#Button1" role="button">Ayudas Prácticas»</a></p>
                    </div>
                </div>  
                <div className="row">  
                    <div className="col-lg-4"> 
                        <h2>Recursos de Barcelona</h2>
                        <p>Box11:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src="..." alt="..." className="img-thumbnail rounded-lg float-center"></img>
                        <p><a className="btn btn-secondary" href="#Button1" role="button">Recursos de Barcelona»</a></p>
                    </div>
                </div>  
                <div className="row">  
                    <div className="col-lg-4"> 
                        <h2>Otros</h2>
                        <p>Box12:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src="..." alt="..." className="img-thumbnail rounded-lg float-center"></img>
                        <p><a className="btn btn-secondary" href="#Button1" role="button">Otros»</a></p>
                    </div>
                </div>    
                    <hr></hr>
                </div>
            </div>
            </main>
            <section className="footer-container">
                <p>© iCuida 2019</p>
                <ul>
                    <li><a href="https://icuida.barcelona/legal" id="" rel="nofollow">Legal &amp; Privacy</a></li>
                    <li><a href="https://icuida.barcelona/terms&conditions" id="" rel="nofollow">Terms &amp; Conditions</a></li>
                    <li><a href="https://icuida.barcelona/sitemap" id="" rel="nofollow">Sitemap</a></li>
                </ul>
            </section>
        </React.Fragment>   
        )
    }
}