import React from 'react';
import Filters from '../../components/Filters';
import Table from '../../components/Table';
import {Row, Col, Container} from 'react-bootstrap'

const Layout = () => {
return <>
        <Row>
            <Col sm={3}> 
                <Filters  />
            </Col>
            <Col sm={8}>
                <Table/>
            </Col>
        </Row>

    </>
}

export default Layout