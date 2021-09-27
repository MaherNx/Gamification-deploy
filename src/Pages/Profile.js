import {Col,Row,ProgressBar} from 'react-bootstrap'
import ProfilePic from '../Images/ProfilePic.jpeg'
import Badges from '../Images/Badges.svg'
import {BsFillStarFill} from 'react-icons/bs'
import {IoMdTrophy} from 'react-icons/io'

import '../Styles/Profile.css'
import Seema1 from '../Images/Charactars/Seema1.JPG'
import Haya1 from '../Images/Charactars/Haya1.JPG'
import Omar1 from '../Images/Charactars/Omar1.JPG'
import Mohammad1 from '../Images/Charactars/Mohammad1.JPG'
import Maher1 from '../Images/Charactars/Maher1.JPG'
import Loai1 from '../Images/Charactars/Loai1.JPG'
import Sondos1 from '../Images/Charactars/Sondos1.jpeg'

export default function Profile(props){
    const {Name , Email,Image,Position,Score} = props
    return(
        <div>
            <h4 id="profile_title">Profile</h4>
            <Row id="info_row">
                <Col lg="2" sm="6">
                    <img src={Image=="Seema1" ? Seema1 : (Image=="Haya1" ? Haya1 : ( Image=="Maher1" ? Maher1 :(Image=="Omar1" ? Omar1 : (Image=="Loai1" ? Loai1 : (Image=="Mohammad1" ? Mohammad1  : (Image=="Sondos1" ? Sondos1 : Seema1 )))) )) } className="Profile_img"></img>
                    {/* <span className="score_span">{Score}</span> */}
                </Col>
                <Col lg="auto" sm="6">
                <div className="profile_div">
                    <span className="profile_div_span1">{Name}</span>
                    <span className="profile_div_span2">{Position}</span>
                </div>
                </Col>
            </Row>
            <Row>
                <Col lg="6" >
                    <div className="Badges_cont">
                        <span style={{marginBottom: "20px"}}>Badges</span>
                        <img src={Badges}></img>
                    </div>
                </Col>
                <Col lg="5">
                    <div className="Progress_cont">
                    <span style={{marginBottom: "10px"}}>Level Progress</span>
                    <div className="inline" style={{marginBottom: "60px"}}>
                    <ProgressBar striped variant="info" now={20} />
                    <BsFillStarFill color="#FFC107" size="25" className="icon"/>
                    </div>

                    <span style={{marginBottom: "10px"}}>Trophies</span>
                    <div className="inline">
                    <ProgressBar striped variant="danger" now={60} />
                    <IoMdTrophy color="#FFC107" size="25" className="icon"/>
                    </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
            </Row>
        </div>
    )
}