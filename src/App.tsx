import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Brodie from "./Brodie.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">Madison Holloway- UD CISC275</header>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "500px",
                                height: "450px",
                                backgroundColor: "#ef233c"
                            }}
                        >
                            <h3 style={{ textAlign: "left" }}>
                                Three facts about me:
                            </h3>
                            <ul>
                                <li>I live on a beach town in Massachusetts</li>
                                <li>I really like movies, especially Marvel</li>
                                <li>
                                    I have a 12 year old bulldog named Brodie
                                    who loves to swim, boat, and go tuna
                                    fishing.
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "500px",
                                height: "450px",
                                backgroundColor: "#ef233c"
                            }}
                        >
                            Here is a picture of my adorable pup!
                            <img
                                src={Brodie}
                                alt="My 12 year old puppy Brodie"
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
