import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {saveToStorage,getFromStorage} from '../API/Storage';

function Name(props) {

    const [name, setName] = useState('')
    const response = localStorage.getItem('id_user')
    console.log(response)
    useEffect(() => {

        const fetchData = async () => {

            const response = localStorage.getItem('id_user')
            console.log(response)
            
            setName(response)
        }

        fetchData()

    }, [])
    console.log(name)
    return (
        <li className="nav-item dropdown">
            <a 
                className="nav-link dropdown-toggle" 
                style={{ cursor: 'pointer' }}
                id="pagesDropdown"
                data-toggle="dropdown"
                aria-haspopup="true" 
                aria-expanded="false"
                >
                <i className="fas fa-user-alt mr-1 text-gray"></i>
                {name}
            </a>
         {/* onClick de sang trang /profile */}
        </li>
    );
}

export default Name;