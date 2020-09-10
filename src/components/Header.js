import React, { Component } from 'react';
import "../assets/css/header.css";

class Header extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top nav-bg">
                    <div className="container">
                        <a className="navbar-brand d-flex align-items-center" href="#">
                            <img src="https://www.capestart.com/wp-content/uploads/2020/06/capestart-logo.png" className="logoImage" alt="capestart" />

                        </a> <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar4">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar4">
                            <ul className="navbar-nav mr-auto pl-lg-4">
                                <li className="nav-item px-lg-2 active">
                                    <a className="nav-link" href="#" id="navbardrop">
                                        <span className="d-inline-block d-lg-none icon-width">
                                            <i className="fas fa-home"></i></span>Solutions</a>
                                </li>
                                <li className="nav-item px-lg-2">
                                    <a className="nav-link" href="#" id="navbardrop">
                                        <span className="d-inline-block d-lg-none icon-width">
                                            <i className="fas fa-spa"></i></span>Services</a>
                                </li>
                                <li className="nav-item px-lg-2">
                                    <a className="nav-link" href="#" id="navbardrop"><span className="d-inline-block d-lg-none icon-width">
                                        <i className="far fa-user"></i></span>Industries</a>
                                </li>
                                <li className="nav-item px-lg-2">
                                    <a className="nav-link" href="#" id="navbardrop"><span className="d-inline-block d-lg-none icon-width">
                                        <i className="far fa-user"></i></span>Technologies</a>
                                </li>
                                <li className="nav-item px-lg-2">
                                    <a className="nav-link" href="#" id="navbardrop"><span className="d-inline-block d-lg-none icon-width">
                                        <i className="far fa-user"></i></span>Contact Us</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto mt-3 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link " href="#">
                                        <button type="button" className="btn btn-talk">Let's Talk</button>
                                    </a> </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Header;