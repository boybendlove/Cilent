import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './Auth.css'
import { getFromStorage, saveToStorage } from '../API/Storage';

function SignUp(props) {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [address, setAddress] = useState('');
    const [sex, setSex] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [errors, setErrors] = useState({
        username: false,
        email: false,
        password: false,
        confirmPassword: false,
        firstName: false,
        lastName: false,
        dateOfBirth: false,
        address: false,
        sex: false,
        phoneNumber: false
    });
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    const [success, setSuccess] = useState(false);

    const handleSignUp = async (e) => {
        e.preventDefault();
    
        const errors = {};
        let hasError = false;
    
        if (!username) {
            errors.username = true;
            hasError = true;
        }
    
        if (!email) {
            errors.email = true;
            hasError = true;
        } else if (!validateEmail(email)) {
            errors.emailRegex = true;
            hasError = true;
        }
    
        if (!password) {
            errors.password = true;
            hasError = true;
        } else if (password.length < 8) {
            errors.passwordLength = true;
            hasError = true;
        }
        if (!confirmPassword) {
            errors.confirmPassword = true;
            hasError = true;
        } else if (confirmPassword !== password) {
            errors.passwordMismatch = true;
            hasError = true;
        }
    
         
        if (!firstName) {
            errors.firstName = true;
            hasError = true;
        }
    
        if (!lastName) {
            errors.lastName = true;
            hasError = true;
        }
    
        if (!dateOfBirth) {
            errors.dateOfBirth = true;
            hasError = true;
        }
    
        if (!address) {
            errors.address = true;
            hasError = true;
        }
    
        if (!sex) {
            errors.sex = true;
            hasError = true;
        }
    
        if (!phoneNumber) {
            errors.phoneNumber = true;
            hasError = true;
        }
    
        setErrors(errors);
    
        if (!hasError) {
            // Create the newUser object with the required fields
            const newUser = {
                username: username,
                email: email,
                Password: password,
                FirstName: firstName,
                LastName: lastName,
                DateOfBirth: dateOfBirth,
                Address: address,
                sex: sex,
                PhoneNumber: phoneNumber
            };
    
            // Send newUser to the API for registration
            try {
                const response = await fetch('https://localhost:7280/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                });
    
                if (response.ok) {
                    alert('Đăng ký thành công!');
                    setSuccess(true);
                } else {
                    alert('Đăng ký không thành công! Vui lòng thử lại.');
                }
            } catch (error) {
                console.error('Error registering user:', error);
                alert('Đăng ký không thành công! Vui lòng thử lại.');
            }
        }
    };

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                    <span className="login100-form-title p-b-33">
                        Sign Up
                    </span>
                    <div className="d-flex justify-content-center pb-5">
                        {Object.values(errors).some(value => value) && (
                            <span className="text-danger">* Vui lòng điền đầy đủ thông tin!</span>
                        )}
                        {errors.confirmPassword && (
                            <span className="text-danger">* Mật khẩu xác nhận không khớp!</span>
                        )}
                    </div>
                    <div className={`wrap-input100 validate-input ${errors.username ? 'has-error' : ''}`}>
                        <input className="input100" value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
                    </div>

                    <div className={`wrap-input100 validate-input ${errors.email ? 'has-error' : ''}`}>
                        <input className="input100" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                    </div>

                    <div className={`wrap-input100 validate-input ${errors.password ? 'has-error' : ''}`}>
                        
                        <input className="input100" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password must be at least 8 characters. include (uppercase, lowercase, numbers and special characters) " />
                        
                    </div>

                    <div className={`wrap-input100 validate-input ${errors.confirmPassword ? 'has-error' : ''}`}>
                        <input className="input100" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" />
                    </div>
                    <div className={`wrap-input100 validate-input ${errors.firstName ? 'has-error' : ''}`}>
                        <input className="input100" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" />
                    </div>

                    <div className={`wrap-input100 validate-input ${errors.lastName ? 'has-error' : ''}`}>
                        <input className="input100" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" />
                    </div>

                    <div className={`wrap-input100 validate-input ${errors.dateOfBirth ? 'has-error' : ''}`}>
                        <input className="input100" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} type="date" placeholder="Date of Birth" />
                    </div>

                    <div className={`wrap-input100 validate-input ${errors.address ? 'has-error' : ''}`}>
                        <input className="input100" value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Address" />
                    </div>

                    <div className={`wrap-input100 validate-input ${errors.sex ? 'has-error' : ''}`}>
                        <select className="input100" value={sex} onChange={(e) => setSex(e.target.value)}>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    <div className={`wrap-input100 validate-input ${errors.phoneNumber ? 'has-error' : ''}`}>
                        <input className="input100" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="tel" placeholder="Phone Number" />
                    </div>
                    <div className={`container-login100-form-btn m-t-20 ${success ? 'success' : ''}`}>
                        {success && <Redirect to={'/signin'} />}
                        <button className="login100-form-btn" onClick={handleSignUp}>
                            Sign Up
                        </button>
                    </div>

                    <div className="text-center p-t-45 p-b-4">
                        <span className="txt1">Login?</span>
                        &nbsp;
                        <Link to="/signin" className="txt2 hov1">
                            Click
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
