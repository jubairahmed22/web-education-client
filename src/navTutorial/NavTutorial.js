import React, { createContext } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './NavTutorial.css'
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import CheckOut from '../checkOut/CheckOut';
import './NavTutorial.css'





const ref = React.createRef();



const NavTutorial = ({ news }) => {




    const { title, example, _id, image_url } = news;

    return (
        <div>

            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) =>

                    <button className='pdfbtn' onClick={toPdf}>Generate Pdf</button>}
            </Pdf>

            <Card className='navCardBody' ref={ref} >
                <Card.Header className='cardTitle'>{title}</Card.Header>
                <ListGroup variant="flush">

                    <Card.Img variant="top" src={image_url} />
                    <ListGroup.Item>{example.one}</ListGroup.Item>
                    <ListGroup.Item>{example.two}</ListGroup.Item>
                    <ListGroup.Item>{example.three}</ListGroup.Item>
                    <ListGroup.Item>{example.four}</ListGroup.Item>
                    <ListGroup.Item>{example.five}</ListGroup.Item>
                    <ListGroup.Item>{example.six}</ListGroup.Item>


                </ListGroup>
                <Link className='checkoutAcc' to={`/checkOut/${_id}`}>Get premium access</Link>
            </Card>
        </div>
    );
};


export default NavTutorial;