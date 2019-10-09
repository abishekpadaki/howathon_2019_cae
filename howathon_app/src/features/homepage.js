import React from 'react';
import DummyComponent from '../components/dummy';

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
            <p>Home Page</p>
            <DummyComponent/>
            </>
        )
            
        
    }

}