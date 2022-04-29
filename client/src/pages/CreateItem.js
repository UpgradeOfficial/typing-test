import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Input } from "reactstrap";
import { itemActions } from "../store/item-slice";
import { v4 as uuidv4 } from "uuid";
import {  ListGroup } from "reactstrap";
import {  TransitionGroup } from "react-transition-group";
import ItemList from "../components/ItemList";


const CreateItem = () => {
  const [name, setname] = useState("");
 
  const dispatch = useDispatch();
  const items = useSelector(state => state.item.itemsList)
  const isItemLoading = useSelector(state => state.item.isItemLoading)
 
  const handleSubmit = (e) => {
    const id = uuidv4();

    e.preventDefault();
    fetch('http://localhost:5000/api/qoute/',{
        method: 'POST',
        headers : {"Content-Type": "application/json"},
        body : JSON.stringify({text: name})
      }).then((res)=> console.log(res))
   dispatch(itemActions.addItem({ name, id }));

  };

  useEffect(() =>{
    const sendRequest = async () =>{
      const res = await fetch('http://localhost:5000/api/qoute/')
      const data = await res.json()
      console.log(data)
      data.map(({_id : id, text:name})=>{
        dispatch(itemActions.addItem({name, id}))
      })

      
    }
    sendRequest()


  }, [])



  

  return (
    <div className="cart-container">
      <Container>
        <Input type="text" onChange={(e) => setname(e.target.value)}></Input>
        <Button
          style={{ marginTop: 2, marginBottom: 20 }}
          color="dark"
          onClick={handleSubmit}
        >

          
          Add Item
        </Button>

        <ListGroup>
           
            {items.map(item => ( 
              <TransitionGroup key={item.id} className="shopping-list">
            <ItemList  item={item} />

                </TransitionGroup>
            ) 
        
            )}
         
        </ListGroup>
      </Container>
    </div>
  );
};

export default CreateItem;
