import React, { Component } from 'react'
import PropTypes from 'prop-types'


class PageTitle extends Component {
  state = {  }
  render() { 
    return (  
      <>
        <h4 className="page-title accent_font mb-3">{this.props.titleText}</h4>
      </>
    );
  }
}
PageTitle.propTypes = {
  titleText: PropTypes.string.isRequired 
}

export default PageTitle;