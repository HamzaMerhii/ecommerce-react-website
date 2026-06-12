import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [mode, setMode] = useState("signup");
  const [error, setError] = useState(null);
  const { user, signup, login, logout } = useContext(AuthContext);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    let result;
    if (mode === "signup") {
      result = signup(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }
    if (result.success) {
      navigate("/")
    } else {
      setError(result.error);
    }
  }
  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          {mode === "signup" ? (
            <h1 className="page-title">Sign Up</h1>
          ) : (
            <h1 className="page-title">Login</h1>
          )}

          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            {error && <p className="error-message">{error}</p>}
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                id="email"
                className="form-input"
                {...register("email", { required: "Email is Required" })}
              />
              {errors.email && (
                <span className="form-error">{errors.email.message}</span>
              )}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                id="password"
                className="form-input"
                {...register("password", {
                  required: "Password is Required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 char",
                  },
                  maxLength: {
                    value: 12,
                    message: "Password must be at max 12 char",
                  },
                })}
              />
              {errors.password && (
                <span className="form-error">{errors.password.message}</span>
              )}
            </div>
            <button className="btn btn-primary btn-large">
              {mode === "signup" ? "Sign Up" : "Login"}
            </button>
          </form>
          <div className="auth-switch">
            {mode === "signup" ? (
              <p>
                Already have an account?
                <span className="auth-link" onClick={() => setMode("login")}>
                  Login
                </span>
              </p>
            ) : (
              <p>
                Don't have an account?
                <span className="auth-link" onClick={() => setMode("signup")}>
                  Sign Up
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
