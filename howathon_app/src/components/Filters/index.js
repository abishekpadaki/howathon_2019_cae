import React, { useState, useEffect, useRef } from 'react';

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
      <div style={{backgroundColor: 'blue'}}>
        history  
      </div>
    </>
  );
};

export default Filters;