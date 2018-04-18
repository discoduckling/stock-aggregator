import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import TickerImg from '../assets/ticker_screenshot_edit_2.png';


const landing = () => {
    return(
        <Container>
            <Row>
                <Col sm='12' md='6' className="landing__box landing__box--left">
                    An Easier Way to Monitor Your Assets
                    <div className="landing__btn-group">
                        <Button size='lg' className='landing__btn'>Get Started!</Button>
                    </div>
                </Col>
                <Col sm='12' md='6' className="landing__box landing__box--right">
                    <img 
                        src={TickerImg} 
                        alt="Example Dashboard" 
                    />
                </Col>
            </Row>
        </Container>
    )
};

export default landing;