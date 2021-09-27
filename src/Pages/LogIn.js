import {Form,Button,Row,Col} from 'react-bootstrap'
import '../Styles/LogIn.css'
import haya from '../Images/LoginPic.svg'
import haya3 from '../Images/haya3.svg'
import haya_login from '../Images/haya_login.png'

import Logo from '../Images/Logo.svg'
import React, { useState } from 'react';
import ProfilePic from '../Images/ProfilePic.jpeg'
import Pic1 from '../Images/pic1.jpg'
import Pic2 from '../Images/pic2.jpg'

////////////////////////////////////////////////////////////
import Seema1 from '../Images/Charactars/Seema1.JPG'
import Haya1 from '../Images/Charactars/Haya1.JPG'
import Omar1 from '../Images/Charactars/Omar1.JPG'
import Mohammad1 from '../Images/Charactars/Mohammad1.JPG'
import Maher1 from '../Images/Charactars/Maher1.JPG'
import Loai1 from '../Images/Charactars/Loai1.JPG'
// import Sondos1 from '../Images/Charactars/Sondos1.JPG'




const Data = [{
    username: "seema",
    name:"Seema Sbouh",
    password: "123",
    email:"seema.sbouh512@gmail.com",
    streaks:10,
    score:990,
    img:"Seema1",
    position: "Digital Internship"
},
{
    username: "haya",
    name:"Haya Mikkawi",
    password: "123",
    email:"haya.sbouh512@gmail.com",
    streaks:7,
    score:980,
    img:"Haya1",
    position: "Digital Internship"
},
{
    username: "maher",
    name:"Maher Nahla",
    password: "123",
    email:"Maher@gmail.com",
    streaks:10,
    score:900,
   img:"Maher1",
    position: "Digital Internship"
},
{
    username: "omar",
    name:"Omar Hnnoun",
    password: "123",
    email:"Omar@gmail.com",
    streaks:10,
    score:880,
    img:"Omar1",
    position: "Digital Internship"
},
{
    username: "sondos",
    name:"Sondos Hijab",
    password: "123",
    email:"Sondos@gmail.com",
    streaks:10,
    score:850,
    img:"Sondos1",
    position: "Digital Internship"
},
{
    username: "mohammad",
    name:"Mohammad Qadoumi",
    password: "123",
    email:"Mohammad@gmail.com",
    streaks:10,
    score:760,
    img:"Mohammad1",
    position: "Digital Internship"
},
{
    username: "loai",
    name:"Loai Betawi",
    password: "123",
    email:"Loai@gmail.com",
    streaks:10,
    score:750,
    img:"Loai1",
    position: "Digital Internship"
}]

function logging (User,Pass,setLogged,setHomeLog,setName, setScore,setEmail,setStreaks,setImage,setPosition,setUsername){
    Data.map(x=>{
        if(x.username == User){
            if(x.password == Pass){
                setLogged(true)
                setHomeLog('Home')
                setName(x.name)
                setScore(x.score)
                setEmail(x.email)
                setStreaks(x.streaks)
                setImage(x.img)
                setPosition(x.position)
                setUsername(x.username)
            }
        }
    })
}
export default function LogIn(props){
    const [User, setUser] = useState();
    const [Pass, setPass] = useState();
    const {setLogged,setHomeLog,setName, setScore,setEmail,setStreaks,setImage,setPosition,setUsername} = props
    // console.log(User)
    return(
        <div>
            <Row>
                
                <Col lg="7">
                    <Form className="Form">
                     <div className="form_header">
                            <img src={Logo} ></img>
                            <span className="form_title">Login to your account</span>
                    </div>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="form_label">Username</Form.Label>
                                <Form.Control className="form_input" type="usename" placeholder="Enter your username" onChange={ (event) => { setUser(event.target.value) } }/>
                               
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="form_label">Password</Form.Label>
                                <Form.Control className="form_input" type="password" placeholder="Password" onChange={ (event) => { setPass(event.target.value) } }/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remeber me" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="LoginBtn" onClick={()=>{setLogged(true) ; setHomeLog('Home')}}>
                            {/* onClick={logging(User,Pass,setLogged,setHomeLog,setName, setScore,setEmail,setStreaks,setImage,setPosition,setUsername)} */}
                                Login
                            </Button>
                        </Form>
                </Col>

                <Col>
                    <div className="LoginSide">
                        <img src={haya_login}>
                            
                        </img>
                        {/* <img src={haya3}></img> */}
                    </div> 
                </Col>
            </Row>
           
        </div>
    )
}