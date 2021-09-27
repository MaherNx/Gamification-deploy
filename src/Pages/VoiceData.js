import { Container , Row , Col} from "react-bootstrap";
import VoiceDataPic from '../Images/VoiceData.svg'


export default function VoiceData(){
    return(
        <Container>
            <Row>
                <Col>
                    <img src={VoiceDataPic}></img>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tortor aenean lectus et in sit est adipiscing.
                        Nec feugiat non dui ut amet morbi sem aenean integer. Massa risus vel vitae volutpat mattis 
                        fames proin cursus a. Ac, vestibulum quis lectus nunc tellus.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <button>From text to voice</button> 
                        <button>From voice to text</button>      
                    </div> 
                </Col>
            </Row>
        </Container>
    )
}