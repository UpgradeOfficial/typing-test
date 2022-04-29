import { React, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Input, Label } from "reactstrap";
import queryString from "query-string";
import io from "socket.io-client";

let now = Date.now();
let socket
let end_point = "http://localhost:5000/"
const Home = () => {
  const [qoute, setQoute] = useState([]);
  const [qouteInput, setQouteInput] = useState("");
  const [time, setTime] = useState(0);
  const [id, setId] = useState("");

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");

  // set the time
  setInterval(() => {
    setTime(Math.floor((Date.now() - now) / 1000));
  }, 1000);

  // this runs every refresh
  useEffect(() => {
    const sendRequest = async () => {
      const res = await fetch(end_point+"api/qoute/random/");
      const data = await res.json();

      const word = data.qoute.text.split("");
      const word_object = [];
      setId(data.qoute._id);

      await word.map((element) => {
        const data = {
          className: "",
          letter: element,
        };
        word_object.push(data);
      });
      setQoute(word_object);
    };
    const word = sendRequest();
  }, []);

  // useEffect(() => {
  //   const { name, room } = queryString.parse(window.location.search);
  //   if (!name || !room) return
  //   // geting the name and room from the query string
  //   console.log("this will run also", name, room)
  //   socket = io(end_point);
  //   setName(name);
  //   setRoom(room);

  //   socket.emit("join", { name, room }, ({error, user}) => {
  //     if(error){
  //       toast.error(error)
  //       setMessage(error)
  //     }else{
  //       toast.success(`${user.name} joined`)
  //     }
  //   });
    
  // }, []);

  // useEffect(()=>{
  //   socket.on("message", ()=>{
  //     // alert('yea')
  //     console.log("message")
  //   })
  // }, [message])

  

// handle submit
  const handleQuouteInput = (e) => {
    if(qoute.length === 0) {toast.error("There is not qoute presently"); return false}
    setQouteInput(e.target.value);
    const letter_list = e.target.value.split("");
    const new_qoute = [];
    let correct = true;
    qoute.forEach((characterSpan, index) => {
      const character = letter_list[index];
      if (!character) {
        characterSpan.className = "";
        correct = false;
      } else if (character === characterSpan.letter) {
        characterSpan.className = "correct";
      } else {
        characterSpan.className = "incorrect";
        correct = false;
      }
      new_qoute.push(characterSpan);
    });
    setQoute(new_qoute);

    if (correct) {
      toast.success("you won in " + time + " seconds");
      fetch(end_point+"api/qoute/random/?id=" + id)
        .then((res) => res.json())
        .then((data) => {
          const new_word = [];
          data.qoute.text.split("").map((element) => {
            const data = {
              className: "",
              letter: element,
            };
            new_word.push(data);
          });
          setQoute(new_word);
          setQouteInput("");
        });

      now = Date.now();
    }
  };

  return (
    <div>
      <div className="timer">
        <h3>{time}</h3>
      </div>
      <div className="container">
        <div 
        className="qoute-display" 
        id="qouteDisplay"
        onPaste={(e) => {
          toast.warning("you can't paste text dear. Increase said so");
          e.preventDefault();
          return false;
        }}
        onCopy={(e) => {
          e.preventDefault();
          toast.warning("you can't copy dear text. Increase said so");
          return false;
        }} >
          {qoute.map((letter, index) => (
            <span key={index} className={letter.className}>
              {letter.letter}
            </span>
          ))}
        </div>

        <Label for="exampleText" style={{ marginTop: 30 }}>
         {qoute.length ? "Start Typing" : "There is a problem couldnt fetch data"}
        </Label>
        <Input
          onChange={handleQuouteInput}
          id="qouteInput"
          onPaste={(e) => {
            toast.warning("you can't paste dear. Increase said so");
            e.preventDefault();
            return false;
          }}
          onCopy={(e) => {
            e.preventDefault();
            toast.warning("you can't copy dear. Increase said so");
            return false;
          }}
          className="qoute-input"
          autoFocus
          value={qouteInput}
          type="textarea"
         
        />
      </div>
    </div>
  );
};

export default Home;
