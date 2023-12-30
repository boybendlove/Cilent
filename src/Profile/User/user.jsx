import React from "react";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import './user.css'


function User() {

    return (
        <div className="container">
            <div className="body">
                <div class="row">
                    <div class="left">
                        <ul>
                            <li id="acc"><Link style={{ color: 'black' }} className="nav-link" to={`/user`}>My Account</Link></li>
                            <li><Link style={{ color: 'black' }} className="nav-link" to={`/info`}>Information</Link></li>
                            <li><Link style={{ color: 'black' }} className="nav-link" to={`/history`}>Transaction History</Link></li>
                        </ul>
                    </div>

                    <div class="right">
                        <div className="title">
                            <h1>Tài khoản</h1>
                        </div>

                        <div class="row1">
                            <div class="column left1">
                                <p>Member number:</p>
                                <p>Phone number:</p>
                                <p>Email:</p>
                                <p>Wallet balance:</p>
                            </div>

                            <div class="column right1">
                                <p>SJ2459235907</p>
                                <p>+84988397508</p>
                                <p>trantannhatlinh@gmail.com</p>
                                <p>0 VND</p>
                            </div>
                        </div>
                        <button id='change'>Change Password</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default User;