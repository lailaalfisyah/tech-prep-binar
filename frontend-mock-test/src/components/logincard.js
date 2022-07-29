import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/loginCard.css";
import axios from "axios";

function Logincard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  console.log("token");

  const onSubmitForm = (e) => {
    e.preventDefault();
    axios
      .post(`https://test-binar.herokuapp.com/auth/login`, {
        email,
        password,
      })
      .then((json) => {
        console.log("json", json);
        localStorage.setItem("token", json.data.result.access_token);
        console.log(
          "json.data.result.accessToken",
          json.data.result.access_token
        );
        navigate("/productlist");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <Card style={{ width: "18rem", marginTop: "1rem", marginLeft: "1rem" }}>
          <h2>Sign In</h2>
          <Form className="form" onSubmit={onSubmitForm}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@example.com"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input
                type="password"
                className="form-control"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Button>Login</Button>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default Logincard;
