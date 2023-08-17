import { useReducer, useState, useContext } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useSignInMutation } from "../service/user.service";
import { message } from "antd";
import { UserContext } from "../../Layouts/websiteLayouts";
import { IresponUser } from "../../models/type";

type signInType = {
  email: string;
  password: string;
};
const intialSignIn = {
  email: "",
  password: "",
};
type FormValidType = {
  isValidemail: boolean;
  isValidpassword: boolean;
};

const intialFormValid = {
  isValidemail: true,
  isValidpassword: true,
};
const reducerFormValid = (
  state: FormValidType,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "VALIDATE_EMAIL":
      if (action.payload.length == 0) {
        return { ...state, isValidemail: true };
      }
      return { ...state, isValidemail: false };

    case "VALIDATE_PASS":
      if (action.payload.length == 0) {
        return { ...state, isValidpassword: true };
      }
      return { ...state, isValidpassword: false };
    default:
      return state;
  }
};

const reducerSignIn = (
  state: signInType,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "UPDATE_PASS":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
const SignInPage = () => {
  const [formSignIn, dispatchFormSignIn] = useReducer(
    reducerSignIn,
    intialSignIn
  );

  const [formValid, dispatchFormValid] = useReducer(
    reducerFormValid,
    intialFormValid
  );
  const { setUser } = useContext(UserContext);

  const [submit, setsubmit] = useState(false);
  const [signIp] = useSignInMutation();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setsubmit(true);
    if (!formValid.isValidemail && !formValid.isValidpassword) {
      console.log(formSignIn);
      signIp(formSignIn)
        .then((response) => {
          const { data }: any = response;
          console.log(data);
          if ("checkUser" in data) {
            const user = {
              accessToken: data.accessToken,
              _id: data.checkUser._id,
              email: data.checkUser.email,
              role: data.checkUser.role,
              username: data.checkUser.username,
            };
            localStorage.setItem("user", JSON.stringify(user));

            alert("Đăng Nhập Thành Công");
            if (data.checkUser.role == "admin") {
              navigate("/admin");
            } else {
              navigate("/");
              window.location.reload();
            }
          }
        })
        .catch((err) => {
          console.log(err);
          messageApi.error("Tài Khoản hoặc mật khẩu không Đúng");
        });
    }
  };
  return (
    <MDBContainer fluid className="bg-dark" style={{ paddingTop: "100px" }}>
      <MDBRow>
        {contextHolder}
        <MDBCol sm="6">
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-row ps-5 pt-5">
              <MDBIcon
                fas
                icon="crow fa-3x me-3"
                style={{ color: "#fea116" }}
              />
              <span className="h1 fw-bold mb-0 text-light">Log in</span>
            </div>

            <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
              <MDBInput
                wrapperClass=" mx-5 w-100"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                placeholder="Email"
                onChange={(e) => {
                  dispatchFormSignIn({
                    type: "UPDATE_EMAIL",
                    payload: e.target.value,
                  });
                  dispatchFormValid({
                    type: "VALIDATE_EMAIL",
                    payload: e.target.value,
                  });
                }}
              />
              <div className="text-danger mb-4 mx-5">
                {formValid.isValidemail && submit ? "Email is required" : ""}
              </div>

              <MDBInput
                wrapperClass=" mx-5 w-100"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                placeholder="******"
                onChange={(e) => {
                  dispatchFormSignIn({
                    type: "UPDATE_PASS",
                    payload: e.target.value,
                  });
                  dispatchFormValid({
                    type: "VALIDATE_PASS",
                    payload: e.target.value,
                  });
                }}
              />
              <div className="text-danger mb-4 mx-5">
                {formValid.isValidpassword && submit
                  ? "Password is required"
                  : ""}
              </div>

              <button className="mb-4 p-2 rounded-5 border-2 border border mx-5 w-100 text-white block  bg-info ">
                {" "}
                Log in{" "}
              </button>
              <p className="small mb-5 pb-lg-3 ms-5">
                <Link className="text-muted" to="#!">
                  Forgot password?
                </Link>
              </p>
              <p className="ms-5">
                Don't have an account?{" "}
                <Link to="/signup" className="link-info">
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </MDBCol>

        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            alt="Login image"
            className="w-100"
            style={{ objectFit: "cover", objectPosition: "left" }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignInPage;
