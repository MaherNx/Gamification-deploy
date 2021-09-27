import '../Styles/SideBar.css'
import {RiDashboardLine} from 'react-icons/ri'
import {AiOutlineTeam} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {AiOutlineTrophy} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import React, { useState } from 'react';
var pressed = 'DashBoard'


export default function SideBar(props){
    const { setPage,Page,setHomeLog } = props;
    // const [pressed , setPressed ] = useState('DashBoard');


    function DashBoard() {
        setPage('DashBoard')
        console.log(Page)
        // document.getElementsByClassName('target').
        // $(button).addClass('selected');
        // setPressed('DashBoard')
        // pressed = 'DashBoard'
      }

      function Leaderboard() {
        setPage('LeaderBoard')
        console.log(Page)
        // setPressed('LeaderBoard')
        // pressed = 'LeaderBoard'

      }

      function Profile() {
        setPage('Profile')
        console.log(Page)
        // setPressed('Profile')
        // pressed = 'Profile'

      }

      function Logout() {
        setHomeLog("Log")
        // setPressed('DashBoard')
      }

    return(
        <div className="SideBar">
            <button onClick={DashBoard} ><RiDashboardLine className="Side_icon"/> Dashboard</button>
            <button onClick={Leaderboard} ><AiOutlineTrophy className="Side_icon"/>Leaderboard</button>
            <button ><AiOutlineTeam className="Side_icon"/>My Teams</button>
            <button onClick={Profile} ><CgProfile className="Side_icon"/>Profile</button>
            <button onClick={Logout}><FiLogOut className="Side_icon"/>Logout</button>
        </div>
    )
}