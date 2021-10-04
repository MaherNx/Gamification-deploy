import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import {Breadcrumb} from 'react-bootstrap'
import video from '../Images/PaltelCityVid.mp4'



const unityContext = new UnityContext({
  loaderUrl: "./3.loader.js",
  dataUrl: "./3.data",
  frameworkUrl: "./3.framework.js",
  codeUrl: "./3.wasm",
});

export default function PaltelCity(props){
    const {setPage } = props

    return(
        <div>
            <Breadcrumb>
        <Breadcrumb.Item onClick={()=>{setPage('DashBoard')}} style={{color: '#00A0D7'}}>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item onClick={()=>{setPage('Games')}} style={{color: '#00A0D7'}}>
            Games Hub
        </Breadcrumb.Item>
        <Breadcrumb.Item style={{color: 'grey'}}>Paltel City Game</Breadcrumb.Item>
        </Breadcrumb>
            {/* <iframe src="https://play.unity.com/mg/other/paltel-city-1"></iframe> */}
            {/* <Unity unityContext={unityContext} /> */}
            {/* <iframe add_header Content-Security-Policy id='webgl_iframe' frameborder="0" allow="autoplay; fullscreen; vr" allowfullscreen="" allowvr="" mozallowfullscreen="true" src="https://play.unity.com/mg/other/memorycards-1?_ga=2.75974549.166015371.1632129505-762413931.1632129505" width="810" height="640" onmousewheel="" webkitallowfullscreen="true"></iframe> */}
            {/* <iframe className="unity_frame" id='webgl_iframe' frameborder="0" allow="autoplay; fullscreen; vr" allowfullscreen="" allowvr="" mozallowfullscreen="true" src="https://play.unity3dusercontent.com/webgl/320b2694-fe3d-4cdc-a8b1-62c4542bdf2e?screenshot=false&embedType=embed" width="810" height="640" onmousewheel="" webkitallowfullscreen="true"></iframe> */}
           

            <video width="100%" height="600px" controls>
  <source src={video} type="video/mp4"></source>
</video>
        </div>

    )
}

