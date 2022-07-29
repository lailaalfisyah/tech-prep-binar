import RegisterCard from "../components/registerCard";

export default function Register() {
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
        <RegisterCard />
        <div
          style={{
            display: "block",
            marginTop: "8px",
          }}
        >
          <p>
            Already have an account? <a href="/">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
