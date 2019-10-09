import React from 'react';
import Filters from '../../components/Filters';
import Table from '../../components/Table';
import { Row, Col } from 'react-bootstrap';
import BackButton from '../../components/BackButton/index';
import './styles.css'

const Layout = (props) => {
    return <>
    <div className="page_div">
    <BackButton/>
        <Row>
            <Col sm={3}>
                <Filters {...props} />
            </Col>
            <Col sm={8}>
                <Table {...props} />
            </Col>
        </Row>
        </div>
    </>
}

export default Layout