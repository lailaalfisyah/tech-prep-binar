import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Modals() {
  const [show, setShow] = useState(false);
  const [name, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [imageurl, setImageurl] = useState("");
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const create = () => {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        Authorization: token,
      },
    };

    axios.post(
      `https://62248b256c0e3966204118f3.mockapi.io/api/test/dummyData/`,
      {
        name,
        price,
        imageurl,
      },
      config
    );
    handleClose();
    navigate("/productlist");
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create New Card
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setProduct(e.target.value)}
                placeholder="product"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Price(Dollar USD)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image URL"
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
          <Button
            variant="primary"
            onClick={() => {
              create();
            }}
          >
            Create New Data
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;
