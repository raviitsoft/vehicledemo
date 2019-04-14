import React, { Component } from 'react';
import Logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);    
        this.state = { };
    }

    render(){
        return(
            <header className="main-header">
            <div className="row">
                <div className="col-sm-4 logo">
                    <img src={Logo} alt="" title="" className="img-fluid" />
                </div>
                <div className="col-sm-4 text-center align-self-center VehicleName">
                    <p className="">Vehicle</p>
                </div>
                <div className="col-sm-4 align-self-center text-right mobile-center">
                {!this.props.isAuth ?
                    null
                    : <NavLink className="btn btn-lg btn-success" to="/logout"> Logout </NavLink> }
                </div>
            </div>
        </header>
        )
    }
}

export default Header;