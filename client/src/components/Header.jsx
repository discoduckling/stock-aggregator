import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="navbar--dark">
                <Navbar color="faded" dark expand="md">
                    <div className="container">
                        <NavbarBrand href="/">Stock Aggregator</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="navbar__buttons" href="/dashboard">Try It Out</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="navbar__buttons" href="https://github.com/reactstrap/reactstrap">Log In</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}


export default Header;