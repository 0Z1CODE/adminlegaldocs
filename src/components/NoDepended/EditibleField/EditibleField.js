import React, { Component } from "react";
import PropTypes from "prop-types";
import Icofont from "react-icofont";
import axios from "./../../../services/axios";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

class EditibleField extends Component {
  state = {
    editible: true,
    deleteble: false,
    modal: false,
    update: null,
    addLabel: false,
    modalType: null,
  };
  componentDidMount() {
    if (this.props.isEditible === false) {
      this.setState({ editible: false });
    }
    if (this.props.hasLabel === true) {
      this.setState({ addLabel: true });
    }
    if (this.props.isDeletable === true) {
      this.setState({ deleteble: true });
    }
  }

  switch_modal = (el) => {
    this.setState((prevState) => ({ modal: !prevState.modal }));
    this.setState({ modalType: el.currentTarget.getAttribute("attr-type") });
    console.log(this.state.modalType);
  };

  handleChange = (el) => {
    let { update } = this.state;
    const { name, value } = el.currentTarget;
    if (update === null) {
      update = {};
    }
    update[name] = value;
    this.setState({ update });
  };

  changeField = () => {
    const { update } = this.state;
    if (update !== null) {
      axios
        .put(`${this.props.eApi}/${this.props.eParamId}`, update)
        .then((r) => this.setState({ update: null }));
    }
  };

  deleteField = () => {};

  render() {
    return (
      <>
        <div className="efield__holder">
          <div
            className="efield efield__container d-flex justify-content-lg-between align-items-end"
            style={{ backgroundColor: this.props.bg }}
          >
            <div className="d-flex flex-column ">
              {this.state.addLabel === true && (
                <>
                  <div className="efield efield__label">
                    {this.props.eLabel}
                  </div>
                </>
              )}

              <div
                className="efield efield__text"
                style={{ color: this.props.color }}
              >
                {this.props.eText}
              </div>
            </div>
            <div className="efield efield__buttons d-flex">
              {this.state.editible === true && (
                <div
                  className="efield efield__button"
                  onClick={this.switch_modal}
                  attr-type="edit"
                >
                  <Icofont
                    icon="edit-alt"
                    style={{ color: this.props.pancil }}
                    className="efield__edit-btn"
                    titlr="edit"
                  ></Icofont>
                </div>
              )}

              {this.state.deleteble === true && (
                <div
                  className="efield efield__button"
                  onClick={this.switch_modal}
                  attr-type="del"
                >
                  <Icofont
                    icon="ui-delete"
                    className="efield__edit-btn efield__delete-btn efield"
                    title="edit"
                  ></Icofont>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="efield efield__modal">
          {this.state.modalType === "edit" && (
            <>
              <EditModal
                switch_modal={this.switch_modal}
                changeField={this.changeField}
                eName={this.props.eName}
                eText={this.props.eText}
                handleChange={this.handleChange}
                modal={this.state.modal}
                eModalLabel={this.props.eModalLabel}
              />
            </>
          )}

          {this.state.modalType === "del" && (
            <>
              <DeleteModal
                switch_modal={this.switch_modal}
                deleteField={this.deleteField}
                eName={this.props.eName}
                modal={this.state.modal}
              />
            </>
          )}
        </div>
      </>
    );
  }
}

EditibleField.propTypes = {
  eText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  eName: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  bg: PropTypes.string,
  pancil: PropTypes.string,
  color: PropTypes.string,
  eTitle: PropTypes.string,
  eLabel: PropTypes.string,
  eModalLabel: PropTypes.string,
  isEditible: PropTypes.bool,
  hasLabel: PropTypes.bool,
  isDeletable: PropTypes.bool
};

export default EditibleField;
