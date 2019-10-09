import React, { useState, useEffect, useRef } from 'react';
import { Table } from 'react-bootstrap';
import useGlobal from '../../store';
import previousState from '../../utils/previousState';
import compare from '../../utils/compareObjects';
import FetchData from '../../graphql/utils';
import { getBoxHistory } from '../../graphql/queries';
import './main.css';

const TableComponent = (props) => {
    const [globalState, globalActions] = useGlobal();
    const { tableQuery } = globalState
    const { date, time, boxes, box, location } = tableQuery
    const { comp } = props;
    const [data, setData] = useState({});
    const [query, setQuery] = useState(<></>);
    const prevState = previousState(tableQuery);
    useEffect(() => {
        if (!compare(prevState, tableQuery)) {
            if (comp === 'sc1' || comp === 'sc2') {
                setQuery(
                    // FetchData(getLists(), setData, {})
                );
            }
            else if (comp === 'sc3') {
                setQuery(
                    FetchData(getBoxHistory, setData, { id: box })
                );
            }
            else {
                setQuery(
                    // FetchData(getLists(), setData, {})
                );
            }
        }
    });
    let label = ""
    let thead = <></>
    let tbody = <></>
    if (comp === 'sc2' && time !== '') {
        label = `The location of the selected boxes at ${time}`
        thead =
            <thead>
                <tr>
                    <th>Box</th>
                    <th>Location</th>
                    <th>Content</th>
                </tr>
            </thead>
        tbody = data.boxHistory ? data.boxHistory.map(h => {
            return <tr>
                <td>{h.dateTime} </td>
                <td>{h.location} </td>
                <td>{h.components} </td>
            </tr>
        }) : <></>
    }
    else if (comp === 'sc3' && box) {
        label = `The timeline of box ${box}`
        thead =
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Location</th>
                    <th>Content</th>
                </tr>
            </thead>
        tbody = data.boxHistory ? data.boxHistory.map(h => {
            return <tr>
                <td>{h.dateTime} </td>
                <td>{h.location} </td>
                <td>{h.components} </td>
            </tr>
        }) : <></>
    }
    else if (comp === 'sc4' && location) {
        label = `The timeline of location ${location}`
        thead =
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Box</th>
                    <th>Content</th>
                </tr>
            </thead>
        tbody = data.boxHistory ? data.boxHistory.map(h => {
            return <tr>
                <td>{h.dateTime} </td>
                <td>{h.location} </td>
                <td>{h.components} </td>
            </tr>
        }) : <></>
    }
    return <>
        <div className="infotxt">
            {label}
        </div>
        <Table striped bordered hover>
            {thead}
            <tbody>
                {tbody}
            </tbody>
        </Table>
        {query}
    </>
}

export default TableComponent;