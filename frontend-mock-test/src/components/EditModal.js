import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import axios from "axios";
import { Navigate } from "react-router-dom";

function EditModals(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [APIData, setAPIData] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
      "access-control-allow-origin": "*",
    },
  };
  const getData = () => {
    axios
      .get(`https://62248b256c0e3966204118f3.mockapi.io/api/test/dummyData/`)
      .then((getData) => {
        setAPIData(getData.data);
        // console.log("getData", APIData);
      });
  };

  const updateAPIData = (id) => {
    axios
      .put(
        `https://62248b256c0e3966204118f3.mockapi.io/api/test/dummyData/${id}`,
        {
          name,
          price,
          imageurl,
        },
        config
      )
      .then((json) => {
        handleClose();
        getData();
      })
      .catch((err) => {
        // console.log("err", err);
      });
  };

  return (
    <>
      <div style={{ marginRight: "5px" }}>
        <Button variant="primary" onClick={handleShow}>
          <BiEdit />
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" value={props.id} disabled />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={props.name}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder={props.price}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                type="text"
                placeholder={props.imageurl}
                value={imageurl}
                onChange={(e) => setImageurl(e.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => updateAPIData(props.id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModals;
