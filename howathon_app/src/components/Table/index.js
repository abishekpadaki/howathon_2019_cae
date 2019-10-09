import React from 'react';
import {Table} from 'react-bootstrap';
import './main.css';

const TableComponent = () => {
    const date = '12-10-2019'
    const time = '12:12 PM'
    return <>
        <div className="infotxt">
            Position of boxes on {date} at {time}
        </div>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
        </>
}

export default TableComponent;