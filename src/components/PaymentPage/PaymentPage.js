import React, { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import ProcessPayment from "../../Payment/ProcessPayment/ProcessPayment";
import strip from '../../images/stripe.svg';

const PaymentPage = () => {

    const [bookingData, setBookingData] = useState(null);

    const handlePaymentSuccess = () => {

    }

    return (
        <>
            <Container className="mt-5 p-5">
                <Row>
                    <Col lg={6} md={6} sm={12} className="">
                        <div className="rounded-lg p-5  mt-5">
                            <h6 className="mb-4">Pay for Ticket</h6>
                            <ProcessPayment handlePayment={handlePaymentSuccess} />
                        </div>
                    </Col>

                    <Col lg={6} md={6} sm={12}>
                        <img className="w-100 mt-3" src={strip} alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PaymentPage;