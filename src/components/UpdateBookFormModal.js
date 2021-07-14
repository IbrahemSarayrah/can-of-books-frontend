import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export class UpdateBookFormModal extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><p>Add Your Book</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        onSubmit={this.props.updateBook}
                    >
                        <Form.Control size="lg" type="text" name='updateTitle' defaultValue={this.props.updateTitle} />
                        <Form.Control size="lg" type="text" name='updateDescription' defaultValue={this.props.updateDescription} />
                        <Form.Control size="lg" type="text" name='updateLink' defaultValue={this.props.updateLink} />
                        <Form.Control size="lg" type="text" name='updateStatus' defaultValue={this.props.updateStatus} />
                        <Form.Control size="lg" type="submit" value='Update Book' />
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

export default UpdateBookFormModal
