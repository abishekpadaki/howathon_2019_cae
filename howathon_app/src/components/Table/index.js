import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import useGlobal from '../../store';
import previousState from '../../utils/previousState';
import compare from '../../utils/compareObjects';
import { epochToTime } from '../../utils/timeConversions'
import FetchData from '../../graphql/utils';
import { getBoxHistory, getLocationHistory } from '../../graphql/queries';
import './main.css';

const TableComponent = (props) => {
    const [globalState] = useGlobal();
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
                    FetchData(getLocationHistory, setData, { location })
                );
            }
        }
    });
    let label = ""
    let thead = <></>
    let tbody = <></>
    let timeLine = <></>
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
                <td>{epochToTime(h.dateTime)} </td>
                <td>{h.location} </td>
                <td>{h.components} </td>
            </tr>
        }) : <></>
    }
    else if (comp === 'sc3' && box) {
        label = `The timeline of box - ${box}`
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
                <td>{epochToTime(h.dateTime)} </td>
                <td>{h.location} </td>
                <td>{h.components} </td>
            </tr>
        }) : <></>
        timeLine = data.boxHistory ? data.boxHistory.map((h, i) => {
            return (
                < div class={`containerT ${i % 2 === 0 ? 'left' : 'right'}T`} >
                    <div class="content">
                        <p>{epochToTime(h.dateTime)}</p>
                        <p>{h.location}</p>
                    </div>
                </div >
            )
        }) : <></>
    }
    else if (comp === 'sc4' && location) {
        label = `The timeline of location - ${location}`
        thead =
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Box</th>
                    <th>Content</th>
                </tr>
            </thead>
        tbody = data.locationHistory ? data.locationHistory.map(h => {
            return <tr>
                <td>{epochToTime(h.dateTime)} </td>
                <td>{h.id} </td>
                <td>{h.components} </td>
            </tr>
        }) : <></>

        timeLine = data.locationHistory ? data.locationHistory.map((h, i) => {
            return (
                < div class={`containerT ${i % 2 === 0 ? 'left' : 'right'}T`} >
                    <div class="content">
                        <p>{epochToTime(h.dateTime)}</p>
                        <p>{h.id}</p>
                    </div>
                </div >
            )
        }) : <></>
    }
    return <>
        <div className="label">
            {label}
        </div>
        <Table striped bordered hover>
            {thead}
            <tbody>
                {tbody}
            </tbody>
        </Table>
        {query}
        <div class="timeline">
            {timeLine}
        </div>
    </>
}

export default TableComponent;