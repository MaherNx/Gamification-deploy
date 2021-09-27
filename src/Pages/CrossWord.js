import React, {Component} from 'react';
import { useEffect} from 'react';
import { Helmet } from "react-helmet";
import {ImportScript} from '../CustomHooks/ImportScript'
import '../Styles/DashBoard.css'
// import '../JavaScripts/action.js'
// import '../JavaScripts/myjquery.js'
import '../JavaScripts/test.js'
// import $ from 'jquery'
// import j from '../Cross Word/index.html'
import {Breadcrumb} from 'react-bootstrap'


import {Call1 , Call2  , Call3} from '../CallingFunc/Call1'
import ScriptTag from 'react-script-tag';

export default function CrossWord(props){
  const {setPage } = props
  return(
        <div>

        <Breadcrumb>
        <Breadcrumb.Item onClick={()=>{setPage('DashBoard')}} style={{color: 'grey'}}>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item onClick={()=>{setPage('Games')}} style={{color: 'grey'}}>
            Games Hub
        </Breadcrumb.Item>
        <Breadcrumb.Item style={{color: '#00A0D7'}}>Cross Word Game</Breadcrumb.Item>
        </Breadcrumb>

        <iframe src="https://seemasb.github.io/CrossWordDrag/" className="myFrame"></iframe>

        </div>
  )
}

// class CrossWord<div>

// <Breadcrumb>
// <Breadcrumb.Item onClick={()=>{setPage('DashBoard')}}>Dashboard</Breadcrumb.Item>
// <Breadcrumb.Item onClick={()=>{setPage('Games')}}>
//     Games Hub
// </Breadcrumb.Item>
// </Breadcrumb>

// <iframe src="https://seemasb.github.io/CrossWordDrag/" className="myFrame"></iframe>

// </div>efault CrossWord

// export default function CrossWord(){


//     useEffect(() => {
//                 const script = document.createElement('script');
            
//                 script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js';
//                 script.async = true;
//                 script.type="text/babel"
            
//                 document.body.appendChild(script);


//                 const script2 = document.createElement('script');
            
//                 script2.src = '../JavaScripts/action.js';
//                 script2.async = true;
//                 script2.type="text/babel"
            
//                 document.body.appendChild(script2);


//                 const script3 = document.createElement('script');
            
//                 script3.src = '../JavaScripts/myjquery.js';
//                 script3.async = true;
            
//                 script3.type="text/babel"
//                 document.body.appendChild(script3);
    
//         return () => {
//           document.body.removeChild(script);
//           document.body.removeChild(script2);
//           document.body.removeChild(script3);
//         }
//       }, []);


//     return(
//         <div>
//               {/* <div class="header"><img src="paltelLogo.png" width="65px"><span>CrossWords Game</span></div> */}
//               <div class="puzzle-container"></div>
//         </div>
//     )
// }

// export default function CrossWord(){

//   useEffect(()=>{
//     <div>
//          <ScriptTag isHydrating={true} src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js" type="text/babel" ></ScriptTag>
//             <ScriptTag isHydrating={true} src="../JavaScripts/action" type="text/babel" ></ScriptTag>
//             <ScriptTag isHydrating={true} src="../JavaScripts/myjquery" type="text/babel" ></ScriptTag>

//             </div>
//   })
//     return(
//         <div class="puzzle-container">
//             {/* <Helmet>
//             <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js" type="text/javascript"></script>
//             <script src="../JavaScripts/action" type="text/javascript"></script>
//             <script src="../JavaScripts/myjquery" type="text/javascript"></script>
//             </Helmet> */}

//             {/* <ScriptTag isHydrating={true} src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js" type="text/babel" ></ScriptTag>
//             <ScriptTag isHydrating={true} src="../JavaScripts/action" type="text/babel" ></ScriptTag>
//             <ScriptTag isHydrating={true} src="../JavaScripts/myjquery" type="text/babel" ></ScriptTag> */}
//         </div>
//     )
// }


// const CrossWord = () => {
//     ImportScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js');
//     ImportScript('../JavaScripts/action');
//     ImportScript('../JavaScripts/myjquery');
  
//     // rest of your component
//     return(
//     <div class="puzzle-container"></div>
//     )
//   }
// export default CrossWord
