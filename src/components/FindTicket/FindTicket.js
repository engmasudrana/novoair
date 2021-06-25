import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const FindTicket = () => {
    
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('')
    const history = useHistory()
    const [find, setFind] = useState({});

    useEffect(() => {
        fetch('https://desolate-temple-77434.herokuapp.com/ticketList')
            .then(res => res.json())
            .then(data => setFind(data))
    }, [])

    const onSubmit = data => {
        const result = find.filter(item => item.from === data.from && item.to === data.to)
        if (result.length > 0) {
            console.log('inside redirect');
            history.push(`/ticket/${result[0]._id}`)
        }
        else {
            console.log('inside error')
            setError('No Plains available for this route');
        }
    };

    return (
        <>
            <Container className="mt-5 p-5">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className="py-5 ">
                            <h1 className="top-title">Welcome to</h1>
                            <h3 className="top-title">Novoair Airlines</h3>
                            <h3 className="top-title">E-Ticketing Service</h3>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="ml-auto">
                        <div className="shadow-lg p-5  rounded">
                            {error && error}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label>Flying From</label>
                                <input className="form-control"  {...register("from")} placeholder="from" />
                                <label className="mt-3">Flying To</label>
                                <input className="form-control"  {...register("to")} placeholder="to" />
                                <label className="mt-3">Departing</label>
                                <input className="form-control" type="date" {...register("departing")} />
                                <label className="mt-3">Returning</label>
                                <input className="form-control" type="date" {...register("returning")} /> <br />
                                <input className="btn btn-success btn-block" type="submit" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default FindTicket;