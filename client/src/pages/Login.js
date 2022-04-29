import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("api/user/login/", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        // axiosInstance.defaults.headers["authorization"] =
        //   "JWT " + localStorage.getItem("access_token");
        // navigate("/");
        console.log("this operation was successful as you can see");
      });
  };

  return (
    <div>
      <Form inline onSubmit={handleSubmit}>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label className="me-sm-2" for="exampleEmail">
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="something@idk.cool"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label className="me-sm-2" for="examplePassword">
            Password
          </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="don't tell!"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
     
    </div>
  );
};

export default Login;
