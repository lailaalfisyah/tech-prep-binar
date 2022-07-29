import Logincard from "../components/logincard";

export default function Login() {
  return (
    <div>
      <div
        style={{
          display: "block",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          marginTop: "10rem",
        }}
      >
        <Logincard />
        <div
          style={{
            display: "block",
            marginTop: "8px",
          }}
        >
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}
