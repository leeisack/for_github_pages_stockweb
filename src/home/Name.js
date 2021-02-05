import React from "react";
import "./Home.css";
import { FormControl, Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

const Name = () => {
  return (
    <section className="container">
      <div className="name_container">
        <h1>
          <span>J</span>
          <span>o</span>
          <span>o</span>
          <span>g</span>
          <span>l</span>
          <span>e</span>
        </h1>
      </div>
      <div className="search_container">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search your stocks!"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </section>
  );
};
export default Name;
