import {Card, Col,Row , Breadcrumb} from 'react-bootstrap'
import React, { useState } from 'react';
import CrossWords from '../Images/CrossWords.svg'
import Cards from '../Images/Cards.svg'
import SearchWords from '../Images/SearchWords.svg'
import PaltelCityPic from '../Images/PaltelCityPic.svg'
import CardsPic from '../Images/CardsPic.svg'
import CrossWordPic from '../Images/CrossWordPic.svg'
import SearchWordPic from '../Images/SearchWordPic.svg'
import PaltelCity from '../Images/PaltelCity.svg'
import '../Styles/Games.css'


export default function Games(props){
    const {setPage} = props
    const [GameName , setGameName] = useState('PaltelCity')
    return(
        <div>

        <Breadcrumb>
        <Breadcrumb.Item onClick={()=>{setPage('DashBoard')}} style={{color: '#00A0D7'}}>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item onClick={()=>{setPage('Games')}} style={{color: 'grey'}}>
            Games Hub
        </Breadcrumb.Item>
        </Breadcrumb>


        
        <div className={GameName=="PaltelCity" ? 'Games' : (GameName=="Cards" ? 'Purple' : (GameName=="CrossWord" ? 'Pink' : (GameName=="SearchWord" ? 'Blue' : 'Games')))}>
            <Row>
               
                {GameName=='PaltelCity' ? 
                 <div className="PaltelCityCont">
                      <Col lg="4" className="Col4">
                     <div>
                     <span style={{color:'white'}}>Paltel City<br></br> Game</span>
                     <button onClick={()=>{setPage('PaltelCity')}} style={{color:'#FFEA22', backgroundColor:'white'}}>Play Now</button>
                     </div>
                     </Col>
                     <Col lg="auto" className="ColAuto">
                     <img src={PaltelCityPic}></img>
                     </Col>
                 </div>
                :
                GameName=='Cards' ? 
                <div className="PaltelCityCont CardsCont">
                      <Col lg="4" className="Col4">
                     <div>
                     <span style={{color:'white'}}>Match Cards<br></br> Game</span>
                     <button onClick={()=>{setPage('MatchingCards')}} style={{color:'#8331A7', backgroundColor:'white'}}>Play Now</button>
                     </div>
                     </Col>
                     <Col lg="auto" className="ColAuto">
                     <img src={CardsPic}></img>
                     </Col>
                 </div>
                :
                GameName=='CrossWord' ? 
                <div className="PaltelCityCont CardsCont">
                      <Col lg="4" className="Col4">
                     <div>
                     <span style={{color:'white'}}>Cross Word<br></br> Game</span>
                     <button onClick={()=>{ setPage('CrossWord')}} style={{color:'#F45197', backgroundColor:'white'}}>Play Now</button>
                     </div>
                     </Col>
                     <Col lg="auto" className="ColAuto">
                     <img src={CrossWordPic} style={{width: '66%'}}></img>
                     </Col>
                 </div>
                :
                GameName=='SearchWord' ? 
                <div className="PaltelCityCont CardsCont">
                      <Col lg="4" className="Col4">
                     <div>
                     <span style={{color:'white'}}>Search Word<br></br> Game</span>
                     <button onClick={()=>{setPage('SearchWord')}} style={{color:'#00A0D7', backgroundColor:'white'}}>Play Now</button>
                     </div>
                     </Col>
                     <Col lg="auto" className="ColAuto">
                     <img src={SearchWordPic} style={{width:"69%" , paddingLeft: "73px"}}></img>
                     </Col>
                 </div>

                 : 
                 <div>none</div>
                 }
                 
            </Row>
            <Row>
                <Col>
                <div className="games_slider">
                    <img src={PaltelCity} onClick={()=>{setGameName("PaltelCity")}}></img>
                    <img src={CrossWords} onClick={()=>{setGameName("CrossWord")}}></img>
                    <img src={Cards} onClick={()=>setGameName("Cards")}></img>
                    <img src={SearchWords} onClick={()=>{setGameName("SearchWord"); }}></img>
                    
                </div>
                </Col>
            </Row>
        </div>
        </div>
    )
}