import { Outlet, Link} from 'react-router-dom';
import { Container, Navbar, Nav, Image, Row, Col } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <div>
      <header className="page-header">

          <Container>
            <div className="row">
              <div className="col-md-3">
                <Image src="images/logo_2x.png" className="img-fluid toggle-app-logo" alt="logo"/>
                <Image src="images/logo.png" className="img-fluid toggle-app-logo-small" alt="logo small" aria-hidden="true" />
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-8">

                  </div>
                  <div className="col-md-4">
                    <Navbar>
                      <Nav className="me-auto">
                        <Nav.Link as={Link} to="/signin">SignIn</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                      </Nav>
                    </Navbar>
                  </div>

                </div>
                <div className="row">
                  <div className="col-md-8">
                  <Navbar>
                    <Nav className="me-auto navigation-link">
                      <Nav.Link as={Link} to="/">Home</Nav.Link>
                      <Nav.Link as={Link} to="/productListing">Products</Nav.Link>
                    </Nav>
                  </Navbar>
                  </div>
                  <div className="col-md-4">

                  </div>
                </div>
              </div>
            </div>



          </Container>

      </header>
      <Outlet />
      <footer className="page-footer">
        <Container>
          <p>Copyright © 2022-2023 Sabka Bazaar Grocery Supplies Pvt. Ltd.</p>
        </Container>
      </footer>
    </div>
  )
}

export default NavigationBar;
