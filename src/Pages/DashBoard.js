import {Col,Row,Carousel} from 'react-bootstrap'
import img1 from '../Images/G1.png'
import img2 from '../Images/G3.png'
import img3 from '../Images/G4.png'



import '../Styles/DashBoard.css'
import Categories from '../Components/Categories'

import game1 from '../Images/game1.svg'
import game2 from '../Images/game2.svg'
import game3 from '../Images/game3.svg'
import game4 from '../Images/game4.svg'
import game5 from '../Images/game5.svg'
import game6 from '../Images/game6.svg'


function Games(setPage){
    setPage("CrossGame")
} 

export default function DashBoard(props){
    const {setPage} = props
    return(
        <div>
           <Row>
                <Carousel fade>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Second slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="Third slide"
                    />
                    
                </Carousel.Item>
        </Carousel>
           </Row>

           <Row>
               <h5 style={{marginBottom: "10px"},{marginTop: "10px"}}>Categories</h5>
               <div className="games_cont">
                   <img src={game1} className="game_card" onClick={()=>setPage("Games")}></img>
                   <img src={game2} className="game_card" onClick={()=>setPage("CXHero")}></img>
                   <img src={game3} className="game_card" onClick={()=>setPage("ComingSoon")}></img>
                   <img src={game4} className="game_card"  onClick={()=>setPage("QuizNight")}></img>
                   <img src={game5} className="game_card" onClick={()=>setPage("Certificate")}></img>
                   {/* <img src={game6} className="game_card" onClick={()=>setPage("VoiceData")}></img> */}
               </div>
           </Row>
           {/* onClick={Games(setPage)} */}
           
            {/* <Categories/> */}
           
        </div>
    )
}