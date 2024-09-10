import React, { useState } from 'react';
import '../Header.css';
import {
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Navbar
} from 'reactstrap';

// import PropTypes from 'prop-types';


const HeaderNavBar =() => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);


    return (
        <div>
            {/* <div className='d-none d-md-block'>
                <Nav >
                    <NavItem>
                        <NavLink
                        active
                        href="#"
                        >
                        Link
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                        Another Link
                        </NavLink>
                    </NavItem>
                </Nav>
            </div> */}
        <Navbar color="faded" dark>
               <Nav className='d-none d-md-inline-flex'>
                    <NavItem>
                        <NavLink
                        active
                        href="#">
                            <h5>
                                Home
                            </h5>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        active
                        href="#">
                            <h5>
                                Air B&B
                            </h5>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        active
                        href="#">
                            <h5>
                                Chill out
                            </h5>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        active
                        href="#">
                            <h5>
                                Plan Trip
                            </h5>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        active
                        href="#">
                            <h5>
                                Feedback
                            </h5>
                        </NavLink>
                    </NavItem>
                </Nav>
        <NavbarToggler onClick={toggleNavbar} className="me-2 d-sm-none" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
                    <NavItem>
                        <NavLink
                        active
                        href="#">
                            <h5>
                                Home
                            </h5>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        active
                        href="#">
                            <h5>
                                Air B&B
                            </h5>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        active
                        href="#">
                            <h5>
                                Chill out
                            </h5>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        active
                        href="#">
                            <h5>
                                Plan Trip
                            </h5>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        active
                        href="#">
                            <h5>
                                Feedback
                            </h5>
                        </NavLink>
                    </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

            </div>
        
    )
}

// HeaderNavBar.propTypes = {
//   direction: PropTypes.string,
// };

export default HeaderNavBar;