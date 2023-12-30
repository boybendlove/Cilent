import React from "react";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import './info.css'


function Info() {

    return (
        <div className="container">
            <div className="body">
                <div class="row">
                    <div class="left">
                        <ul>
                            <li><Link style={{ color: 'black' }} className="nav-link" to={`/user`}>My Account</Link></li>
                            <li id="acc"><Link style={{ color: 'black' }} className="nav-link" to={`/info`}>Information</Link></li>
                            <li><Link style={{ color: 'black' }} className="nav-link" to={`/history`}>Transaction History</Link></li>
                        </ul>
                    </div>

                    <div class="right">
                        <div className="title">
                            <h1>Information</h1>
                        </div>

                        <div class="row1">
                            <div class="column left1">
                                <p>Last Name:</p>
                                <p>First Name:</p>
                                <p>Date of birth:</p>
                                <p>Passport/ID:</p>
                                <p>Nationality</p>
                                <p>Phone Number</p>
                                <p>Country:</p>
                                <p>City</p>
                                <p>Address:</p>
                            </div>

                            <div class="column right1">
                                <p>Trần Tấn</p>
                                <p>Nhật Linh</p>
                                <p>22/04/2001</p>
                                <p>abc</p>
                                <p>abc</p>
                                <p>0988397508</p>
                                <p>Vietnam</p>
                                <p>Hanoi</p>
                                <p>abc</p>
                            </div>
                        </div>
                        <button id='update'>Update Info</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Info;