import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';

export default class MainStats extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="mainstats_div">

                <div className="mainstats_card flex-container">

                    <Link className="statl col-sm-6" to="" style={{ textDecoration: 'none' }}>
                        <h3 className="txtcol">Number Of Boxes</h3>
                        <h2 className="numcol">{this.props.numboxes}</h2>
                    </Link>

                    <Link className="statr col-sm-6" to="   " style={{ textDecoration: 'none' }}>
                        <h3 className="txtcol">Number Of Locations</h3>
                        <h2 className="numcol">{this.props.numlocations}</h2>
                    </Link>

                </div>
            </div>



        )
    }
}