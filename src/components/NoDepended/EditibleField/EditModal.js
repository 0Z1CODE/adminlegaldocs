import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, FormGroup, Label,Modal, ModalBody  } from "reactstrap";
import { AvField, AvForm } from "availity-reactstrap-validation";

class EditModal extends Component {
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
            <AvForm>
              <FormGroup>
                <Label className="efield efield__modal-label">
                  Edit: {this.props.eModalLabel}?
                </Label>
                <AvField
                  name={this.props.eName}
                  value={this.props.eText}
                  onChange={this.props.handleChange}
                  className="efield efield__input"
                />
              </FormGroup>
            </AvForm>
            <div className="efield efield__footer my-2 d-flex justify-content-end">
              <Button className="efield  efield__primary-btn " onClick={this.props.changeField} >
                Apply
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
EditModal.propTypes = {
  eText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  eName: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  eTitle: PropTypes.string,
  eModalLabel: PropTypes.string,
  changeField: PropTypes.func.isRequired,

};

export default EditModal;
