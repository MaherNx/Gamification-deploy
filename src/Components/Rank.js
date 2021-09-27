
import '../Styles/LeaderBoard.css'
import {AiFillThunderbolt} from 'react-icons/ai'
import profile from '../Images/profile.svg'

import Seema1 from '../Images/Charactars/Seema1.JPG'
import Haya1 from '../Images/Charactars/Haya1.JPG'
import Omar1 from '../Images/Charactars/Omar1.JPG'
import Mohammad1 from '../Images/Charactars/Mohammad1.JPG'
import Maher1 from '../Images/Charactars/Maher1.JPG'
import Loai1 from '../Images/Charactars/Loai1.JPG'
import Sondos1 from '../Images/Charactars/Sondos1.jpeg'

export default function Rank (props){
    const {Name  , Score , img_src , clr} = props
    const Rank_Colors = ['#F45197' , '#00A0D7' , '#8331A7' , '#FF8326']

    return(
        <div className="Rank" style={{backgroundColor: Rank_Colors[clr%4]}}>
            <span className="Rank_Score">{clr+1}<sup>th</sup></span>
            <span className="Rank_Name">{Name}</span>
            {/* <img className="rank_img" src={img_src=="Seema1" ? Seema1 : (img_src=="Haya1" ? Haya1 : ( img_src=="Maher1" ? Maher1 :(img_src=="Omar1" ? Omar1 : (img_src=="Loai1" ? Loai1 : (img_src=="Mohammad1" ? Mohammad1  : (img_src=="Sondos1" ? Sondos1 : Seema1 )))) )) }></img> */}

            <div>
            <img className="rank_img" src={img_src=="Seema1" ? Seema1 : (img_src=="Haya1" ? Haya1 : ( img_src=="Maher1" ? Maher1 :(img_src=="Omar1" ? Omar1 : (img_src=="Loai1" ? Loai1 : (img_src=="Mohammad1" ? Mohammad1  : (img_src=="Sondos1" ? Sondos1 : Seema1 )))) )) }></img>

            {/* <AiFillThunderbolt color="#FFD83B"/> */}
            </div>
        </div>
    )
}