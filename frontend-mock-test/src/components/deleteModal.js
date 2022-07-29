import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DeleteModal(props) {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const onDelete = (id) => {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        Authorization: token,
      },
    };

    axios
      .delete(
        `https://62248b256c0e3966204118f3.mockapi.io/api/test/dummyData/${id}`,
        config
      )
      .then((json) => {
        // console.log("json", json);
        handleClose();
      })
      .catch((err) => {
        // console.log("err", err);
      });

    const getData = () => {
      let token = localStorage.getItem("token");
      let config = {
        headers: {
          Authorization: token,
        },
      };

      axios
        .get(`https://test-binar.herokuapp.com/v1/products`, config)
        .then((json) => {
          console.log("jsonget", json.data.result);
        });
    };
  };

  // const getData = () => {
  //   let token = localStorage.getItem("token");
  //   let config = {
  //     headers: {
  //       Authorization: token,
  //     },
  //   };

  //   axios
  //     .get(`https://test-binar.herokuapp.com/v1/products`, config)
  //     .then((json) => {
  //       setProduct(json.data.result);
  //       console.log("json", json.data.result);
  //     });
  // };

  // const onDelete = (id) => {
  //   axios
  //     .delete(`https://test-binar.herokuapp.com/v1/products/${id}`)
  //     .then((json) => {
  //       console.log("json", json);
  //       // getData();
  //     });
  // };

  return (
    <>
      <div style={{ marginRight: "5px" }}>
        <Button variant="primary" onClick={() => handleShow()}>
          <RiDeleteBin6Line />
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              onDelete(props.id);
            }}
          >
            Yes Delete!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
