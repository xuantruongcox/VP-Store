import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import MainLayout from '../layouts/main-layout';
const ProductsPage = () => {
    let [data, setData] = useState([]);
    useEffect(() => {
        const fetchingData = async () => {
            const result = await fetch('https://vp-store.herokuapp.com/products');
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
                                        <StaticImage alt="" src="https://image.made-in-china.com/2f0j00rspavwZArDog/High-Quality-EGO-CE4-EGO-T-CE4-Electronic-Cigarette-650-900-1100mAh.jpg" />
                                    </div>
                                    <div className="product__body">
                                        <div className="product__body-title">{item.name}</div>
                                        <div className="product__body-text">{item.prices}$</div>
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