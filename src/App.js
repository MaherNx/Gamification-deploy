import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import ResponsiveHeader from './Components/ResponsiveHeader'
import SideBar from './Components/SideBar'
import {Col,Row,Dropdown,InputGroup,FormControl,Button} from 'react-bootstrap'
import React, { useState } from 'react';
import LeaderBoard from '../src/Pages/LeaderBoard'
import DashBoard from '../src/Pages/DashBoard'
import Profile from '../src/Pages/Profile'
import LogIn from '../src/Pages/LogIn'
import CrossWord from '../src/Pages/CrossWord'
import PaltelCity from '../src/Pages/PaltelCity'
import ComingSoon from '../src/Pages/ComingSoon'
import Games from '../src/Pages/Games'
import CXHero from '../src/Pages/CXHero'
import VoiceData from '../src/Pages/VoiceData'
import SearchWord from '../src/Pages/SearchWord'
import QuizNight from '../src/Pages/QuizNight'
import Certificate from '../src/Pages/Certificates'
import MatchingCards from '../src/Pages/MatchingCards'









function App() {
  const [Page, setPage] = useState('DashBoard');
  const [Logged, setLogged] = useState(false);
  const [HomeLog, setHomeLog] = useState('Log');
  const [size, setSize] = useState(window.innerWidth);

  ////////////////////////user//////////////////////
  const [Name, setName] = useState('Seema Sbouh');
  const [Username, setUsername] = useState();
  const [Email, setEmail] = useState('seema.sbouh512@gmail.com');
  const [Streaks, setStreaks] = useState('10');
  const [Score, setScore] = useState();
  const [Image, setImage] = useState();
  const [Position, setPosition] = useState('Digital Internship');

 
   function updateSize() {
        console.log(window.innerWidth)
        console.log(window.innerHeight)
        console.log(window.outerWidth)
        console.log(window.outerHeight)

        setSize(window.innerWidth)
      }
      window.addEventListener('resize', updateSize);
      

  return (
    
    <div className="App hide-scroll">
      {HomeLog=='Home' ? 

      size > 786 ? 
      <div>
      <Row>
      <Col className="HeaderCol">
      <Header Logged={Logged} setLogged={setLogged} setHomeLog={setHomeLog} Streaks={Streaks} Name={Name} Email={Email} Score={Score} Image={Image} Username={Username}/>
      </Col>
      </Row>
      <Row>
        <Col lg="2" md="2" sm="3"><SideBar setPage={setPage} Page={Page} setHomeLog={setHomeLog}/></Col>
        <Col lg="10" md="10" sm="9">
          {
          
          Page=='LeaderBoard' ? <LeaderBoard/> : (Page=='DashBoard' ? <DashBoard setPage={setPage}/>: (Page=='Profile' ? <Profile Name={Name} Email={Email} Image={Image} Position={Position} Score={Score}/> : (Page=='Games' ? <Games setPage={setPage}/> : Page=='ComingSoon' ? <ComingSoon/> : Page=='CrossWord' ? <CrossWord setPage={setPage}/> :Page=='PaltelCity' ? <PaltelCity setPage={setPage}/> : Page=='CXHero' ? <CXHero setPage={setPage}/> : Page=='VoiceData' ? <VoiceData/> : Page=='SearchWord' ? <SearchWord setPage={setPage}/> : Page=='QuizNight' ? <QuizNight setPage={setPage}/> : Page=='MatchingCards' ? <MatchingCards setPage={setPage}/> : Page=='Certificate' ? <Certificate setPage={setPage}/> : <div>h</div>)))
          
          }
        </Col>
      </Row>
      </div>

      :

      <div>
      <Row>
      <Col className="HeaderCol">
      <ResponsiveHeader Logged={Logged} setLogged={setLogged} setHomeLog={setHomeLog}/>
      </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" sm="12">
          {
          
          Page=='LeaderBoard' ? <LeaderBoard/> : (Page=='DashBoard' ? <DashBoard/>: (Page=='Profile' ? <Profile/> : <div></div>))
          
          }
        </Col>
      </Row>
      </div>

      : 
      <LogIn setLogged={setLogged} setHomeLog={setHomeLog} setName={setName} setScore={setScore} setEmail={setEmail} setStreaks={setStreaks} setImage={setImage} setPosition={setPosition} setUsername={setUsername}/>
      }
      
      
    </div>
  );
}

export default App;


// 993 large

// 768 md