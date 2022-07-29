import React from "react";
import { Card } from "react-bootstrap";
import EditModal from "./EditModal";
import DeleteModal from "./deleteModal";

function Itemcard(props) {
  return (
    <div style={{ display: "flex", columnCount: "3" }}>
      <Card
        style={{
          width: "18rem",
          marginTop: "1rem",
          marginLeft: "1rem",
          height: "25rem",
        }}
      >
        <Card.ImgOverlay>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              alignItems: "flex-start",
              height: "50vh",
            }}
          >
            <EditModal
              id={props.id}
              name={props.title}
              price={props.price}
              imageurl={props.image}
            />
            <DeleteModal id={props.id} />
          </div>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Img variant="top" src={props.image} />
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Itemcard;
