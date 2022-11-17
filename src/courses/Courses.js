import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Courses.css'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Courses = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://web-education-server.vercel.app/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])



    return (
        <div>

            <Container>
                <Row lg="2">
                    <Col lg="2">
                        <div className='bar'>
                            {
                                categories.map(category =>
                                    <p key={category.id}>
                                        <Link className='linkBot' to={`/tutorial/${category.id}`}>{category.name}</Link>
                                    </p>
                                )

                            }
                        </div>
                    </Col>
                    <Col lg="10">

                        <div >

                            <div className='allCard'>
                                {
                                    categories.map(category =>
                                        <Card className='allCard' key={category.id}>
                                            <Card.Img variant="top" src={category.img} />
                                            <Card.Body>
                                                <Card.Title>{category.name}</Card.Title>

                                                <Link className='bot text-center' to={`/tutorial/${category.id}`}>Details</Link>
                                            </Card.Body>
                                        </Card>

                                    )

                                }

                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses; <h2>This is courses</h2>