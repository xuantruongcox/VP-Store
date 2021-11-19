import * as React from 'react';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import MainLayout from '../layouts/main-layout';
const ProductsPage = () => {
    let [data, setData] = useState([]);
    useEffect(() => {
        const fetchingData = async () => {
            const result = await fetch('https://fakestoreapi.com/products');
            const allResult = await result.json();
            setData(allResult);
        }
        fetchingData();
    }, [])
    return (
        <React.Fragment>
            <MainLayout>
                <Container>
                    <Row>
                        {data.map((item, index) => {
                            return <Col xs="3" key={index}>
                                <div className="product">
                                    <div className="product__img">
                                        <img src={item.image} height="145" alt="" />
                                    </div>
                                    <div className="product__body">
                                        <div className="product__body-title">{item.title}</div>
                                        <div className="product__body-text">{item.description}</div>
                                    </div>
                                </div>

                            </Col>
                        })}
                    </Row>
                </Container>
            </MainLayout>
        </React.Fragment>
    )
}

export default ProductsPage