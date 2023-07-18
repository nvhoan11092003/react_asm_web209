import { useReducer } from 'react';
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
    email: string,
    password: string
}
const intialSignIn = {
    email: "",
    password: ""
}
const reducerSignIn = (state: signInType, action: { type: string, payload: string }) => {
    switch (action.type) {
        case "UPDATE_EMAIL":
            return { ...state, email: action.payload }
        case "UPDATE_PASS":
            return { ...state, password: action.payload }
        default:
            return state
    }
}
const SignInPage = () => {
    const [formSignIn, dispatchFormSignIn] = useReducer(reducerSignIn, intialSignIn)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            console.log(formSignIn);

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
                            <span className="h1 fw-bold mb-0 text-light">Log in</span>
                        </div>

                        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>


                            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg" placeholder='Email'
                                onChange={(e) => {
                                    dispatchFormSignIn(
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
                                    dispatchFormSignIn(
                                        {
                                            type: "UPDATE_PASS",
                                            payload: e.target.value
                                        }
                                    )
                                }
                                }
                            />

                            <MDBBtn className="mb-4 px-5 mx-5 w-100" style={{}} color='info' size='lg' block>Login</MDBBtn>
                            <p className="small mb-5 pb-lg-3 ms-5"><a className="text-muted" href="#!">Forgot password?</a></p>
                            <p className='ms-5'>Don't have an account? <a href="/signup" className="link-info">Register here</a></p>

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

export default SignInPage;