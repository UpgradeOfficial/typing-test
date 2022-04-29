import React, { useState } from "react";
import { toast } from "react-toastify";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Join = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if (name === "" || room ===""){
            toast.error("all fields are required")
            return
        }
        const res = await fetch("http://127.0.0.1:5000/chat/?name="+name+'&room='+ room)
        const data = await res.json()
        toast.success("Joined room "+ room +" SUccessfully")
        navigate("/chat/?name="+name+'&room='+ room)
    }
  return (
  <div>
    <Form inline onSubmit={handleSubmit}>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label className="me-sm-2" for="exampleEmail">
            name
          </Label>
          <Input
            id="examplename"
            name="name"
            placeholder="Odeyemi Increase Ayobami"
            type="name"
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label className="me-sm-2" for="exampleRoom">
            Room
          </Label>
          <Input
            id="exampleRoom"
            name="Room"
            placeholder="don't tell!"
            type="Room"
            onChange={(e) => setRoom(e.target.value)}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  )
};

export default Join;
