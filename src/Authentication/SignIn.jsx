import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { addUsers } from '../Redux/Action/ActionSession';
import './Auth.css';
import { saveToStorage, getFromStorage } from '../API/Storage';
import { set } from 'date-fns';

function SignIn(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState([]);
    const [errorUsername, setErrorUsername] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getFromStorage('userArr');
            setUser(response);
        };

        fetchData();
    }, []);

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onSubmit = async () => {
        console.log("sai")
        if (!username) {
            setErrorUsername(true);
            setPassword('');
            console.log("sai")
            return;
        } else if (!password) {
            setErrorUsername(false);
            setErrorPassword(true);
            setPassword('');
            console.log("sai")
            return;
        } else {
            setErrorUsername(false);
            setErrorPassword(false);
            console.log("sai")
            console.log("sai")
            
                try {
                    const userID =[]
                    const response = await fetch('https://localhost:7280/api/auth/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username: username,
                            password: password,
                            rememberMe: true,
                        }),
                    });
                    response
            .json()
            .then(data => {
                userID.push(data.customer_id)
              })
                    console.log(response)
                    if (response.ok) {
                        alert("đăng nhập thành công")
                        setUser(username)
                        console.log('id_user', userID)
                        saveToStorage('id_user', username)
                        console.log(getFromStorage('id_user'))
                         
                            const action = addUsers(getFromStorage('id_user'))
                            dispatch(action)
                            setRedirect(true)
                    } else {
                        console.log('Login failed:', response.statusText);
                    }
                    localStorage.setItem("user_id", userID)
                } catch (error) {
                    console.error('Error logging in:', error);
                }
                
            }
        
    };
    
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                    <span className="login100-form-title p-b-33">
                        Sign In
					</span>

                    <div className="d-flex justify-content-center pb-5">
                        {errorUsername && <span className="text-danger">* Please Check Your Username</span>}
                        {errorPassword && <span className="text-danger">* Please Check Your Password</span>}
                    </div>

                    <div className="wrap-input100 validate-input">
                        <input className="input100" type="text" placeholder="Username" value={username} onChange={onChangeUsername} />
                    </div>

                    <div className="wrap-input100 rs1 validate-input">
                        <input className="input100" type="password" placeholder="Password" value={password} onChange={onChangePassword} />
                    </div>

                    <div className="container-login100-form-btn m-t-20">
                        {redirect && <Redirect to={`/`} />}
                        <button className="login100-form-btn" onClick={onSubmit}>
                            Sign in
						</button>
                    </div>

                    <div className="text-center p-t-45 p-b-4">
                        <span className="txt1">Create an account?</span>
                        &nbsp;
                        <Link to="/signup" className="txt2 hov1">
                            Sign up
						</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
