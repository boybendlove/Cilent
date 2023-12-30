import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';


function LogoutLink(props) {
    const [loggedOut, setLoggedOut] = useState(false);

    const handleLogout = async () => {
        try {
            // Gọi API để logout
            const response = await fetch('https://localhost:7280/api/auth/logout', {
                method: 'POST', // Hoặc 'GET' tùy theo yêu cầu của API
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`, // Gửi token trong header
                },
            });

            if (response.ok) {
                // Xóa token khỏi local storage
                localStorage.removeItem('token');
                localStorage.removeItem('id_user');
                setLoggedOut(true);
            } else {
                console.log('Logout failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };
    return (
        <li className="nav-item">
             {loggedOut ? (<Redirect to="/signin" />) :
            (<Link className="nav-link" to={`/signin`} onClick={handleLogout}>
                <i className="fas fa-user-alt mr-1 text-gray"></i>Login
            </Link>)}
        </li>
    );
}

export default LogoutLink;