import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export class BookFormModal extends Component {
    render() {
        return (
            
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><p>Add Your Book</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        onSubmit={this.props.addBook}
                    >
                        <Form.Control size="lg" type="text" placeholder="Book Title" name='addTitle' />
                        <Form.Control size="lg" type="text" placeholder="Description" name='addDescription' />
                        <Form.Control size="lg" type="text" placeholder="Image Link" name='addLink' />
                        <Form.Control size="lg" type="text" placeholder="addStatus" name='addStatus' />
                        <Form.Control size="lg" type="submit" value='add book' />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default BookFormModal
