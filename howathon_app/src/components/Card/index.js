import React from "react";
import { Card } from "react-bootstrap";
import './styles.css';

const CardComponent=props=>{
    const {cardtxt, carddesc} =props;
    return(
        <div className="custom_card">
        <Card style={{ width: "30rem" }}>
                <Card.Body>
                  <Card.Title>{cardtxt}</Card.Title>

                  <Card.Text>
                    {carddesc}
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
    )
};

export default CardComponent;