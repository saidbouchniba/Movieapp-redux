import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { add } from '../Redux/Action';
function Addmovie() {
    const [show, setShow] = useState(false);
    const [title, settitle] = useState("");
    const [describe, setdescribe] = useState("");
    const [poster, setposter] = useState("");
    const [trailer, settrailer] = useState("");
    const [rating, setrating] = useState(0);
    const dispatch = useDispatch()


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlesubmit=()=>{
        const data={title,describe,poster,trailer,rating,id:Date.now()}
        dispatch(add(data))
        handleClose()
    }
    return (
        <div>
            <Button variant="success" onClick={handleShow}>
                Add movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(event => settitle(event.target.value))}
                                placeholder="Movie title"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(event => setdescribe(event.target.value))}
                                placeholder="Movie description"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Poster</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(event => setposter(event.target.value))}
                                placeholder="Movie poster"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Rating(/5)</Form.Label>
                            <Form.Control
                                type="number"
                                onChange={(event => setrating(event.target.value))}
                                placeholder="Movie rating"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Trailer</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(event => settrailer(event.target.value))}
                                placeholder="Movie trailer"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handlesubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Addmovie