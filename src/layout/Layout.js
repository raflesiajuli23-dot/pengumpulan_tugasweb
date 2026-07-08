import {Outlet,Link} from "react-router-dom";
import React from "react";
class Layout extends React.Component {
    render() {
        return (
            <main className="container">
                <div className="row">
                    <header>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <a className="navbar-brand" href="#">
                                <img src="img/book-edu.png" className="img-fluid" style={{width:"25%"}}
                                 alt=""/>
                            </a>
                        <div className='navbar-collapse justify-content-end' id='navbarNav'>
                            <ul className='navbar-nav mr-auto'>
                                <li className='nav-item active'>
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/about" className="nav-link">About</Link>
                                </li>
                            </ul>
                        </div>
                        </nav>
                    </header>
                </div>
                <Outlet />
            </main>
        )
    }
}
export default Layout;