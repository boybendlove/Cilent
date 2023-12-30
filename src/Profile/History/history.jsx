import React from "react";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import './history.css'


function History() {

    return (
        <div className="container">
            <div className="body">
                <div class="row">
                    <div class="left">
                        <ul>
                            <li><Link style={{ color: 'black' }} className="nav-link" to={`/user`}>My Account</Link></li>
                            <li><Link style={{ color: 'black' }} className="nav-link" to={`/info`}>Information</Link></li>
                            <li id="acc"><Link style={{ color: 'black' }} className="nav-link" to={`/history`}>Transaction History</Link></li>
                        </ul>
                    </div>

                    <div class="right">
                        <div className="title">
                            <h1>Transaction History</h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default History;