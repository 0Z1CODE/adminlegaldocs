import React, { Component, Suspense, lazy } from "react";
// import PropTypes from 'prop-types'
// import Icon from '@material-ui/core/Icon'
// import Icofont from 'react-icofont';
import { Row, Col } from "reactstrap";
import TrotlingBlocks from "../../components/StyledComponents/TrotlingBlocks";
import PageTitle from '../../components/NoDepended/PageTitle';



const BasicInformation = React.lazy(() =>
  import("./../../components/BasicInformation")
);
const Users = React.lazy(() => import("./../../components/Users"));

class Home extends Component {
  state = {};

  render() {
    // console.log(this.props);
    return (
     
        <div className="page-content py-3">
          <Row>
          <PageTitle titleText = "Dashboard"/>
            <Col lg={8}>
              <Suspense fallback={<TrotlingBlocks/>}>
                <BasicInformation />
              </Suspense>
            </Col>
            <Col lg={4}>
              <Suspense fallback={  <TrotlingBlocks/>}>
                <Users />
              </Suspense>
            </Col>
          </Row>
        </div>
     
    );
  }
}

export default Home;
