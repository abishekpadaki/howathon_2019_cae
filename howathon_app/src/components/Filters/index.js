import React, { useState, useEffect, useRef } from 'react';
import {Row, Col} from 'react-bootstrap';
import Input from '../Input'
import Select from '../Select'
import './styles.css';

const Filters = props => {
  const { dateRange, history, comparerender } = props;
  const [data, setData] = useState({ parameters: {} });
  const [values, setValues] = useState({
  });
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
  
  return (
    <>
      <div style={{textAlign: 'center'}}>
        <div className="label">Date</div>
        <Input
            className = "dateInput"
            type = 'date'
        />
        <div className="label">Time</div>
        <Input
            className = "dateInput"
            type = 'time'
        />
        <div className="label">Select Boxes</div>
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
      </div>
    </>
  );
};

export default Filters;