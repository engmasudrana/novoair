import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import './TicketList.css';

const TicketList = () => {

    const [ticket, setTicket] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetch(`https://desolate-temple-77434.herokuapp.com/ticketList`)
            .then(res => res.json())
            .then(data => {
                const ticket = data.filter(item => item._id === id);
                setTicket(ticket);
            });

    }, []);

    return (
        <>
            <Container className="mt-5 p-5">
                {
                    !!ticket.length && (
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <div className="p-5 rounded-lg">
                                    <h3 className="destiance">{ticket[0].from} - {ticket[0].to}</h3>
                                    <h4>Economy Class</h4>
                                    <h3>Price ${ticket[0].economyPrice}</h3>
                                    <p>Available Tickets: {ticket[0].economySit}</p>
                                    <Link to="/book"><Button variant="success btn-sm">Book Now</Button></Link>
                                </div>
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <div className=" p-5 rounded-lg">
                                    <h3>{ticket[0].from} - {ticket[0].to}</h3>
                                    <h4>Business Class</h4>
                                    <h3>Price ${ticket[0].businessPrice}</h3>
                                    <p>Available Tickets: {ticket[0].businessSit}</p>
                                    <Link to="/book"><Button variant="success btn-sm">Book Now</Button></Link>
                                </div>
                            </Col>
                        </Row>
                    )
                }

            </Container>
        </>
    );
};

export default TicketList;