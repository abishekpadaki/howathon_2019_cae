import React from "react";
import {Link} from 'react-router-dom'
import { Card } from "react-bootstrap";
import './styles.css';

export default class CardComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
      return(
          <>
          <Link className="custom_card" to={{pathname:"/layout", state: {comp: this.props.comp}}} style={{ textDecoration: 'none' }}>
          <Card style={{ width: "30rem" }}>
                  <Card.Body>
                    <Card.Title>{this.props.cardtxt}</Card.Title>

                    <Card.Text>
                      {this.props.carddesc}
                    </Card.Text>
                  </Card.Body>
                </Card>
                
                </Link>
                </>
      )
    }
};

