import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './dummy.css';

export default class DummyComponent extends React.Component{
    constructor(props){
        super(props);
    }
render(){
    return(
        <>
        <Jumbotron>
  <h1 className="text">Hello, world!</h1>
  <p className="text">
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="dark">Useless Button</Button>
  </p>
</Jumbotron>
        </>
    )
}

}