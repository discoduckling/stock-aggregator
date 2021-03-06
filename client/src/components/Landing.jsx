import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import TickerImg from '../assets/ticker_screenshot_edit_2.png';
import Footer from '../components/Footer';

const landing = () => {
    return(
        <div>
        <Container>
            <Row>
                <Col sm='12' md='6' className="landing__box landing__box--left">
                    An Easier Way to Monitor Your Assets
                    <div className="landing__btn-group">
                        <Button className='landing__btn' href="/auth/login">Get Started!</Button>
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
        <Footer />
        </div>
    )
};

export default landing;