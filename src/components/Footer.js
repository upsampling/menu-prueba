import React from 'react';
import { FaFacebook, FaInstagram} from 'react-icons/fa';



export const Footer = () => {
    return (
        <footer className="text-center mb-5" >
            <hr/>
            <span className="">¡Siguenos en nuestras redes sociales!</span>
            <div className="container p-2">
                <section className="">
                    <a href="!#"><FaFacebook size={50} className="icon-fa mx-2" /></a>

                    <a href="!#"><FaInstagram size={50} className="icon-fa mx-2"/></a>

                </section>
            </div>
            <div className="text-center mb-5">
                © 2021 Copyright: RESTAURANT
            </div>
            <br/>
        </footer>
    )
}
