import {Col,Container,Row} from 'react-bootstrap'
import CXHeroPic from '../Images/CXHero.svg'
import CXHero_logo from '../Images/CXHero_logo.svg'
import { Form , Button} from 'react-bootstrap'
import '../Styles/CXHero.css'
import Seema1 from '../Images/Charactars/Seema1.JPG'

import {BsUpload} from 'react-icons/bs'

import {Breadcrumb} from 'react-bootstrap'




export default function CXHero(props){
    const {setPage} = props
    // const actualBtn = document.getElementById('actual-btn');

    // const fileChosen = document.getElementById('file-chosen');

    // actualBtn.addEventListener('change', function(){
    // fileChosen.textContent = this.firstChild.name
    // })
    return(

        <div>

        <Breadcrumb>
        <Breadcrumb.Item onClick={()=>{setPage('DashBoard')}} style={{color: '#00A0D7'}}>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item onClick={()=>{setPage('CXHero')}} style={{color: 'grey'}}>
            CX Hero
        </Breadcrumb.Item>
        </Breadcrumb>


        
        <Container className="CXHero_container">
        <Row>
            <Col className="center_align">
            <div>
                <img src={CXHeroPic}></img>
                <div>
                    <img src={CXHero_logo}></img>
                    <span>Of the Month</span>

                </div>
            </div>
            </Col>
            {/* <Col> */}
            {/* <img src={Seema1} className="cx_winner"></img> */}
            {/* </Col> */}
        </Row>

        <Row>
            <Col className="center_align">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tortor aenean lectus et in sit est adipiscing.
                Nec feugiat non dui ut amet morbi sem aenean integer. Massa risus vel vitae volutpat mattis 
                fames proin cursus a. Ac, vestibulum quis lectus nunc tellus.</p>
            </Col>
        </Row>

        <Row>
            <Col>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name Of The Initiative</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Row>
                    <Col>
                {/* <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload images (optional)</Form.Label>
                    <Form.Control type="file" />
                </Form.Group> */}


                <Form.Label>Upload images (optional)</Form.Label>

                <form action="/action_page.php">
                    <label for="actual-btn" className="file_upload"><BsUpload color="#ffff" size={22}/></label>
                    <input type="file"id="actual-btn" name="filename" className="file_upload" hidden></input>
                    <span id="file-chosen"></span>
                </form>
                </Col>

                <Col>
                {/* <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload videos (optional)</Form.Label>
                    <Form.Control type="file" />
                </Form.Group> */}

                <Form.Label>Upload videos (optional)</Form.Label>

                <form action="/action_page.php">
                    <label for="actual-btn" className="file_upload"><BsUpload color="#ffff" size={22}/></label>
                    <input type="file"id="actual-btn" className="file_upload" hidden></input>
                    <span id="file-chosen"></span>
                </form>
                </Col>
                </Row>
                <Row id="hero_submit">
                <Button variant="primary" type="submit" className="submit_hero">
                    Submit
                </Button>

        

                 

                  {/* <div className="m-3">
      <label className="mx-3">Choose file: </label>
      <input className="d-none" type="file" />
      <button className="btn btn-outline-primary">Upload</button>
    </div> */}
                </Row>
        </Form>
            </Col>

        </Row>
</Container>
</div>
    )
}