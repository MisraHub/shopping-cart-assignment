import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import ProductListing from './components/productListing';
import NavigationBar from './components/navigationBar';
import {Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './asset/styles/main.css';

function App() {
  return (
    <Container fluid>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route path="/productListing" element={<ProductListing />} />
        </Route>
      </Routes>

    </Container>
  );
}

export default App;
