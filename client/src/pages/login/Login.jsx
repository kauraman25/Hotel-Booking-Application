import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSignup, setIsSignup] = useState(false);
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      if (isSignup) {
        await axios.post("/api/auth/register", credentials);
        const loginRes = await axios.post("/api/auth/login", {
          username: credentials.username,
          password: credentials.password,
        });
        dispatch({ type: "LOGIN_SUCCESS", payload: loginRes.data });
        navigate("/");
      } else {
        const res = await axios.post("/api/auth/login", {
          username: credentials.username,
          password: credentials.password,
        });
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        navigate("/");
      }
    } catch (err) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: err.response?.data || { message: "Something went wrong" },
      });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        {isSignup && (
          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
            className="lInput"
          />
        )}
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          {isSignup ? "Signup" : "Login"}
        </button>
        <p style={{ fontSize: "small", fontWeight: "bold" }}>
          {isSignup ? "Already have an account?" : "If you're not registered!"}{" "}
          <button
            onClick={() => setIsSignup(!isSignup)}
            style={{
              border: "none",
              backgroundColor: "white",
              cursor: "pointer",
              color: "#A62C2C",
            }}
          >
            {isSignup ? "Login" : "Signup"}
          </button>
        </p>
        {error && <span style={{ color: "red" }}>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
