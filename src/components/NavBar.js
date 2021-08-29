import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHamburger, faDrumstickBite, faGlassWhiskey, faUtensils} from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {


    return (
        <>
            {/* <nav className="navbar navbar-light fixed-bottom overflow-auto bg-white"> */}
            <nav className="navbar fixed-bottom overflow-auto">
                <div className="container-fluid flex-nowrap">
                    <a className="navbar-brand text-center" href="#carne">
                        <FontAwesomeIcon icon={faDrumstickBite} />
                        <br/>
                        <h6>Carne</h6> 
                    </a>
                    <a className="navbar-brand text-center" href="#pastas">
                        <FontAwesomeIcon icon={faHamburger} />
                        <br/>
                        <h6>Pastas</h6>                        
                    </a>
                    <a className="navbar-brand text-center" href="#recomendados">
                        <FontAwesomeIcon icon={faUtensils} />
                        <br/>
                        <h6>Recomendados</h6>
                    </a>
                    <a className="navbar-brand text-center" href="#populares">
                        <FontAwesomeIcon icon={faUtensils} />
                        <br/>
                        <h6>Populares</h6>
                    </a>
                    <a className="navbar-brand text-center" href="#bebidas">
                        <FontAwesomeIcon icon={faGlassWhiskey} />
                        <br/>
                        <h6>Bebidas</h6>  
                    </a>
                    {/* <a className="navbar-brand text-center" href="!#">
                        <FontAwesomeIcon icon={faUtensils} />
                        <br/>
                        <h6>Postres</h6>
                    </a> */}
                </div>
            </nav>
        </>
    )
}


