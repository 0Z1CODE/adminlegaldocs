import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, FormGroup, Label,Modal, ModalBody  } from "reactstrap";
import { AvField, AvForm } from "availity-reactstrap-validation";

class DeleteModal extends Component {
  state = {};
  render() {
    return (
      <>
        <Modal
          centered={true}
          isOpen={this.props.modal}
          toggle={this.props.switch_modal}
        >
          <ModalBody>
            <div>
            <Label className="efield efield__modal-label">
                  Delete: {this.props.eName} ?
                </Label>
              </div>
            <div className="efield efield__footer my-2 d-flex justify-content-end">
              <Button className="efield  efield__primary-btn " onClick={this.props.deleteField} >
                Delete
              </Button>
              <Button
                className="efield efield__cancel-btn "
                type="button"
                onClick={this.props.switch_modal}
              >
                Cancel
              </Button>
            </div>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
DeleteModal.propTypes = {
  eName: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  deleteField: PropTypes.func.isRequired,
};

export default DeleteModal;
