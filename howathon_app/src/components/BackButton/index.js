import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './styles.css';

export default class BackButton extends React.Component{
    render(){
        return(
            <>
            <Link className="button_div" to="/" style={{ textDecoration: 'none' }}>
              <Button variant="secondary">Go Back</Button>
              </Link>

            </>
        )
    }
}