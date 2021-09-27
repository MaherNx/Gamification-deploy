import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import {Breadcrumb} from 'react-bootstrap'




export default function MatchingCards(props){
    const {setPage } = props

    return(
        <div>
            <Breadcrumb>
        <Breadcrumb.Item onClick={()=>{setPage('DashBoard')}} style={{color: 'grey'}}>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item onClick={()=>{setPage('Games')}} style={{color: 'grey'}}>
            Games Hub
        </Breadcrumb.Item>
        <Breadcrumb.Item style={{color: '#00A0D7'}}>Matching Cards Game</Breadcrumb.Item>
        </Breadcrumb>
            {/* <iframe src="https://play.unity.com/mg/other/paltel-city-1"></iframe> */}
            {/* <Unity unityContext={unityContext} /> */}
            {/* <iframe add_header Content-Security-Policy id='webgl_iframe' frameborder="0" allow="autoplay; fullscreen; vr" allowfullscreen="" allowvr="" mozallowfullscreen="true" src="https://play.unity.com/mg/other/memorycards-1?_ga=2.75974549.166015371.1632129505-762413931.1632129505" width="810" height="640" onmousewheel="" webkitallowfullscreen="true"></iframe> */}
            <iframe className="unity_frame" id='webgl_iframe' frameborder="0" allow="autoplay; fullscreen; vr" allowfullscreen="" allowvr="" mozallowfullscreen="true" src="https://play.unity3dusercontent.com/webgl/320b2694-fe3d-4cdc-a8b1-62c4542bdf2e?screenshot=false&embedType=embed" width="810" height="640" onmousewheel="" webkitallowfullscreen="true"></iframe>
        </div>

    )
}

