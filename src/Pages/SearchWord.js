
import '../Styles/DashBoard.css'
import {Breadcrumb} from 'react-bootstrap'


export default function SearchWord(props){
    const { setPage } = props
    return(

    //     <div class="scrollbar hide-scroll" id="style-3">
    //   <div class="force-overflow">

    //   <iframe src="https://seemasb.github.io/SearchWordDrag/" className="myFrame"></iframe>

    //   </div>
      
    // </div>

    <div>

        <Breadcrumb>
        <Breadcrumb.Item onClick={()=>{setPage('DashBoard')}} style={{color: '#00A0D7'}}>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item onClick={()=>{setPage('Games')}} style={{color: '#00A0D7'}}>
            Games Hub
        </Breadcrumb.Item>
        <Breadcrumb.Item style={{color: 'grey'}}>Search Word Game</Breadcrumb.Item>
        </Breadcrumb>

        <iframe src="https://seemasb.github.io/SearchWordDrag/" className="myFrame"></iframe> 

    </div>



    )
}

