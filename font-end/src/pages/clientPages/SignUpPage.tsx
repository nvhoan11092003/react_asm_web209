import React, { useReducer } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';
type signInType = {
    name: string,
    email: string,
    password: string,
    re_password: string

}
const intialSignUp = {
    name: "",
    email: "",
    password: "",
    re_password: "",


}
const reducerSignUp = (state: signInType, action: { type: string, payload: string }) => {
    switch (action.type) {
        case "UPDATE_NAME":
            return { ...state, name: action.payload }
        case "UPDATE_EMAIL":
            return { ...state, email: action.payload }
        case "UPDATE_PASS":
            return { ...state, password: action.payload }
        case "UPDATE_RE_PASS":
            return { ...state, re_password: action.payload }

        default:
            return state
    }
}
const SignUpPage = () => {
    const [formSignUp, dispatchFormSignUp] = useReducer(reducerSignUp, intialSignUp)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            console.log(formSignUp);

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

                        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

                            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Name' id='formControlLg' type='text' size="lg" placeholder='Your name'
                                onChange={(e) => {
                                    dispatchFormSignUp(
                                        {
                                            type: "UPDATE_NAME",
                                            payload: e.target.value
                                        }
                                    )
                                }
                                }
                            />
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg" placeholder='Email'
                                onChange={(e) => {
                                    dispatchFormSignUp(
                                        {
                                            type: "UPDATE_EMAIL",
                                            payload: e.target.value
                                        }
                                    )
                                }
                                }
                            />
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg" placeholder='******'
                                onChange={(e) => {
                                    dispatchFormSignUp(
                                        {
                                            type: "UPDATE_PASS",
                                            payload: e.target.value
                                        }
                                    )
                                }
                                }
                            />
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Re-Password' id='formControlLg' type='password' size="lg" placeholder='******'
                                onChange={(e) => {
                                    dispatchFormSignUp(
                                        {
                                            type: "UPDATE_RE_PASS",
                                            payload: e.target.value
                                        }
                                    )
                                }
                                }
                            />


                            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Register</MDBBtn>

                            <p className='ms-5'>Log in to your account? <a href="/signin" className="link-info">Log in here</a></p>

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