import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axiosInstance from "../axios";
import { resgister, reset } from "../store/auth-slice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
      toast.success(message);
    }
    dispatch(reset());
  }, [user, isError, isSuccess, isLoading, message, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // toast.success("submitting")
    const userData = {
      name,
      email,
      password,
    };
    dispatch(resgister(userData));
  };
  if (isLoading) {
    return <div>is loading</div>;
  }

  return (
    <div>
      <Form inline onSubmit={handleSubmit}>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label className="me-sm-2" for="exampleName">
            Name
          </Label>
          <Input
            id="exampleName"
            name="name"
            placeholder="odeyemi Increase"
            type="name"
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
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

export default Register;
