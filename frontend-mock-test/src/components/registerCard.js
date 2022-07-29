import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Card } from "react-bootstrap";
import axios from "axios";

function RegisterCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    e.preventDefault();

    axios.post(`https://test-binar.herokuapp.com/auth/signup`, {
      name,
      email,
      password,
    });
    navigate("/");
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
          <h2>Sign Up</h2>
          <Form className="form" onSubmit={onSubmitForm}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@example.com"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                className="form-control"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Button>Register</Button>
          </Form>
        </Card>
      </div>
      <p>
        Already have an account? <span>Login</span>
      </p>
    </div>
  );
}

export default RegisterCard;
