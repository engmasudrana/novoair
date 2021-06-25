import React from 'react';
import './Card.css'
import {Col} from "react-bootstrap";

const Card = (props) => {
    const { title, image } = props.card;
    return (
        <>
            <Col lg={4} md={6} sm={12}>
               <div className="shadow-sm rounded p-4">
                   <img className="w-100 rounded" src={image} alt="" />
                   <h3 className="country-name py-3">{title}</h3>
               </div>
            </Col>
        </>
    );
};

export default Card;