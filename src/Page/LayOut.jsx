import { NavLink, Outlet } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";


const LayOut = () => {




    return (
        <div>
            <Navbar >
                <Container class="navbar navbar-dark bg-dark">
                    <Nav>
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                    </Nav>
                    <Nav>
                        <NavLink className="nav-link" to="/about">
                        About
                        </NavLink>
                    </Nav>
                    <Nav>
                        <NavLink  className="nav-link" to="/board">
                            Board
                        </NavLink>
                    </Nav>
                   
                </Container>
            </Navbar>

        <main>
            <Outlet></Outlet>
        </main>
            
        </div>
    )
};
export default LayOut;