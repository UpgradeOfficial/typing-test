import {  ListGroupItem, Button} from "reactstrap";
import { CSSTransition } from "react-transition-group";
import { useDispatch } from "react-redux";
import { itemActions } from "../store/item-slice";

const ItemList = ({ item}) => {
  const id= item.id
  const dispatch = useDispatch()


  const handleDelete = async () => {
 
    await fetch('http://localhost:5000/api/qoute/' + id, {
       method: 'DELETE'
     })
     dispatch(itemActions.deleteItem(id))
   };

    return ( 
        
            <CSSTransition  timeout={500} classNames="fade" >
              <ListGroupItem >
            {item.name} 
                <Button
                color="danger" 
                onClick={()=>handleDelete()}
                style={{ marginLeft: 50 }}
                >
                  Delete
                </Button>
              </ListGroupItem>
            </CSSTransition>
        
     );
}
 
export default ItemList;