import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onLogOut } from '../actions';

class Header extends Component {
    
    onRightClick = () => {
        this.props.onLogOut();
    }

    renderNavbar = () => {
        if(this.props.auth.username !== "") {
            return (<Navbar fixedTop={true} inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Home</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={1}>
                        <Link to="/albumlist">Personal</Link>
                    </NavItem>
                    <NavItem eventKey={2}>
                        <Link to="/movielist">UMKM</Link>
                    </NavItem>
                    <NavItem eventKey={3}>
                        <Link to="/moviemanage">Corporate</Link>
                    </NavItem>
                        <NavDropdown eventKey={4} title="Produk" id="basic-nav-dropdown">
                            <MenuItem eventKey={4.1}>Aplikasi Mapan Finansial</MenuItem>
                            <MenuItem eventKey={4.2}>Konsultasi</MenuItem>
                            <MenuItem eventKey={4.3}>Pelatihan</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={4.4}>Workshop & Seminar</MenuItem>
                            <MenuItem eventKey={4.5}>Kalender Event</MenuItem>
                            <MenuItem eventKey={4.6}>E-Book Download</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        {/*<NavItem eventKey={1} href="#">
                            Hello, {this.props.auth.username}
                        </NavItem>*/}
                        <NavDropdown eventKey={5} title= { "Hello," + this.props.auth.username} id="basic-nav-dropdown">
                            <MenuItem eventKey={5.1}>Login</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={5.2} onSelect={this.onLogOutClik} >LogOut </MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>);
        }

        return (<Navbar fixedTop={true} inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Home</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1}>
                        <Link to="/albumlist">Personal</Link>
                    </NavItem>
                    <NavItem eventKey={2}>
                        <Link to="/movielist">UMKM</Link>
                    </NavItem>
                    <NavItem eventKey={3}>
                        <Link to="/moviemanage">Corporate</Link>
                    </NavItem>
                    <NavDropdown eventKey={4} title="Products" id="basic-nav-dropdown">
                    <MenuItem eventKey={4.1}>Aplikasi Mapan Finansial</MenuItem>
                            <MenuItem eventKey={4.2}>Konsultasi</MenuItem>
                            <MenuItem eventKey={4.3}>Pelatihan</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={4.4}>Workshop & Seminar</MenuItem>
                            <MenuItem eventKey={4.5}>Kalender Event</MenuItem>
                            <MenuItem eventKey={4.6}>E-Book Download</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1}>
                        <Link to="/login">Login</Link>
                    </NavItem>
                    <NavItem eventKey={2}>
                        <Link to="/register">Register</Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
    }
    render() {
        return( 
            this.renderNavbar()
        );
    }
}

const mapStateToProps = (state) => {
    const auth = state.auth;

    return { auth };
}

export default connect(mapStateToProps, {onLogOut}) (Header);