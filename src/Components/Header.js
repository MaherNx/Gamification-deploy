import {Col,Row,Dropdown,InputGroup,FormControl,Button} from 'react-bootstrap'
import Logo from '../Images/Logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineFire } from 'react-icons/ai';
import '../Styles/Header.css'
import {FiSearch} from 'react-icons/fi'
import {IoIosNotificationsOutline} from 'react-icons/io'
import profile from '../Images/profile.svg'


import Seema1 from '../Images/Charactars/Seema1.JPG'
import Haya1 from '../Images/Charactars/Haya1.JPG'
import Omar1 from '../Images/Charactars/Omar1.JPG'
import Mohammad1 from '../Images/Charactars/Mohammad1.JPG'
import Maher1 from '../Images/Charactars/Maher1.JPG'
import Loai1 from '../Images/Charactars/Loai1.JPG'
import Sondos1 from '../Images/Charactars/Sondos1.jpeg'



export default function Header(props){
    const {Logged , setLogged , setHomeLog,Streaks,Name,Email,Score,Image,Username} = props
    console.log("my image src")
    console.log(Image)
    function Login (){
        setHomeLog('LogIn')
    }
    return(
        <div className="header">
            <Row className="headerRow">
                <Col lg="2" md="2">
                <img src={Logo} id="Logo"></img>
                </Col>
                <Col lg="2" md="2">
                        <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    All Games
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Search Word</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Paltel City</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Card Games</Dropdown.Item>
                                </Dropdown.Menu>
                        </Dropdown>
                </Col>
                <Col lg="5" md="4">
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm"><FiSearch color="#C4C4C4"/></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"  placeholder="Search"/>
                     </InputGroup>
                </Col>
                <Col lg="3" md="4">
                    <Row>

                        {/* <Col>
                        <div>
                            <AiOutlineFire/>
                            <span>3</span>
                        </div>
                        </Col>

                        <Col></Col> */}
                        <Col>
                        {Logged ?
                         <div className="Info">
                            
                            <div className="streaks_cont">
                            <AiOutlineFire color="#FF8326" size="22"/>
                            <span className="streaks">{Streaks}</span>
                            </div>
                            <IoIosNotificationsOutline size="22" className="notification"/>
                            <img src={Image=="Seema1" ? Seema1 : (Image=="Haya1" ? Haya1 : ( Image=="Maher1" ? Maher1 :(Image=="Omar1" ? Omar1 : (Image=="Loai1" ? Loai1 : (Image=="Mohammad1" ? Mohammad1  : (Image=="Sondos1" ? Sondos1 : Seema1 )))) )) } id="profile_pic"></img>
                            <div className="Profile_Naming">
                                <span>{Name}</span>
                                <span id="email">{Email}</span>
                            </div>
                        </div> 
                        
                        : <Button variant="primary" className="logIn" onClick={Login}>Log In</Button> }
                        
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}