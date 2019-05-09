import React, {Component} from 'react';
import '../assets/css/Landing.css';

export default class Landing extends Component {
    render() {
        return(
            <React.Fragment>
            <main role="main">
            <div className="container-fluid">
                    <div className="search-form">
                        <nav>
                            <form className="form-inline ml-auto">
                            <input type="text" 
                                   className="form-control mr-sm-2" 
                                   placeholder="Busca" 
                                   id="searchInput" 
                                   className="search">
                            </input>
                            </form>   
                        </nav>
                    </div>
            </div>
            <div className="container-fluid mt-3"> 
                <div className="card-group">
                <div className="card1 col-md-6 col-lg-4 col-xl-3">  
                    {/*<img src="/" alt="img-derechos-laborales" className="img-thumbnail rounded-lg float-center"></img>*/}
                <div className="card-body">
                    <h3>Derechos Laborales</h3>
                    <p className="card-text">Box1:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><a className="btn btn-secondary" href="#Button1" role="button">Derechos Laborales»</a></p> 
                </div>             
            </div>
                <div className="card2 col-md-6 col-lg-4 col-xl-3">  
                    {/*<img src="/" alt="img-derechos-laborales" className="img-thumbnail rounded-lg float-center"></img>*/}
                <div className="card-body">
                    <h3>Tramites Legales</h3>
                    <p className="card-text">Box2:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><a className="btn btn-secondary" href="#Button2" role="button">Tramites Legales»</a></p> 
                </div>             
            </div>
                <div className="card3 col-md-6 col-lg-4 col-xl-3">  
                    {/*<img src="/" alt="img-derechos-laborales" className="img-thumbnail rounded-lg float-center"></img>*/}
                <div className="card-body">
                    <h3>Seguridad Social</h3>
                    <p className="card-text">Box3:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><a className="btn btn-secondary" href="#Button3" role="button">Seguridad Social»</a></p> 
                </div>             
            </div>     
                <div className="card4 col-md-6 col-lg-4 col-xl-3">  
                    {/*<img src="/" alt="img-derechos-laborales" className="img-thumbnail rounded-lg float-center"></img>*/}
                <div className="card-body">
                    <h3>Extranjería</h3>
                    <p className="card-text">Box4:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><a className="btn btn-secondary" href="#Button4" role="button">Extranjería»</a></p> 
                </div>             
            </div>
            <div className="card5 col-md-6 col-lg-4 col-xl-3">  
                    {/*<img src="/" alt="img-derechos-laborales" className="img-thumbnail rounded-lg float-center"></img>*/}
                <div className="card-body">
                    <h3>Centros de Suporte</h3>
                    <p className="card-text">Box5:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><a className="btn btn-secondary" href="#Button5" role="button">Centros de Suporte»</a></p> 
                </div>             
            </div> 
            <div className="card6 col-md-6 col-lg-4 col-xl-3">  
                    {/*<img src="/" alt="img-derechos-laborales" className="img-thumbnail rounded-lg float-center"></img>*/}
                <div className="card-body">
                    <h3>Cuidado de Dependientes</h3>
                    <p className="card-text">Box6:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><a className="btn btn-secondary" href="#Button5" role="button">Cuidado de Dependientes»</a></p> 
                </div>             
            </div> 
            <div className="card7 col-md-6 col-lg-4 col-xl-3">  
                    {/*<img src="/" alt="img-derechos-laborales" className="img-thumbnail rounded-lg float-center"></img>*/}
                <div className="card-body">
                    <h3>Cuidado de Mayores</h3>
                    <p className="card-text">Box7:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><a className="btn btn-secondary" href="#Button5" role="button">Cuidado de Mayores»</a></p> 
                </div>             
            </div> 
            <div className="card8 col-md-6 col-lg-4 col-xl-3">  
                    {/*<img src="/" alt="img-derechos-laborales" className="img-thumbnail rounded-lg float-center"></img>*/}
                <div className="card-body">
                    <h3>Canguros</h3>
                    <p className="card-text">Box8:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><a className="btn btn-secondary" href="#Button5" role="button">Canguros»</a></p> 
                </div>             
            </div>  
            <div className="card9 col-md-6 col-lg-4 col-xl-3">  
                    {/*<img src="/" alt="img-derechos-laborales" className="img-thumbnail rounded-lg float-center"></img>*/}
                <div className="card-body">
                    <h3>Consejos de Limpieza</h3>
                    <p className="card-text">Box9:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><a className="btn btn-secondary" href="#Button5" role="button">Consejos de Limpieza»</a></p> 
                </div>             
            </div>
            <div className="card10 col-md-6 col-lg-4 col-xl-3">  
                    {/*<img src="/" alt="img-derechos-laborales" className="img-thumbnail rounded-lg float-center"></img>*/}
                <div className="card-body">
                    <h3>Ayudas Prácticas</h3>
                    <p className="card-text">Box10:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><a className="btn btn-secondary" href="#Button5" role="button">Ayudas Prácticas»</a></p> 
                </div>             
            </div>
            <div className="card11 col-md-6 col-lg-4 col-xl-3">  
                    {/*<img src="/" alt="img-derechos-laborales" className="img-thumbnail rounded-lg float-center"></img>*/}
                <div className="card-body">
                    <h3>Recursos de Barcelona</h3>
                    <p className="card-text">Box11:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><a className="btn btn-secondary" href="#Button5" role="button">Recursos de Barcelona»</a></p> 
                </div>             
            </div>
            <div className="card12 col-md-6 col-lg-4 col-xl-3">  
                    {/*<img src="/" alt="img-derechos-laborales" className="img-thumbnail rounded-lg float-center"></img>*/}
                <div className="card-body">
                    <h3>Otros</h3>
                    <p className="card-text">Box12:Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><a className="btn btn-secondary" href="#Button5" role="button">Otros»</a></p> 
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