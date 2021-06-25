import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import coming from "../../images/imagecominsoon.gif";

const ComingSoon = () => {
    return (
        <>
            <Container className="text-center p-5">
                <Row>
                    <Col className="m-auto">
                        <img className="w-25" src={coming} alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ComingSoon;