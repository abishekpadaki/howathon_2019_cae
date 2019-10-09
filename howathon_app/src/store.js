import React from 'react';
import useGlobalHook from './utils/globals';
import * as actions from './actions';

const initialState = {
    boxes: [],
    locations: [],
    tableQuery: {
        date: '',
        time: '',
        boxes: '',
        box: '',
        location: ''
    }
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;