import React from 'react';
import FindTicket from "../FindTicket/FindTicket";
import { Container } from "react-bootstrap";
import './TopBanner.css'

const TopBanner = () => {
    return (

        <Container fluid={true} className="p-2 overflow-hidden top-bg">
            <div>
                <FindTicket />
            </div>
        </Container>

    );
};

export default TopBanner;