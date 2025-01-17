import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("Sign Up");

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [passWord, setPassWord] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-6 m-auto items-start p-8 border min-w-[340ox] sm:min-w-96 rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "sign up" : "Log in"} to book
          appointment
        </p>
        <div className="w-full">
          <p>Full Name</p>
          <input
            type="text"
            onChange={(e) => setName(e.target.name)}
            value={name}
            name="name"
            className="w-full border border-zinc-300 mt-1 p-2 rounded"
            required
          />
        </div>
        <div className="w-full">
          <p>Email</p>
          <input
            type="email"
            onChange={(e) => setMail(e.target.mail)}
            value={mail}
            name="email"
            className="w-full border border-zinc-300 mt-1 p-2 rounded"
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassWord(e.target.passWord)}
            value={passWord}
            name="password"
            className="w-full border border-zinc-300 mt-1 p-2 rounded"
            required
          />
        </div>
        <button className="bg-primary text-white py-2 text-base rounded-md w-full">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span className="text-primary underline cursor-pointer" onClick={() => setState("Login")}>
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span className="text-primary underline cursor-pointer" onClick={() => setState("Sign Up")}>Click here</span>
          </p>
        )}
      </div>
    </form>
  );
};

export default LoginPage;
