import { Navbar, Container } from "react-bootstrap";
import Styled from "styled-components";

const Styles = Styled.div`

font-family: 'Roboto Condensed', sans-serif;

& .nav__Container{
    margin : 0px;
    padding:0px;
    width:100%
}

h1{
    color:red
}


@media (min-width: 576px){

    .container, .container-sm {
        max-width: 100%
    }
}


`;

const Header = () => {
  return (
    <Styles>
      <Container className="nav__Container">
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#"><h1>MovieFlix</h1></Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </Styles>
  );
};

export default Header;
