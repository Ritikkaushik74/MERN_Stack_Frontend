import React, { useState, useEffect } from "react";

import {
  Button,
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  Label,
  Input,
  Col
} from "reactstrap";

import { useSelector, useDispatch } from "react-redux";
import { deleteItems, getItems, addItems } from "../Redux/itemaction";

function ShopingList() {
  const items = useSelector(state => state.state.items);

  // console.log(items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  // const getdata = () => {
  //   axios
  //     .get(`https://j2kbt.sse.codesandbox.io/api/items`)
  //     .then(res => {
  //       console.log( res);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  // getdata();
  const shoppingList = () => {
    return (
      // <ListGroup className="container mt-4">
      items.map(({ name, _id }) => {
        // console.log(`{id: ${id} name:${name}}`);
        return (
          <ListGroupItem key={_id}>
            <Button
              className="mr-4"
              color="secondary"
              onClick={() => {
                console.log("id", _id);
                dispatch(deleteItems(_id));
              }}

              // onClick={() =>
              //   setstate({
              //     items: state.items.filter(item => item.id !== id)
              //   })
              // }
            >
              x
            </Button>
            {name}
          </ListGroupItem>
        );
      })
      // </ListGroup>
    );
  };

  const [text, settext] = useState("");

  return (
    <div className="container mt-5 mb-2">
      <Form
        onSubmit={e => {
          e.preventDefault();
          console.log(text);
          const newItem = {
            name: text
          };
          dispatch(addItems(newItem));
          console.log(newItem);
          settext("");
        }}
      >
        <FormGroup className="float-left row">
          <Label md={3} for="name">
            Add Item
          </Label>

          <Col md={7} style={{ minwidth: "50%" }}>
            <Input
              id="name"
              className="ml-1"
              value={text}
              onChange={e => settext(e.target.value)}
              placeholder="Item name"
              type="text"
              name="name"
              sm={10}
              xs={10}
              // style={{ minwidth: "50%", background: "black" }}
              // styles={{ minwidth: "50%", backgroundcolor: "black" }}
              // styles={{miniwidth:}}
            />
          </Col>
          <Col md={2}>
            <Button className="ml-1 " color="secondary" type="submit">
              Add
            </Button>
          </Col>
        </FormGroup>
      </Form>

      {/* <Button
        className="mt-4"
        color="secondary"
        onClick={() => {
          const promptName = prompt("Enter Name");
          if (promptName) {
            console.log("prompt Name", promptName);
            dispatch(() => addItems({ id: uuid(), name: promptName }));
          }
        }}

        onClick={() => {
          const name = prompt("Enter Item");
          if (name) {
            setstate({
              ...state,
              items: [...state.items, { name, id: uuid() }]
            });
          }
        }}
      >
        Add Items
      </Button> */}
      {/* </form> */}
      <ListGroup className="container mt-5">{shoppingList()}</ListGroup>
    </div>
  );
}

export default ShopingList;
