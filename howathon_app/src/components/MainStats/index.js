import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import './styles.css';

export default class MainStats extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            
            
            <div className="mainstats_card">
                <Row>
<div className="statl col-sm-6">
Test
</div>

<div className="statr col-sm-6">
Test
</div>
    
</Row>
            </div>
            
           
        )
    }
}