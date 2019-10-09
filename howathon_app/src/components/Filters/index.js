import React, { useState, useEffect, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import Input from '../Input'
import Select from '../Select'
import './styles.css';

const Filters = props => {
    const { comp } = props;
    const [values, setValues] = useState({});
    const onMount = useRef(true);

    useEffect(() => {
        if (onMount.current) {
            //   if (!compare(prevState, { project, branch, env, brand, page, date, toDate }))
            // setValues({
            // });
            onMount.current = false;
            return;
        }
        // if (!compare(prevState, { project, branch, env, brand, page, date, toDate }))
        //   setValues({

        //   });
    });
    let content = <></>
    if (comp === 'sc1' || comp === 'sc2')
        content = <>
            <div className="label">Date</div>
            <Input
                className="dateInput"
                type='date'
            />
            <div className="label">Time</div>
            <Input
                className="dateInput"
                type='time'
            />
            <div className="label">Select Boxes</div>
            <Select
                setValues={setValues}
                placeholder="Pick some"
                options={[
                    { value: 'Box 1' },
                    { value: 'Box 2' },
                    { value: 'Box 3' }
                ]}
                multiple
            >
            </Select>
        </>
    else if (comp === 'sc3')
        content = <>
            <div className="label">Select a Box</div>
            <Select
                setValues={setValues}
                // label="Select Boxes"
                placeholder="Pick some"
                options={[
                    { value: 'Box 1' },
                    { value: 'Box 2' },
                    { value: 'Box 3' }
                ]}
                multiple
            >
            </Select>
        </>
    else content = <>
        <div className="label">Select a Location</div>
        <Select
       
            setValues={setValues}
            // label="Select Boxes"
            placeholder="Pick some"
            options={[
                { value: 'Box 1' },
                { value: 'Box 2' },
                { value: 'Box 3' },
                { value: 'Box 4' }
            ]}
            multiple
        >
        </Select>
    </>
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                {content}
            </div>
        </>
    );
};

export default Filters;