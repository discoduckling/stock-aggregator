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
import { connect } from 'react-redux';

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

    headerRender = () => {
        if (this.props.auth) {
            return (
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink className="navbar__buttons" href="/dashboard">My Stocks</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navbar__buttons" href="/auth/logout">Log Out</NavLink>
                    </NavItem>
                </Nav>
            );
        } else {
            return (
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink className="navbar__buttons" href="/dashboard">Try It Out</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navbar__buttons" href="/auth/login">Log In</NavLink>
                    </NavItem>
                </Nav>
            )
        }
    }
    render() {
        // console.log(this.props.auth);
        return (
            <div className="navbar--dark">
                <Navbar color="faded" dark expand="md">
                    <div className="container">
                        <NavbarBrand href="/">Stock Aggregator</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            {this.headerRender()}
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Header);