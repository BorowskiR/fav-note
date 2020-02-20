import React from 'react';
import PropTypes from 'prop-types';
import SideBar from 'components/organisms/SideBar/SideBar';
import withContext from 'hoc/withContext';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding-left: 150px;
`;

const UserPageTemplate = ({ children }) => (
  <StyledWrapper>
    <SideBar />
    {children}
  </StyledWrapper>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default withContext(UserPageTemplate);
