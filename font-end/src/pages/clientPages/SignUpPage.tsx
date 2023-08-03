import React, { useReducer, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { useSignUpMutation } from '../../service/user.service';
import { message } from 'antd';
type signInType = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string

}
const intialSignUp = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
}

type FormValidType = {
    isValidname: boolean,
    isValidemail: boolean,
    isValidpassword: boolean,
    isValidre_password: boolean,
}

const intialFormValid = {
    isValidname: true,
    isValidemail: true,
    isValidpassword: true,
    isValidre_password: true,
}
const reducerSignUp = (state: signInType, action: { type: string, payload: string }) => {
    switch (action.type) {
        case "UPDATE_NAME":
            return { ...state, username: action.payload }
        case "UPDATE_EMAIL":
            return { ...state, email: action.payload }
        case "UPDATE_PASS":
            return { ...state, password: action.payload }
        case "UPDATE_RE_PASS":
            return { ...state, confirmPassword: action.payload }

        default:
            return state
    }
}
const reducerFormValid = (state: FormValidType, action: { type: string, payload: any }) => {

    switch (action.type) {
        case "VALIDATE_NAME":
            if (action.payload.length == 0) {
                return { ...state, isValidname: true }
            }
            return { ...state, isValidname: false }

        case "VALIDATE_EMAIL":
            if (action.payload.length == 0) {
                return { ...state, isValidemail: true }
            }
            return { ...state, isValidemail: false }

        case "VALIDATE_PASS":
            if (action.payload.length == 0) {
                return { ...state, isValidpassword: true }
            }
            return { ...state, isValidpassword: false }

        case "VALIDATE_RE_PASS":
            console.log(action)
            if (!action.payload) {
                return { ...state, isValidre_password: true }
            }
            return { ...state, isValidre_password: false }
        default:
            return state
    }
}
const SignUpPage = () => {
    const navigate = useNavigate();
    const [formSignUp, dispatchFormSignUp] = useReducer(reducerSignUp, intialSignUp)
    const [formValid, dispatchFormValid] = useReducer(reducerFormValid, intialFormValid)
    const [submit, setsubmit] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();
    const [signUp] = useSignUpMutation()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            setsubmit(true)
            if (!formValid.isValidemail && !formValid.isValidname && !formValid.isValidpassword && !formValid.isValidre_password) {
                signUp(formSignUp).then((data) => {
                    console.log(data);
                    if (data.data) {
                        messageApi.info(data.data.message);
                        alert("Tạo Thành Công Tài khoản");
                        navigate("/signin");
                    } else {
                        messageApi.warning(data.errer.data.message);
                    }


                })


            }

        } catch (error) {

        }
    }
    return (
        <MDBContainer fluid className='bg-dark' style={{ paddingTop: "100px" }}>
            <MDBRow>

                <MDBCol sm='6'>
                    <form action="" onSubmit={handleSubmit}>
                        <div className='d-flex flex-row ps-5 pt-5'>
                            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#fea116' }} />
                            <span className="h1 fw-bold mb-0 text-light">Register</span>
                        </div>
                        {contextHolder}
                        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                            <MDBInput wrapperClass='mx-5 w-100' label='Name' id='formControlLg' type='text' size="lg" placeholder='Your name'
                                onChange={(e) => {
                                    dispatchFormSignUp(
                                        {
                                            type: "UPDATE_NAME",
                                            payload: e.target.value
                                        }
                                    )
                                    dispatchFormValid(
                                        {
                                            type: "VALIDATE_NAME",
                                            payload: e.target.value
                                        }
                                    )
                                }
                                }
                            />
                            <div className="text-danger mb-4 mx-5">{formValid.isValidname && submit ? "Name is required" : ""}</div>
                            <MDBInput wrapperClass=' mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg" placeholder='Email'
                                onChange={(e) => {
                                    dispatchFormSignUp(
                                        {
                                            type: "UPDATE_EMAIL",
                                            payload: e.target.value
                                        }
                                    )
                                    dispatchFormValid(
                                        {
                                            type: "VALIDATE_EMAIL",
                                            payload: e.target.value
                                        }
                                    )
                                }
                                }
                            />
                            <div className="text-danger mb-4 mx-5">{formValid.isValidemail && submit ? "Email is required" : ""}</div>

                            <MDBInput wrapperClass=' mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg" placeholder='******'
                                onChange={(e) => {
                                    dispatchFormSignUp(
                                        {
                                            type: "UPDATE_PASS",
                                            payload: e.target.value
                                        }
                                    )
                                    dispatchFormValid(
                                        {
                                            type: "VALIDATE_PASS",
                                            payload: e.target.value
                                        }
                                    )
                                    if (e.target.value == formSignUp.confirmPassword) {
                                        var err = "true"
                                    } else {
                                        var err = ""
                                    }
                                    dispatchFormValid(
                                        {
                                            type: "VALIDATE_RE_PASS",
                                            payload: err
                                        }
                                    )
                                }
                                }
                            />
                            <div className="text-danger mb-4 mx-5">{formValid.isValidpassword && submit ? "password is required" : ""}</div>
                            <MDBInput wrapperClass=' mx-5 w-100' label='Re-Password' id='formControlLg' type='password' size="lg" placeholder='******'
                                onChange={(e) => {
                                    dispatchFormSignUp(
                                        {
                                            type: "UPDATE_RE_PASS",
                                            payload: e.target.value
                                        }
                                    )
                                    if (formSignUp.password == e.target.value) {
                                        var err = "true"
                                    } else {
                                        var err = ""
                                    }
                                    dispatchFormValid(
                                        {
                                            type: "VALIDATE_RE_PASS",
                                            payload: err
                                        }
                                    )
                                }
                                }
                            />
                            <div className="text-danger mb-4 mx-5">{formValid.isValidre_password && submit ? "Confirmation password does not match" : ""}</div>

                            <button className="mb-4 p-2 rounded-5 border-2 border border mx-5 w-100 text-white block  bg-info " > Register   </button>
                            <p className='ms-5'>Log in to your account?
                                <Link to="/signin" className="link-info">Log in here</Link></p>

                        </div>
                    </form>
                </MDBCol>

                <MDBCol sm='6' className='d-none d-sm-block px-0'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                        alt="Login image" className="w-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default SignUpPage;