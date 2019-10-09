import React from 'react';
import Table from 'react-bootstrap/Table';

export default class StatsTable extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="statsTableCard">
                <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Box Name</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Box1</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>Box2</td>
      
    </tr>
    
  </tbody>
</Table>
            </div>
        )
    }
}