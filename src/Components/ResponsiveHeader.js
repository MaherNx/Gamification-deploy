import {Col,Row,Navbar,Container,NavDropdown,Nav} from 'react-bootstrap'
import Logo from '../Images/Logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineFire } from 'react-icons/ai';
import '../Styles/Header.css'
import {FiSearch} from 'react-icons/fi'


export default function Header(props){
    const {Logged , setLogged , setHomeLog} = props
    function Login (){
        setHomeLog('LogIn')
    }
    return(
        <div className="header">
            <Row className="headerRow">
                {/* <Col lg="2" md="3" sm="4">
                <img src={Logo} id="Logo"></img>
                </Col> */}
              
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>


            </Row>
        </div>
    )
}