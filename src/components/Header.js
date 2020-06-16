import { Link } from "react-router-dom";
import React from "react";

function Header() {
    return (
        <header>
            <nav>
               <div className="container">
                   <div className="row">
                       <div className="col-sm-8"></div>
                       <div className="col-sm-1">
                       <Link to="/home">About </Link>
                       </div>
                       <div className="col-sm-1"><Link to="/projects"> Project</Link></div>
                       <div className="col-sm-1"><Link to="/Contact"> Contact</Link></div>
                   </div>
               </div>
               
            </nav>
        </header>
    )
}

export default Header;