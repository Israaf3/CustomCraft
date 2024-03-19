import { NavLink } from "react-router-dom";
import img1 from '../../Assets/images/first-logo.png';
import img2 from '../../Assets/images/f7_cart.png';
// import img3 from '../../Assets/images/';

import style from './NavBar.module.css';


export default function NavBar({saveData}){
    return <>
    <nav className={`navbar  navbar-expand-lg fixed-top ${style.navbg}  `}>
    
        <div className="container">
            <NavLink className="navbar-brand" to=""><img src={img1} alt="logo page" className=""/></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  d-lg-flex justify-content-between" id="navbarSupportedContent">
            {saveData !=null ? <ul className="navbar-nav m-auto ps-lg-5 mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="customize" >Customize</NavLink>
                </li>
                
                
            </ul> : ""}

            {saveData ==null ? <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link btnn px-3" to="/login">Login</NavLink>
                </li>
            </ul> : <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link" to="/cart"><img src={img2} className={style.image} alt="cart logo"/> Cart</NavLink>
                </li>
                <li>
                <NavLink className="nav-link" to="/hoodi">My account</NavLink>
                </li>
                <li>
                <NavLink className="nav-link" to="/vv">Sign Out</NavLink>
                
                </li>
                
            </ul>}
            
            </div>
        </div>

    </nav>
    </>
};