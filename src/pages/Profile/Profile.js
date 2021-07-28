import React, { Component, Suspense, lazy } from "react";
import PropTypes from "prop-types";
import PageTitle from "../../components/NoDepended/PageTitle";
import TrotlingBlocks from "../../components/StyledComponents/TrotlingBlocks";
import { Row, Col } from "reactstrap";

const ProfileComponent = React.lazy(() =>
  import("../../components/ProfileComponent")
);

class Profile extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="page-content py-3">
          <PageTitle titleText="Profile" />
          <Row>
            <Col lg={12}>
              <Suspense fallback={<TrotlingBlocks />}>
                <ProfileComponent />
              </Suspense>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
// Profile.propTypes = {

// }
export default Profile;
