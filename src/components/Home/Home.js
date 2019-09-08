import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <h1>
        Search for skilled up employees in BPDTS using the search bar below...
      </h1>
      <br />
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="Enter a skill" />
          </Col>
          <Col>
            <Button>Search</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Home;
