import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import './styles.css';

export default class MainStats extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            
            <div className="mainstats_div">
               
            <div className="mainstats_card flex-container">
                
<div className="statl col-sm-6">
<h3 className="txtcol">Number Of Boxes</h3>
<h2 className="numcol">{this.props.numboxes}</h2>
</div>

<div className="statr col-sm-6">
<h3 className="txtcol">Number Of Locations</h3>
<h2 className="numcol">{this.props.numlocations}</h2>
</div>
    
</div>
            </div>
            
            
           
        )
    }
}