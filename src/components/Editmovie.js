import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import {  edit } from '../Redux/Action';
function Editmovie({movie}) {
    const [show, setShow] = useState(false);
    const [title, settitle] = useState(movie.title);
    const [describe, setdescribe] = useState(movie.describe);
    const [poster, setposter] = useState(movie.poster);
    const [trailer, settrailer] = useState(movie.trailer);
    const [rating, setrating] = useState(movie.rating);
    const dispatch = useDispatch()


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlesubmit=()=>{
        const data={title,describe,poster,trailer,rating,id:movie.id}
        dispatch(edit(movie.id,data))
        handleClose()
    }
    return (
        <div>
            <Button variant="info"style={{marginTop:"20px",}} onClick={handleShow}>
                Update
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
                                defaultValue={movie.title}
                                placeholder="Movie title"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(event => setdescribe(event.target.value))}
                                defaultValue={movie.describe}
                                placeholder="Movie description"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Poster</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(event => setposter(event.target.value))}
                                defaultValue={movie.poster}
                                placeholder="Movie poster"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Rating(/5)</Form.Label>
                            <Form.Control
                                type="number"
                                onChange={(event => setrating(event.target.value))}
                                defaultValue={movie.rating}
                                placeholder="Movie rating"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Trailer</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(event => settrailer(event.target.value))}
                                defaultValue={movie.trailer}
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

export default Editmovie