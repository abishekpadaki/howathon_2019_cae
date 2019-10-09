import React, { useState, useEffect, useRef } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './features/HomePage/homepage';
import Layout from './features/Layout/index';
import previousState from './utils/previousState';
import compare from './utils/compareObjects';
import FetchData from './graphql/utils';
import { getLists } from './graphql/queries';
import useGlobal from './store';

const Routing = () => {
    const [, globalActions] = useGlobal();
    const { setLists } = globalActions;
    const [data, setData] = useState({});
    const [query, setQuery] = useState(<></>);
    const onMount = useRef(true);
    const prevState = previousState(data);
    useEffect(() => {
        if (onMount.current) {
            setQuery(
                FetchData(getLists(), setData, {})
            );
            onMount.current = false;
            return;
        }
        if (!compare(prevState, data)) {
            setLists(data.list);
        }
    });

    return (
        <Router>
            <div>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/layout" render={(props) => {
                    return (<Layout comp={props.location.state.comp} />);
                }}
                />
            </div>
            {query}
        </Router>
    )
}

export default Routing;