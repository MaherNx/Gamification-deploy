import Rank from '../Components/Rank'
import '../Styles/LeaderBoard.css'
import ProfilePic from '../Images/ProfilePic.jpeg'
import {CgCrown} from 'react-icons/cg'
import {TiArrowSortedUp} from 'react-icons/ti'
import {TiArrowSortedDown} from 'react-icons/ti'

import Seema1 from '../Images/Charactars/Seema1.JPG'
import Haya1 from '../Images/Charactars/Haya1.JPG'
import Omar1 from '../Images/Charactars/Omar1.JPG'
import Mohammad1 from '../Images/Charactars/Mohammad1.JPG'
import Maher1 from '../Images/Charactars/Maher1.JPG'
import Loai1 from '../Images/Charactars/Loai1.JPG'
import Sondos1 from '../Images/Charactars/Sondos1.jpeg'
import { Col, Row } from 'react-bootstrap'

import Maher_white from '../Images/Charactars/maher@2x.jpg'
import Loai_white from '../Images/Charactars/loay@2x.jpg'
import Sondos_white from '../Images/Charactars/sondos@2x.jpg'


import Right_feather from '../Images/Right_feather.svg'
import Left_feather from '../Images/Left_feather.svg'

// import java.util.Arrays;






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
const ScoresArray = ["seema" , "haya" , "maher"]
const Rank_Colors = ['#F45197' , '#00A0D7' , '#8331A7' , '#FF8326']

export default function LeaderBoard(){
    var i = 0 ;
    var rank_1 = Data.slice(0, 4);
    var rank_2 = Data.slice(4, 8);
    return(
        <div>
            {/* <h4>Leadeboard</h4> */}
            {/* <TiArrowSortedUp size="30" color="#8331A7  " className="up"/>
            <CgCrown size="30" color="#FF8326" className="crown"/>
            <TiArrowSortedDown size="30" color="#FFEA22" className="down "/> */}

            <div className="Leader_imgs">

                <Row>
                <Col lg="4" className="second-col">
                <div className="flex-column right">
                <span className="Rank_Number">2<sup>nd</sup></span>
                <img src={Sondos_white} id="second"></img>
                <span className="Name_Rank_Badge">Sondos Hijab</span>
                </div>
                </Col>



                <Col lg="4">
                <div className="flex-row">
                    <img src={Left_feather}></img>
                <div className="flex-column">
                <span className="Rank_Number">1<sup>st</sup></span>
                <img src={Loai_white} id="first"></img>
                <span className="Name_Rank_Badge">Loai Betawi</span>
                </div>
                    <img src={Right_feather}></img>
                </div>
                </Col>



                <Col lg="4" className="third-col">
                <div className="flex-column left">
                <span className="Rank_Number">3<sup>rd</sup></span>
                <img src={Maher_white} id="third"></img>
                <span className="Name_Rank_Badge">Maher Nahla</span>
                </div>
                </Col>
                </Row>
            </div>

            
            <div className="Ranks_cont">
                {/* {ScoresArray.map(x=>{
                    Data.map(y=>{
                        if(x == y.username){
                            <Rank Name={y.name} Score={y.score}/>
                        }
                        console.log(x)
                        console.log(y.username)
                    })
                })} */}

                <Row>
                <Col >

                {rank_1.map((x,index) =>
                     <Rank Name={x.name} Score={x.score} img_src={x.img} clr= {index}/>
                    //  i++;
                    //  <Rank Name="Seema Sbouh" Score={33}/>
                )}
                </Col>
                <Col >

                {rank_2.map((x,index) =>
                     <Rank Name={x.name} Score={x.score} img_src={x.img} clr= {index+4}/>
                    //  i++;
                    //  <Rank Name="Seema Sbouh" Score={33}/>
                )}
                </Col>

              
                </Row>
            </div>
        </div>
    )
}