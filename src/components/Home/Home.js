import React, { useEffect, useState } from 'react';
import { Container, Row } from "react-bootstrap";
import Card from "../Card/Card";
import Chittagong from "../../images/Chittagong.png";
import India from "../../images/india.png";
import USA from "../../images/usa.png";
import './Home.css';

const fakeData = [
    {
        "image": Chittagong,
        "title": "Chittagong",
        "price": 500
    },
    {
        "image": India,
        "title": "India",
        "price": 1500
    },
    {
        "image": USA,
        "title": "America (USA)",
        "price": 1000
    }
]

const Home = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(fakeData)
    }, [])

    return (
        <Container className="text-center">
            <h1 className="title">Featured destinations from Dhaka</h1>
            <h4 className="sub-title">Great opportunities to travel | Take a holiday | Visit Family | Enjoy yourself</h4>
            <Row>
                {
                    cards.map(card => <Card key={card.title} card={card}> </Card>)
                }
            </Row>
        </Container>
    );
};

export default Home;