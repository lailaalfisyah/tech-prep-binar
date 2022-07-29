import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Itemcard from "../components/card";
import Navbar2 from "../components/Navbar2";
import "../styles/Card.css";
import axios from "axios";
import { Card, CardDeck, CardGroup } from "reactstrap";

function Productlist() {
  const [product, setProduct] = useState([]);

  const getData = () => {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        Authorization: token,
      },
    };

    axios
      .get(
        `https://62248b256c0e3966204118f3.mockapi.io/api/test/dummyData`,
        config
      )
      .then((json) => {
        setProduct(json.data);
      });
  };

  return (
    <div>
      <Navbar2 />
      <Button onClick={getData}>Refresh and show data</Button>
      <div
        style={{
          display: "flex",
          columnCount: "32",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {product.map((item, index) => {
          return (
            <Itemcard
              key={index}
              image={item.imageurl}
              title={item.name}
              price={item.price}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Productlist;
