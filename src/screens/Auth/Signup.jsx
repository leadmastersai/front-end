import "./Styles.scss";
import "../../constants/preCss.scss";
import google from "../../assets/auth/google.svg";
import email from "../../assets/auth/mail.svg";
import linkedin from "../../assets/auth/linkedin.svg";
import Icon from "../../assets/auth/appIcon.svg";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate(); 

  const handleSignup = () => {
    navigate("/home"); 
  };
  function handleClick() {
    window.location.href = 'http://localhost:4000/auth/google';
  }

  function handleClick1() {
    window.location.href = 'http://localhost:4000/auth/linkedin';
  }
  return (
    <div className="container">
      <div className="container-sub">
        <div className="cont1">
          <img src={Icon} style={{width:50,height:50,resizeMode:"contain"}}/>
          <h2
            style={{
              textAlign: "center",
              flex: 1,
              alignSelf: "center",
              
            }}
          >
            Sign In
          </h2>
          <p
            className="gray-text1"
            style={{ marginBlock: -14, wordSpacing: 2 ,width:200,textAlign:'center'}}
          >
            Improve business performance with LeadMaster{" "}
          </p>
          <div className="btn-cont">
            <div className="btns" onClick={handleClick} >
              <img src={google} className="btn-icon"/>
              <div className="btn-text">Sign In with Google</div>
            </div>
            <div className="btns" onClick={handleClick1}>
              <img src={linkedin} className="btn-icon"/>
              <div className="btn-text">Sign in with Linked In</div>
            </div>
            <div className="btns" onClick={handleSignup}>
              <img src={email} className="btn-icon"/>
              <div className="btn-text">Sign In with Work Email</div>
            </div>
          </div>
          <p
            className="gray-text1"
            style={{ marginBlock: -10, wordSpacing: 2 }}
          >
            Already have an Account?
            <span
              style={{
                color: "#8F00FF",
                fontWeight: "600",
                margin: 5,
                padding: 0,
                cursor:'pointer'

              }}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
