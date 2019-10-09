import React from 'react';
import Filters from '../../components/Filters';
import Table from '../../components/Table';
import { Row, Col } from 'react-bootstrap'

const Layout = (props) => {
    return <>
        <Row>
            <Col sm={3}>
                <Filters {...props} />
            </Col>
            <Col sm={8}>
                <Table {...props} />
            </Col>
        </Row>
    </>
}

export default Layout