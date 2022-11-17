import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import NavTutorial from '../navTutorial/NavTutorial';

const Tutorial = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4">
                        <div className='mt-5'>

                            {
                                news.map(allnews => <NavTutorial
                                    key={allnews._id}
                                    news={allnews}

                                ></NavTutorial>)
                            }
                        </div>
                    </Col>
                    <Col lg="8">
                        <div className='mt-5'>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Tutorial;