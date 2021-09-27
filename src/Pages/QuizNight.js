import img1 from '../Images/img11.svg'
import img22 from '../Images/img22.svg'
import img3 from '../Images/img33.svg'
import img4 from '../Images/img44.svg'
import img5 from '../Images/img55.svg'
import img6 from '../Images/img6.svg'
import {Breadcrumb} from 'react-bootstrap'


import { useState } from 'react'
var img_array = [img1 , img22 , img3 , img4 , img5 , img6]

export default function QuizNight(props){
    const {setPage } = props
    const [index , SETindex] = useState('1')
    return(
        <div>

        <Breadcrumb>
        <Breadcrumb.Item onClick={()=>{setPage('DashBoard')}} style={{color: '#00A0D7'}}>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item onClick={()=>{setPage('QuizNight')}} style={{color: 'grey'}}>
            Quiz Night
        </Breadcrumb.Item>
        </Breadcrumb>


        <div style={{backgroundColor: '#F5F5F5' , borderRadius: '27px' , textAlignLast: 'center' } }>
            {
                index == '1' ? <img style={{width:'67%' , marginTop: '20px'}} src={img1} onClick={()=>SETindex('2')}></img>
                :
                index == '2' ? <img style={{width:'67%', marginTop: '20px'}} src={img22} onClick={()=>SETindex('3')}></img>
                :
                index == '3' ? <img style={{width:'67%' , marginTop: '20px'}} src={img3} onClick={()=>SETindex('4')}></img>
                :
                index == '4' ? <img style={{width:'67%' , marginTop: '20px', marginTop: '20px'}} src={img4} onClick={()=>SETindex('5')}></img>
                :
                <img style={{width:'67%' , marginTop: '20px'}} src={img5}></img>
                // :
                // <img style={{width:'90%'}} src={img6} ></img>
            }

        </div>
        </div>
        
    )
}