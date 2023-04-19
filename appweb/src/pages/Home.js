import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Editor from "../components/Editor";
import axios from "axios";

function Home(){
    const [editor, setEditor] = useState("");
    const [consola, setConsola] = useState("");

    const interpretar = async () => {
        console.log("ejecutando")
        try {
            setConsola("ejecutando...");
            if(editor ==""){
                setConsola("No hay codigo para interpretar");
                console.log("No hay codigo para interpretar");
            }else {
                console.log(editor)
                const response = await axios.post('http://localhost:5000/interpreter/interpretar', {code:editor});
                console.log(response.data);
                const {consola,errores} = response.data;   
                console.log(consola);
                setConsola(consola);
            }
        } catch (error) {
            console.log(error);
            setConsola("Error en el servidor");
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Editor</h1>
                </Col>
                <Col>
                    <h1>Console</h1>
                </Col>

            </Row>
            <Row>
                <Col style={{ textAlign: 'left' }}>
                    {/*<textarea id="editor" rows="20" cols="50"></textarea>*/}
                    <Editor input={setEditor}/>
                </Col>
                <Col>
                <textarea id="editor" rows="20" cols="50" value={consola}></textarea>
                </Col>
            </Row>
            {/*seccion de botones */}
            <Row>
                <Col>
                    <Button variant="outline-secondary" onClick={() =>interpretar()} >Run</Button>{' '}
                </Col>
            </Row>


        </Container>
    );
}

export default Home;