import Certificate_img from '../Images/certificate.svg'
import {Breadcrumb} from 'react-bootstrap'


export default function Certificate(props){
    const {setPage} = props
    return(
        <div>

        <Breadcrumb>
        <Breadcrumb.Item onClick={()=>{setPage('DashBoard')}} style={{color: 'grey'}}>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item onClick={()=>{setPage('Certificate')}} style={{color: '#00A0D7'}}>
            Certificate
        </Breadcrumb.Item>
        </Breadcrumb>

        <img src={Certificate_img} style={{height:' 117vh'}} ></img>

        </div>
    )
}