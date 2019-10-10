import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Input from '../Input'
import Select from '../Select'
import useGlobal from '../../store';
import './main.css';

const Filters = props => {
    const [globalState, globalActions] = useGlobal();
    const { setTableQueries } = globalActions
    const boxes = globalState.boxes.map(box => { return { 'value': box } })
    const locations = globalState.locations.map(location => { return { 'value': location.name } })
    const { comp } = props;
    const [values, setValues] = useState({
        date: '',
        time: '',
        boxes: '',
        box: '',
        location: ''
    });
    // const currdate= new Date();
    // // const currtime = '12:12'; 
    // var currtime= currdate.getHours() + ":" + currdate.getMinutes() ;
    // console.log(currdate)
   
    let content = <></>
    
    if (comp === 'sc1' || comp === 'sc2')
        content = <>
            <div className="label">Date</div>
            <Input
                className="dateInput"
                type='date'
                onChange={value => {
                    setValues({
                        ...values,
                        date: new Date(value).getTime() - 19800000
                    })
                }}
            />
            <div className="label">Time</div>
            <Input
                className="dateInput"
                type='time'
                onChange={value => {

                  setValues({
                        ...values,
                        time: value
                    })
                }}
            />
            <div className="label">Select Boxes</div>
            <Select
                setValues={value => {
                    setValues({
                        ...values,
                        boxes: value
                    })
                }}
                placeholder="Pick some"
                options={boxes}
                multiple
            >
            </Select>
        </>
    else if (comp === 'sc3')
        content = <>
            <div className="label">Select a Box</div>
            <Select
                setValues={value => {
                    setValues({
                        ...values,
                        box: value[0]
                    })
                }}
                placeholder="Pick some"
                options={boxes}
            >
            </Select>
        </>
    else content = <>
        <div className="label">Select a Location</div>
        <Select
            setValues={value => {
                setValues({
                    ...values,
                    location: value[0]
                })
            }}
            placeholder="Pick some"
            options={locations}
        >
        </Select>
    </>
    return (
        <>
            <Link className="backButton" to={'/'}>
                {'<'}
            </Link>
            <div style={{ textAlign: 'center' }}>
                {content}
                <Button
                    className={'submit'}
                    onClick={() => setTableQueries(values)}
                >
                    Go
                </Button>
            </div>
        </>
    );
};

export default Filters;