import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoIcon from 'assets/icons/logo.svg';

const StyledWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
  margin-bottom: 30px;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Sidebar = ({ pageType }) => (
  <StyledWrapper activeColor={pageType}>
    <StyledLogoLink to="/" />
    <StyledLinksList>
      <li>
        <ButtonIcon exact as={NavLink} to="/" active icon={penIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeclass="active" />
      </li>
    </StyledLinksList>
    <StyledLogoutButton as={NavLink} to="/login" icon={logoutIcon} />
  </StyledWrapper>
);

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Sidebar.defaultProps = {
  pageType: 'note',
};

export default Sidebar;